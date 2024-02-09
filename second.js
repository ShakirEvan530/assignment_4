function checkName(str) {
    if (typeof str !== 'string') {
          return "invalid";
        }
    let lw = str[str.length - 1];
    if (
      lw == "a" ||
      lw == "y" ||
      lw == "i" ||
      lw == "e" ||
      lw == "o" ||
      lw == "u" ||
      lw == "w" ||
      lw == "a" ||
      lw == "Y" ||
      lw == "I" ||
      lw == "E" ||
      lw == "O" ||
      lw == "U" ||
      lw == "W"
    ) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  }
  const name = checkName(199);
  console.log(name);