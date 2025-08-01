import path from "node:path";

import postcss from "postcss";

import CssMinimizerPlugin from "../src/index";

import {
  compile,
  getCompiler,
  getErrors,
  getWarnings,
  readAssets,
} from "./helpers";

describe("warningsFilter option", () => {
  it('should match snapshot for a "function" value', async () => {
    const plugin = () => ({
      postcssPlugin: "warning-plugin",
      Once(root, { result }) {
        result.warn(`Warning from ${result.opts.from}`, {
          plugin: "warning-plugin",
        });
      },
    });

    plugin.postcss = true;

    const compiler = getCompiler({
      entry: {
        foo: path.join(__dirname, "fixtures", "test", "foo.css"),
        bar1: path.join(__dirname, "fixtures", "test", "bar1.css"),
        bar2: path.join(__dirname, "fixtures", "test", "bar2.css"),
      },
    });

    new CssMinimizerPlugin({
      parallel: false,
      minify: (data) => {
        const [[fileName, input]] = Object.entries(data);

        return postcss([plugin])
          .process(input, { from: fileName, to: fileName })
          .then((result) => ({
            code: result.css,
            map: result.map,
            error: result.error,
            warnings: result.warnings(),
          }));
      },
      warningsFilter(warning, file) {
        if (/foo/.test(file)) {
          return false;
        }

        return true;
      },
    }).apply(compiler);

    const stats = await compile(compiler);

    expect(readAssets(compiler, stats, /\.css$/)).toMatchSnapshot("assets");
    expect(getErrors(stats)).toMatchSnapshot("errors");
    expect(getWarnings(stats)).toMatchSnapshot("warnings");
  });
});
