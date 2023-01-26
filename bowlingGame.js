const FRAMES = 10;

const getScore = (rolls) => {

  let score = 0;
  let firstRoll = [];
  let isNewFrame = true;
  let frameCounter = 0;
  let i = 0;

  for (i = 0; i < rolls.length; i++) {
    let currRoll = rolls[i];
    // first Turn
    if (isNewFrame) {
      if (currRoll === 10) {
        // strike
        if (rolls.length <= i + 2) throw Error('Invalid number of frames');
        score += currRoll + rolls[i + 1] + rolls[i + 2];
        console.log(score);
        frameCounter++;
      }
      else {
        firstRoll = currRoll;
        isNewFrame = false;
      }
    }
    // second turn
    else {
      if (currRoll + firstRoll === 10) {
        // spare
        if (rolls.length <= i + 1) throw Error('Invalid number of frames');
        score += currRoll + firstRoll + rolls[i + 1];
      }
      else {
        // open
        score += currRoll + firstRoll;
      }
      console.log(score);
      frameCounter++;
      isNewFrame = true;
    }
    console.log('frames: ', frameCounter);
    if (frameCounter === FRAMES) break;
  }

  if (frameCounter !== FRAMES){
    console.log(frameCounter, FRAMES);
    throw Error('Invalid number of frames');
  }

  return score;
};

const bestScore = (games) => {
  return;
};

getScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

module.exports = {getScore, bestScore};



