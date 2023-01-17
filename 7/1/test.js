const repetition = [2, 3, 2, 5, 8, 2, 3];
const dict = {};

for (const number of repetition) {
  if (!dict[number]) {
    dict[number] = 1;
  } else {
    dict[number] += 1;
  }
}

console.log(Object.keys(dict).reduce((a, b) => (dict[a] > dict[b] ? a : b)));
