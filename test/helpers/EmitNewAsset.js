export default class EmitNewAsset {
  constructor(options = {}) {
    this.options = options;
  }

  apply(compiler) {
    const pluginName = this.constructor.name;

    const { RawSource } = compiler.webpack.sources;

    compiler.hooks.compilation.tap(pluginName, (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: pluginName,
          stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
        },
        () => {
          compilation.emitAsset(
            this.options.name,
            new RawSource(`
.a {
  display: block;
  color: coral;
}
            `),
          );
        },
      );
    });
  }
}
