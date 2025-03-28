export type Task<T> = () => Promise<T>;
export type Input = import("./index.js").Input;
export type RawSourceMap = import("@jridgewell/trace-mapping").EncodedSourceMap;
export type MinimizedResult = import("./index.js").MinimizedResult;
export type CustomOptions = import("./index.js").CustomOptions;
export type ProcessOptions = import("postcss").ProcessOptions;
export type Postcss = import("postcss").Postcss;
/**
 * @template T
 * @typedef {() => Promise<T>} Task
 */
/**
 * Run tasks with limited concurrency.
 * @template T
 * @param {number} limit - Limit of tasks that run at once.
 * @param {Task<T>[]} tasks - List of tasks to run.
 * @returns {Promise<T[]>} A promise that fulfills to an array of the results
 */
export function throttleAll<T>(limit: number, tasks: Task<T>[]): Promise<T[]>;
/**
 * @template T
 * @param fn {(function(): any) | undefined}
 * @returns {function(): T}
 */
export function memoize<T>(fn: (() => any) | undefined): () => T;
/**
 * @param {Input} input
 * @param {RawSourceMap} [sourceMap]
 * @param {CustomOptions} [minimizerOptions]
 * @return {Promise<MinimizedResult>}
 */
export function cssnanoMinify(
  input: Input,
  sourceMap?: import("@jridgewell/trace-mapping").EncodedSourceMap | undefined,
  minimizerOptions?: import("./index.js").CustomOptions | undefined,
): Promise<MinimizedResult>;
export namespace cssnanoMinify {
  function supportsWorkerThreads(): boolean;
}
/**
 * @param {Input} input
 * @param {RawSourceMap} [sourceMap]
 * @param {CustomOptions} [minimizerOptions]
 * @return {Promise<MinimizedResult>}
 */
export function cssoMinify(
  input: Input,
  sourceMap?: import("@jridgewell/trace-mapping").EncodedSourceMap | undefined,
  minimizerOptions?: import("./index.js").CustomOptions | undefined,
): Promise<MinimizedResult>;
export namespace cssoMinify {
  function supportsWorkerThreads(): boolean;
}
/**
 * @param {Input} input
 * @param {RawSourceMap} [sourceMap]
 * @param {CustomOptions} [minimizerOptions]
 * @return {Promise<MinimizedResult>}
 */
export function cleanCssMinify(
  input: Input,
  sourceMap?: import("@jridgewell/trace-mapping").EncodedSourceMap | undefined,
  minimizerOptions?: import("./index.js").CustomOptions | undefined,
): Promise<MinimizedResult>;
export namespace cleanCssMinify {
  function supportsWorkerThreads(): boolean;
}
/**
 * @param {Input} input
 * @param {RawSourceMap} [sourceMap]
 * @param {CustomOptions} [minimizerOptions]
 * @return {Promise<MinimizedResult>}
 */
export function esbuildMinify(
  input: Input,
  sourceMap?: import("@jridgewell/trace-mapping").EncodedSourceMap | undefined,
  minimizerOptions?: import("./index.js").CustomOptions | undefined,
): Promise<MinimizedResult>;
export namespace esbuildMinify {
  function supportsWorkerThreads(): boolean;
}
/**
 * @param {Input} input
 * @param {RawSourceMap} [sourceMap]
 * @param {CustomOptions} [minimizerOptions]
 * @return {Promise<MinimizedResult>}
 */
export function parcelCssMinify(
  input: Input,
  sourceMap?: import("@jridgewell/trace-mapping").EncodedSourceMap | undefined,
  minimizerOptions?: import("./index.js").CustomOptions | undefined,
): Promise<MinimizedResult>;
export namespace parcelCssMinify {
  function supportsWorkerThreads(): boolean;
}
/**
 * @param {Input} input
 * @param {RawSourceMap} [sourceMap]
 * @param {CustomOptions} [minimizerOptions]
 * @return {Promise<MinimizedResult>}
 */
export function lightningCssMinify(
  input: Input,
  sourceMap?: import("@jridgewell/trace-mapping").EncodedSourceMap | undefined,
  minimizerOptions?: import("./index.js").CustomOptions | undefined,
): Promise<MinimizedResult>;
export namespace lightningCssMinify {
  function supportsWorkerThreads(): boolean;
}
/**
 * @param {Input} input
 * @param {RawSourceMap} [sourceMap]
 * @param {CustomOptions} [minimizerOptions]
 * @return {Promise<MinimizedResult>}
 */
export function swcMinify(
  input: Input,
  sourceMap?: import("@jridgewell/trace-mapping").EncodedSourceMap | undefined,
  minimizerOptions?: import("./index.js").CustomOptions | undefined,
): Promise<MinimizedResult>;
export namespace swcMinify {
  function supportsWorkerThreads(): boolean;
}
