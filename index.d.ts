/**
 * Array.map for strings.
 * @param string The string to iterate.
 * @param iteratee The iteratee to use.
 * @example
 * ```
 * const mapString = require("mapString");
 *
 * mapString("abcd", (val) => {
 *     if (val === "b") return "!"
 *     return val
 * });
 * //=> 'a!cd'
 * ```
*/
declare function mapString<T extends string>(string: T, iteratee: (value: string, index: number, string: T) => any): string;

export = mapString;
