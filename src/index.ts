import * as words from "./data/words.json";

const { predicates, objects} = words;

export function generateFromEmail(email: string): string {
  // Retrieve name from email address
  const nameParts = email.replace(/@.+/, "");
  // Replace all special characters like "@ . _ ";
  const name = nameParts.replace(/[&/\\#,+()$~%._@'":*?<>{}]/g, "");
  // Create and return unique username
  return name;
}

export function generateUsername(separator?: string, length?: number): string {
  const adjective = predicates[Math.floor(Math.random() * predicates.length)];
  const noun = objects[Math.floor(Math.random() * objects.length)];
  const username = `${adjective}${separator || ""}${noun}`;
  if (length) {
    return username.substring(0, length);
  }
  return username;
}
