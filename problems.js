function calculateMoney(number) {
  const waste = 500 + 8 * 50;
  if (number < 0) {
    return "Invalid Number";
  }
  const earning = number * 120 - waste;
  return earning;
}

function checkName(str) {
  if (typeof str !== "string") {
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

function deleteInvalids(arr) {
  if (!Array.isArray(arr)) {
    return "Invalid Array";
  }
  const numbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      numbers.push(arr[i]);
    }
  }

  return numbers;
}

function password(obj) {
  if (
    !obj.siteName ||
    !obj.birthYear ||
    !obj.name ||
    obj.birthYear < 1000 ||
    obj.birthYear > 9999
  ) {
    return "invalid";
  }
  const name = obj.name;
  const siteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
  const birthYear = obj.birthYear;
  const str = siteName + "#" + name + "@" + birthYear;
  return str;
}

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }
  let totalEarning = 0;
  for (let i of arr) {
    if (i >= 3000) {
      totalEarning += i * 0.8;
    } else {
      totalEarning = totalEarning + i;
    }
  }
  const saving = totalEarning - livingCost;
  if (saving < 0) {
    return "earn more";
  }
  return saving;
}
