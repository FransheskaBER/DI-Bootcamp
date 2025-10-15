// ✅ ES6 Module Syntax:

// Export
export const name = "Fransheska";
export function greet() {}
export default function() {}

// Import
import { name, greet } from "./file.js";
import anything from "./file.js";





// ✅ CommonJS Syntax:

// Export
module.exports = { name, greet };
exports.name = "Fransheska";

// Import
const { name, greet } = require("./file.js");
const anything = require("./file.js");