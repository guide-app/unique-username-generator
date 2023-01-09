"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nouns = exports.adjectives = exports.generateUsername = exports.generateFromEmail = void 0;
const data_1 = require("./data");
function generateFromEmail(email) {
    // Retrieve name from email address
    const nameParts = email.replace(/@.+/, "");
    // Replace all special characters like "@ . _ ";
    const name = nameParts.replace(/[&/\\#,+()$~%._@'":*?<>{}]/g, "");
    // Create and return unique username
    return name;
}
exports.generateFromEmail = generateFromEmail;
function generateUsername(separator, length) {
    const adjective = data_1.adjectives[Math.floor(Math.random() * data_1.adjectives.length)];
    const noun = data_1.nouns[Math.floor(Math.random() * data_1.nouns.length)];
    const username = `${adjective}${separator || ""}${noun}`;
    if (length) {
        return username.substring(0, length);
    }
    return username;
}
exports.generateUsername = generateUsername;
var data_2 = require("./data");
Object.defineProperty(exports, "adjectives", { enumerable: true, get: function () { return data_2.adjectives; } });
Object.defineProperty(exports, "nouns", { enumerable: true, get: function () { return data_2.nouns; } });
