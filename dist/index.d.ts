type Style = "lowerCase" | "upperCase" | "capital";
export interface Config {
    dictionaries: string[][];
    separator?: string;
    length?: number;
    style?: Style;
}
export declare function generateFromEmail(email: string): string;
export declare function generateUsername(separator?: string, length?: number): string;
export { adjectives, nouns } from "./data";
