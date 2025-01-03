function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let holder = 0;
  const tempFlowerBed = flowerbed;

  for (let i = 0; i < tempFlowerBed.length; i++) {
    if (
      tempFlowerBed[i] === 0 &&
      (tempFlowerBed[i - 1] === 0 || i === 0) &&
      (tempFlowerBed[i + 1] === 0 || i === tempFlowerBed.length - 1)
    ) {
      holder++;
      tempFlowerBed[i] = 1;
    }
  }
  return n <= holder;
}
