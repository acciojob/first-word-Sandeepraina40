function firstWord(s) {
  // Trim leading/trailing spaces and split by one or more spaces
  const words = s.trim().split(/\s+/);
  return words[0] || ''; // Return first word or empty string if input is empty
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));

