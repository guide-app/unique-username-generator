import { generateFromEmail, generateUsername } from "../src/index";
import { expect } from "chai";

describe("Username generated from email", () => {
  it("contains the 'local-part' of the email address", () => {
    const username = generateFromEmail("lakshminarayan@example.com");
    expect(username).to.equal("lakshminarayan");
  });

  it("contains a special character", () => {
    const username = generateFromEmail("lakshmi.narayan@example.com");
    expect(username).to.equal("lakshminarayan");
  });
});

describe("Username generated from scratch", () => {
  it("contains more than 1 character", () => {
    const username = generateUsername();
    expect(username).to.have.length.greaterThan(1);
  });

  it("contains separator character", () => {
    const username = generateUsername("-");
    expect(username).to.contain("-");
  });

  it("has a maximum length of 15", () => {
    const username = generateUsername("", 15);
    console.log(`    Trying Output: ${username}`);
    expect(username).to.have.length.lessThanOrEqual(15);
  });

  it("has a maximum length of 15 with separator", () => {
    const username = generateUsername("-", 15);
    console.log(`    Trying Output: ${username}`);
    expect(username).to.have.length.lessThanOrEqual(15);
  });
});
