function reverseWords(s: string): string {
  let newString = "";

  const temp = s.split(" ");

  for (let i = temp.length - 1; i >= 0; i--) {
    if (
      newString !== "" &&
      temp[i] === "" &&
      temp[i - 1] !== "" &&
      temp[i - 1] !== undefined
    )
      newString += " ";
    if (temp[i] === "") continue;

    newString += `${temp[i]}${temp[i - 1] ? " " : ""}`;
  }

  return newString;
}

// S2
// var reverseWords = function(s) {
//     const words = [];
//     let word = "";
//     let i = s.length - 1;

//     while (i >= 0) {
//         // Skip trailing spaces
//         while (i >= 0 && s[i] === ' ') {
//             i--;
//         }

//         // Collect characters for the word
//         while (i >= 0 && s[i] !== ' ') {
//             word = s[i] + word; // Prepend character to build the word
//             i--;
//         }

//         // If a word is found, push it to the words array
//         if (word) {
//             words.push(word);
//             word = ""; // Reset for the next word
//         }
//     }

//     // Join the words with a single space and return
//     return words.join(' ');
// };

// S3


