function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxCandies = Math.max(...candies);
  let arr = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies < maxCandies) {
      arr.push(false);
    } else {
      arr.push(true);
    }
  }

  return arr;
}
