// Custom advanced types

declare type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
}

type DotPrefix<T extends string> = T extends "" ? "" : `.${T}`;
type IsRecord<T> = T extends object ? (T extends null ? false : true) : false;

/**
 * Allows to extract valid/type-safe keychain paths from object.
 * @example
 *  const myObject = {x: {y: 1}, z: 2};
 *  type ValidPaths = LeafPaths<typeof myObject>; // "x.y" | "z"
 */
declare type LeafPaths<T> = {
  [K in keyof T & string]: IsRecord<T[K]> extends true
    ? `${K}${DotPrefix<LeafPaths<T[K]>>}`
    : K
}[keyof T & string];

