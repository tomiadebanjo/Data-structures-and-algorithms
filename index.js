const str = "hello"; // ellohay
const str2 = "apples"; // applesay
const str3 = "eat world"; // eatay orldway

const translate = strin => {
  const l = strin[0];
  const vowels = ["a", "e", "i", "o", "u"];
  const splitStr = strin.split(" ");
  if (splitStr.length > 1) {
    const result = splitStr
      .map(translate)
      .join(" ")
      .trim();
    return result;
  }

  if (vowels.includes(l)) {
    return `${strin}ay`;
  }
  return `${strin.substring(1)}${l}ay`;
};

console.log(translate(str));
console.log(translate(str2));
console.log(translate(str3));
