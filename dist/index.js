"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUsername = exports.generateFromEmail = void 0;
const words = require("./data/words.json");
const { objects, predicates } = words;
function generateFromEmail(email) {
    // Retrieve name from email address
    const nameParts = email.replace(/@.+/, "");
    // Replace all special characters like "@ . _ ";
    const name = nameParts.replace(/[&/\\#,+()$~%._@'":*?<>{}]/g, "");
    // Create and return unique username
    return name;
}
exports.generateFromEmail = generateFromEmail;
function generateUsername(separator, length = 4) {
    const filteredObjects = objects.filter(object => object.length <= length);
    const filteredPredicates = predicates.filter(predicate => predicate.length <= length);
    const noun = filteredObjects[Math.floor(Math.random() * filteredObjects.length)];
    const adjective1 = filteredPredicates[Math.floor(Math.random() * filteredPredicates.length)];
    const adjective2 = filteredPredicates[Math.floor(Math.random() * filteredPredicates.length)];
    const username = `${noun}${separator || ""}${adjective1}${separator || ""}${adjective2}`;
    return username;
}
exports.generateUsername = generateUsername;
