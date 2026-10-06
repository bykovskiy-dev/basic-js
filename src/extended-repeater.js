/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options = {}) {
  const mainStr = String(str);
  const repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  const separator = options.separator !== undefined ? options.separator : '+';
  const additionSeparator =
    options.additionSeparator !== undefined ? options.additionSeparator : '|';

  const buildUnit = () => {
    if (options.addition === undefined) {
      return mainStr;
    }

    const additionStr = String(options.addition);
    const additionRepeatTimes =
      options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
    const additions = Array(additionRepeatTimes).fill(additionStr).join(additionSeparator);

    return mainStr + additions;
  };

  return Array(repeatTimes)
    .fill(null)
    .map(() => buildUnit())
    .join(separator);
}

module.exports = {
  repeater
};
