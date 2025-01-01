// Utility to measure execution time for multiple functions
export function compareExecutionTimes(
  label: string,
  fn1: (...args: any[]) => any,
  fn2: (...args: any[]) => any,
  ...args: any[]
): void {
  const start1 = performance.now();
  const result1 = fn1(...args);
  const end1 = performance.now();
  const time1 = end1 - start1;

  const start2 = performance.now();
  const result2 = fn2(...args);
  const end2 = performance.now();
  const time2 = end2 - start2;

  console.log(`\n${label}`);
  console.log(
    `Function 1 (gcdOfStrings1): Result = ${result1}, Time = ${time1.toFixed(
      3
    )} ms`
  );
  console.log(
    `Function 2 (gcdOfStrings2): Result = ${result2}, Time = ${time2.toFixed(
      3
    )} ms`
  );
  console.log(
    `Winner: ${
      time1 < time2
        ? "Function 1 (gcdOfStrings1)"
        : time1 > time2
        ? "Function 2 (gcdOfStrings2)"
        : "Tie"
    }`
  );
}
