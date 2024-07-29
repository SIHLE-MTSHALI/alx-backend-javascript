#!/usr/bin/node
const hasValuesFromArray = (set, arr) => arr.every((value) => set.has(value));

export default hasValuesFromArray;
