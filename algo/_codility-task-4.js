// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const DAYS = {
  Mon: 0,
  Tue: 1,
  Wed: 2,
  Thu: 3,
  Fri: 4,
  Sat: 5,
  Sun: 6,
};

/**
 * @param {string} S
 * @returns {number}
 */
function solution(S) {
  const daysInWeek = Object.values(DAYS).length;
  const HOUR = 60;
  const minuteSlotsInADay = getOffset(7, 24, 60);
  const weekSchedule = Array(...Array(daysInWeek + 1 * minuteSlotsInADay)).map(
    () => false
  );
  const days = S.split("\n");

  let index = -1;

  while (++index < days.length) {
    const [day, timeRange] = days[index].split(" ");
    const [start, finish] = timeRange.split("-");
    const [startHour, startMinutes] = start.split(":").map(mapToNumber);
    const [finishHour, finishMinutes] = finish.split(":").map(mapToNumber);
    let mark = getOffset(DAYS[day], startHour, startMinutes);
    const markEnd = getOffset(DAYS[day], finishHour, finishMinutes);
    console.log(
      markEnd - mark,
      day,
      startHour,
      startMinutes,
      finishHour,
      finishMinutes
    );

    while (++mark <= markEnd) {
      weekSchedule[mark] = true;
    }
  }

  index = -1;
  let longestSlot = 0;
  let currentSlot = 0;

  while (++index < weekSchedule.length) {
    if (!weekSchedule[index]) {
      ++currentSlot;
    } else {
      if (longestSlot < currentSlot) {
        longestSlot = currentSlot;
      }
      currentSlot = 0;
    }
  }

  return longestSlot;
}

function getOffset(day, hours, minutes) {
  return 1440 * day + 60 * hours + minutes;
}

function mapToNumber(x) {
  return parseInt(x, 10);
}

const dayRegExp = /(\w+) (\d+):(\d+)-(\d+):(\d+)/;
const extractData = map((day) => dayRegExp.exec(day));
const takeSlice = map((xs) => xs.slice(1, 6));
const calcTimeRange = map(([day, sHr, sMn, fHr, fMn]) => [
  getOffset(DAYS[day], parseInt(sHr, 10), parseInt(sMn, 10)),
  getOffset(DAYS[day], parseInt(fHr, 10), parseInt(fMn, 10)),
]);
const sortItems = sort(([aStart, _], [bStart, __]) => aStart - bStart);
const prependStartOfWeek = (items) => [[0, null]].concat(items);
const appendEndOfWeek = (items) =>
  [].concat(items).concat([[getOffset(6, 24, 0), null]]);
const zip1 = (items) => [items.slice(0, items.length - 1), items.slice(1)];
const zip2 = ([as, bs]) => zip(as, bs);
const calcDiff = map(([as, bs]) => bs[0] - as[as.length - 1]);
const max = reduce((acc, diff) => Math.max(acc, diff), Number.MIN_VALUE);
const splitLines = split("\n");

/**
 *
 * przykłąd z liczeniem czasem doświadczenie zawodowego
 * nachodzące przedziały
 */

function solution2(S) {
  return pipe(
    splitLines,
    extractData,
    toArray,
    takeSlice,
    calcTimeRange,
    sortItems,
    prependStartOfWeek,
    appendEndOfWeek,
    zip1,
    zip2,
    calcDiff,
    max
  )(S);
}

function toArray(xs) {
  const ret = [];
  let i = -1;

  while (++i < xs.length) {
    ret.push(xs[i]);
  }

  return ret;
}

function zip(as, bs) {
  const ret = [];
  let i = 0;

  while (as[i] && bs[i]) {
    ret.push([as[i], bs[i]]);
    ++i;
  }

  return ret;
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

function sort(f) {
  return function (xs) {
    return xs.sort(f);
  };
}

function tap(x) {
  console.log(x);

  return x;
}

function split(delimiter = "") {
  return function (str) {
    return str.split(delimiter);
  };
}

//////////

{
  let input = `Mon 01:00-23:00
Tue 01:00-23:00
Wed 01:00-23:00
Thu 01:00-23:00
Fri 01:00-23:00
Sat 01:00-23:00
Sun 01:00-21:00`;
  let output = solution2(input);
  let expected = 180;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
{
  let input = `Sun 10:00-20:00
Fri 05:00-10:00
Fri 16:30-23:50
Sat 10:00-24:00
Sun 01:00-04:00
Sat 02:00-06:00
Tue 03:30-18:15
Tue 19:00-20:00
Wed 04:25-15:14
Wed 15:14-22:40
Thu 00:00-23:59
Mon 05:00-13:00
Mon 15:00-21:00`;
  let output = solution2(input);
  let expected = 505;

  console.log("--------");
  console.log(output, expected, output === expected);
  console.log("--------");
}
// {
//   let input = `Mon 01:00-23:00
// Tue 01:00-23:00
// Wed 01:00-23:00
// Thu 01:00-23:00
// Fri 01:00-23:00
// Sat 01:00-23:00
// Sun 01:00-21:00`;
//   let output = solution(input);
//   let expected = 180;

//   console.log("--------");
//   console.log(output, expected, output === expected);
//   console.log("--------");
// }
// {
//   let input = `Sun 10:00-20:00
// Fri 05:00-10:00
// Fri 16:30-23:50
// Sat 10:00-24:00
// Sun 01:00-04:00
// Sat 02:00-06:00
// Tue 03:30-18:15
// Tue 19:00-20:00
// Wed 04:25-15:14
// Wed 15:14-22:40
// Thu 00:00-23:59
// Mon 05:00-13:00
// Mon 15:00-21:00`;
//   let output = solution(input);
//   let expected = 505;

//   console.log("--------");
//   console.log(output, expected, output === expected);
//   console.log("--------");
// }
