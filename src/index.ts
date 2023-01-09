import { adjectives, nouns } from "./data";

type Style = "lowerCase" | "upperCase" | "capital";

export interface Config {
  dictionaries: string[][];
  separator?: string;
  length?: number;
  style?: Style;
}

export function generateFromEmail(email: string): string {
  // Retrieve name from email address
  const nameParts = email.replace(/@.+/, "");
  // Replace all special characters like "@ . _ ";
  const name = nameParts.replace(/[&/\\#,+()$~%._@'":*?<>{}]/g, "");
  // Create and return unique username
  return name;
}

export function generateUsername(separator?: string, length?: number): string {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const username = `${adjective}${separator || ""}${noun}`;
  if (length) {
    return username.substring(0, length);
  }
  return username;
}

export { adjectives, nouns } from "./data";
