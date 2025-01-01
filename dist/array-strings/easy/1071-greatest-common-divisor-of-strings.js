"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../utilities/helpers");
function gcdOfStrings1(str1, str2) {
    if (str1 + str2 !== str2 + str1)
        return "";
    let holder = "";
    const holderObj = {};
    for (let i = 0; i < str2.length; i++) {
        if (holderObj[str2[i]]) {
            return holder;
        }
        if (str2[i] === str1[i]) {
            holder += str2[i];
            holderObj[str2[i]] = str2[i];
        }
    }
    return holder;
}
function gcdOfStrings2(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    const maxLength = myFunction(str1.length, str2.length);
    return str1.substring(0, maxLength);
}
function myFunction(a, b) {
    if (b === 0) {
        return a;
    }
    return myFunction(b, a % b);
}
const testCases = [
    { label: "No common divisor", input: ["ABCDEF", "GHIJKL"], expected: "" },
    {
        label: "One is multiple of the other",
        input: ["ABABABAB", "ABAB"],
        expected: "AB",
    },
    { label: "Identical strings", input: ["ABCD", "ABCD"], expected: "ABCD" },
    {
        label: "Alternating patterns",
        input: ["ABABABAB", "ABABAB"],
        expected: "AB",
    },
    { label: "One string is prefix", input: ["ABCDEFG", "ABC"], expected: "" },
    {
        label: "Large input, simple pattern",
        input: ["A".repeat(1000), "A".repeat(500)],
        expected: "A",
    },
    {
        label: "Large input, no pattern",
        input: ["A".repeat(1000) + "B", "A".repeat(999) + "C"],
        expected: "",
    },
    {
        label: "Mixed patterns",
        input: ["ABCABCABCABC", "ABCABC"],
        expected: "ABC",
    },
    { label: "Single character", input: ["A", "A"], expected: "A" },
    {
        label: "Completely disjoint",
        input: ["XYZXYZXYZ", "ABABABAB"],
        expected: "",
    },
    {
        label: "Complex large input",
        input: ["ABCDEF".repeat(166), "ABCDEF".repeat(83)],
        expected: "ABCDEF",
    },
];
testCases.forEach(({ label, input, expected }) => {
    console.log(`\n${label}`);
    (0, helpers_1.compareExecutionTimes)(label, gcdOfStrings1, gcdOfStrings2, ...input);
    console.log(`Expected Result: ${expected}`);
});
// // Test cases
// compareExecutionTimes(
//   "Case 1: Large Strings",
//   gcdOfStrings1,
//   gcdOfStrings2,
//   "ABCDEFABCDEFABCDEFABCDEFABCDEF",
//   "ABC"
// );
// compareExecutionTimes(
//   "Case 2: Repeated Patterns",
//   gcdOfStrings1,
//   gcdOfStrings2,
//   "ABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABC",
//   "ABC"
// );
// compareExecutionTimes(
//   "Case 3: No Common Divisor",
//   gcdOfStrings1,
//   gcdOfStrings2,
//   "LEET",
//   "CODE"
// );
// compareExecutionTimes(
//   "Case 4: Simple Pattern",
//   gcdOfStrings1,
//   gcdOfStrings2,
//   "ABABABAB",
//   "AB"
// );
