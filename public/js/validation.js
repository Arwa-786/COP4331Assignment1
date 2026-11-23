// Returns true if the color name is not empty and only has letters/spaces
function isValidColorName(color)
{
      if (typeof color !== "string")
      {
              return false;
      }
      let trimmed = color.trim();
      return trimmed.length > 0 && /^[A-Za-z ]+$/.test(trimmed);
}

// Lets Jest (Node.js) load this file; the browser skips this part
/* global module */
if (typeof module !== "undefined")
{
      module.exports = { isValidColorName };
}
