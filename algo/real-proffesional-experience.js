/**
 * @param {string} input
 *
 * @returns {number}
 */
function experience(input, countFullMonth) {
  const START = 0;
  const END = 1;
  const DAY_REG_EXP = /(\d+).(\d+)-(\d+).(\d+)/;
  const ranges = [];
  const stack = [];
  let i = -1;
  let top;
  let sum = 0;

  function format(m, y, appendOneMonth) {
    return parseInt(m, 10) + (appendOneMonth ? 1 : 0) + parseInt(y, 10) * 12;
  }

  input = input.split("\n");

  while (++i < input.length) {
    const [_, sM, sY, eM, eY] = DAY_REG_EXP.exec(input[i]);

    ranges.push([format(sM, sY), format(eM, eY, countFullMonth)]);
  }

  ranges.sort((a, b) => a[START] - b[START]);

  i = 0;

  stack.push(ranges[0]);

  while (++i < ranges.length) {
    const range = ranges[i];

    top = stack[stack.length - 1];

    if (top[END] < range[START]) {
      stack.push(range);
    } else if (top[END] < range[END]) {
      top[END] = range[END];
      stack.pop();
      stack.push(top);
    }
  }

  i = -1;

  while (++i < stack.length) {
    sum += stack[i][END] - stack[i][START];
  }

  return sum;
}

console.log(
  experience(
    `01.2012-07.2012
03.2012-05.2012
08.2012-12.2012
01.2013-06.2013
07.2013-12.2014
05.2015-07.2015`
  )
);
console.log(
  experience(
    `01.2012-07.2012
03.2012-05.2012
08.2012-12.2012`
  )
);
console.log(
  experience(
    `01.2012-07.2012
03.2012-05.2012
08.2012-12.2012
01.2013-06.2013
07.2013-12.2014
05.2015-07.2015`, true
  )
);
console.log(
  experience(
    `01.2012-07.2012
03.2012-05.2012
08.2012-12.2012`, true
  )
);
