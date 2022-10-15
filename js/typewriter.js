// Function for typewriting animation
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const descriptions = [
  "An Eng 1 Student @ McMaster University",
  "A Community leader",
  "A Passionate & Disciplined Learner",
];
const fluidDesc = document.querySelector("#fluidDescription");

let pauseTime = 75;
let phrasePos = 0;

const writing = async () => {
  while (true) {
    let word = descriptions[phrasePos];

    // Write out phrase
    for (let i = 1; i <= word.length; i++) {
      fluidDesc.innerText = word.substring(0, i);
      await sleep(pauseTime);
    }
    // Pause before deleting
    await sleep(pauseTime * 10);

    // Delete current phrase so the next one can be writen
    for (let i = word.length - 1; i >= 0; i--) {
      fluidDesc.innerText = word.substring(0, i);
      await sleep(pauseTime);
    }
    // Pause before writing next word
    await sleep(pauseTime * 5);

    // Change index of phrase
    if (phrasePos === descriptions.length - 1) {
      phrasePos = 0;
    } else {
      phrasePos++;
    }
  }
};

writing();
