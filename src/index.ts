import * as words from "./data/words.json";

const { objects, predicates } = words;

export function generateFromEmail(email: string): string {
  // Retrieve name from email address
  const nameParts = email.replace(/@.+/, "");
  // Replace all special characters like "@ . _ ";
  const name = nameParts.replace(/[&/\\#,+()$~%._@'":*?<>{}]/g, "");
  // Create and return unique username
  return name;
}

export function generateUsername(separator?: string, length = 4): string {
  const filteredObjects = objects.filter(object => object.length <= length);
  const filteredPredicates = predicates.filter(
    predicate => predicate.length <= length,
  );
  const noun =
    filteredObjects[Math.floor(Math.random() * filteredObjects.length)];
  const adjective1 =
    filteredPredicates[Math.floor(Math.random() * filteredPredicates.length)];
  const adjective2 =
    filteredPredicates[Math.floor(Math.random() * filteredPredicates.length)];
  const username = `${noun}${separator || ""}${adjective1}${
    separator || ""
  }${adjective2}`;
  return username;
}
