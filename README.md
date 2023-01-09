# unique-username-generator

This is a fork of a package to generate a unique username from email or randomly selected nouns and adjectives. User can add a separator between the username and define the maximum length of a username.

This fork was created because this library depends on a crypto library that is now deprecated. Since we are not using the random number generator aspect of this library, this fork removes that dependency.

Original NPM Link:

[![NPM](https://nodei.co/npm/unique-username-generator.png)](https://nodei.co/npm/unique-username-generator/)

## Importing

```javascript
// Using Node.js `require()`
const { generateFromEmail, generateUsername } = require("unique-username-generator");

// Using ES6 imports
import { generateFromEmail, generateUsername } from "unique-username-generator";
```

## Usage

### Generate username from email

It will generate username from email and add upto six random digits at the end of the name.

```javascript
const username = generateFromEmail("lakshmi.narayan@example.com");
console.log(username); // lakshminarayan
```

### Randomly generate unique username

It will generate unique username from adjectives, nouns, and separator. You can control these following parameters - separator and maximum length of a username.

```javascript
// Without any parameter
const username = generateUsername();
console.log(username); // blossomlogistical

// With any separator like "-, _"
const username = generateUsername("-");
console.log(username); // blossom-logistical

// With maximum length constraint and no separator
const username = generateUsername("", 15);
console.log(username); // blossomlogistic

// With maximum length constraint and separator
const username = generateUsername("-", 15);
console.log(username); // blossom-logisti
```

## License

The MIT License.
