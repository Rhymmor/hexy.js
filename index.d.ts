/// <reference types="node" />

declare module "hexy" {
  type Arg = Buffer | string | number[];

  type FormatOptions = {
    width?: number;
    numbering?: "hex_bytes" | "none";
    format?: "eights" | "fours" | "twos" | "none";
    caps?: "lower" | "upper";
    annotate?: "ascii" | "none";
    prefix?: string;
    indent?: number;
    html?: boolean;
    offset?: number;
    length?: number;
    display_offset?: number;
  }

  export interface IHexLine {
    hex: string;
    lineNumber: string;
    ascii: string;
  }

  export class Hexy {
    constructor(arg: Arg, format?: FormatOptions);

    toArray(): IHexLine[];
    toString(): string;
  }

  export const hexy: (arg: Arg, format?: FormatOptions) => string;
}