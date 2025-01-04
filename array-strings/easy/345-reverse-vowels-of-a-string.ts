function reverseVowels(s: string): string {
  // Solution 1
  if (s === "") return s;

  const vow = s.match(/[aeiou]/gi);
  if (!vow) return s;

  return s.replace(/[aeiou]/gi, () => vow.pop() || "");

  // Solution 2
  //  let revStr = '', vowels = 'AEIOUaeiou', vow = []

  // for (let char of s) {
  //     if (vowels.includes(char)) {
  //         vow.push(char)
  //     }
  // }

  // for (let char of s) {
  //     if (vowels.includes(char)) {
  //         revStr += vow.pop()
  //     } else {
  //         revStr += char
  //     }
  // }
  // return revStr

  // Solution 3
  // let word = s.split('');
  // let start = 0;
  // let end = s.length - 1;
  // let vowels = "aeiouAEIOU";

  // while (start < end) {
  //     while (start < end && !vowels.includes(word[start])) {
  //         start++;
  //     }
  //     while (start < end && !vowels.includes(word[end])) {
  //         end--;
  //     }

  //     [word[start], word[end]] = [word[end], word[start]];
  //     start++;
  //     end--;
  // }

  // return word.join('');
}
