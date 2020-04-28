// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const SEASONS = {
  WINTER: "WINTER",
  SPRING: "SPRING",
  SUMMER: "SUMMER",
  AUTUMN: "AUTUMN",
};
const MIN_TEMP = -1000;
const MAX_TEMP = 1000;

/**
 * @param {number[]} T
 * @returns {string}
 */
function solution(T) {
  return pipe(
    groupElements,
    Object.entries,
    getMinMaxForGroup,
    getAmplitude,
    getSeasonWithHighestAmplitude,
    getSeason
  )(T);
}

const getMaxTemperature = reduce(function (acc, x) {
  return Math.max(acc, x);
}, MIN_TEMP);
const getMinTemperature = reduce(function (acc, x) {
  return Math.min(acc, x);
}, MAX_TEMP);

const getMinMaxForGroup = map(function ([season, temperatures]) {
  return [
    season,
    [getMinTemperature(temperatures), getMaxTemperature(temperatures)],
  ];
});
const getAmplitude = map(function ([season, [min, max]]) {
  return [season, max - min];
});
const getSeasonWithHighestAmplitude = reduce(
  function ([maxSeason, maxAmplitude], [season, amplitude]) {
    return amplitude > maxAmplitude
      ? [season, amplitude]
      : [maxSeason, maxAmplitude];
  },
  [null, MIN_TEMP]
);
const getSeason = prop(0);

/**
 * @param {number[]} temperatures
 * @returns { {[x: number]: number[]} }
 */
function groupElements(temperatures) {
  const seasons = Object.values(SEASONS);
  const daysInSeason = temperatures.length / 4;
  const getTempsForSeason = map(function (_, index) {
    return slice(
      index * daysInSeason,
      index * daysInSeason + daysInSeason
    )(temperatures);
  });
  const mapToObject = reduce(function (acc, temps, index) {
    acc[
      seasons[index]
    ] = temps; /* Using spread would look nice, but it gives us no benefit in this scenarion */

    return acc;
  }, {});

  return pipe(getTempsForSeason, mapToObject)(Object.values(SEASONS));
}

/**
 * @param {number} start
 * @param {number} finish
 * @returns {(xs: number[]) => number[]}
 */
function slice(start, finish) {
  return function (xs) {
    return xs.slice(start, finish);
  };
}

/**
 * @param {(x: A) => B} f
 * @returns {{(xs: A[]) => B[]}}
 */
function map(f) {
  return function (xs) {
    return xs.map(f);
  };
}

/**
 * @param {(acc: B, x: A) => B} f
 * @returns {{(xs: A[]) => B[]}}
 */
function reduce(f, acc) {
  return function (xs) {
    return xs.reduce(f, acc);
  };
}

/**
 * @param {Function[]} fs
 * @returns {(i: any) => any}
 */
function pipe() {
  const fs = Array(...arguments);
  return function (input) {
    return fs.reduce(function (acc, f) {
      return f(acc);
    }, input);
  };
}

/**
 * @param {string} key
 * @returns {(o: Object) => any}
 */
function prop(key) {
  return function (obj) {
    return obj[key];
  };
}

function tap(x) {
  console.log(x);

  return x;
}

{
  let input = [-3, -14, -5, 7, 8, 42, 8, 3];
  let output = solution(input);
  let expected = "SUMMER";

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = [2, -3, 3, 1, 10, 8, 2, 5, 13, -5, 3, -18];
  let output = solution(input);
  let expected = SEASONS.AUTUMN;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
