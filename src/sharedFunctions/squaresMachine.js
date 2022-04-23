/* eslint-disable no-magic-numbers */
const squaresMachine = (numOfFilledSquares, maxNumOfSquares) => {
  const FILLED_SQUARES = '■';
  const EMPTY_SQUARES = '□';
  const totalEmptySquares = maxNumOfSquares - numOfFilledSquares;

  const partOne = FILLED_SQUARES.repeat(numOfFilledSquares);
  const partTwo = EMPTY_SQUARES.repeat(totalEmptySquares);

  return partOne.concat(partTwo);
};

export default squaresMachine;
