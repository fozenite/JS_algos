let overallTestSet = [];
let overWeightCointIndex = [];
let alphabetSet = "ABCDEFGHI";
let countL = alphabetSet.length;

// Setting up overall Test Set
for(let i = 0; i < countL; i++){
  let testCoinSet = {};
  overWeightCointIndex.push(alphabetSet[i]);
  for(let j = 0; j < countL; j++) {
    if (j === i) {testCoinSet[`${alphabetSet[j]}`] = 2;}
    else {testCoinSet[`${alphabetSet[j]}`] = 1;}
  }
  overallTestSet.push(testCoinSet);
}

let checkSum = (ArrEl, index) => {
  return ArrEl[`${alphabetSet[index]}`] + ArrEl[`${alphabetSet[index + 1]}`] + ArrEl[`${alphabetSet[index + 2]}`];
}


// SECOND WEIGHING MACHINE OPERATION
let findCoin = (ArrEl, index) => {
   let coinL = alphabetSet[index];      // Left Coin
   let coinC = alphabetSet[index + 1];  // Center Coin
   let coinR = alphabetSet[index + 2];  // Right Coin

   if(ArrEl[`${coinL}`] === ArrEl[`${coinC}`]) {
     console.log(`Actual Overwight Coin Found: ${coinR}`);
     return coinR;
    } else if (ArrEl[`${coinL}`] > ArrEl[`${coinC}`]) {
     return coinL;
      console.log(`Actual Overwight Coin Found: ${coinL}`);
    } else {
      console.log(`Actual Overwight Coin Found: ${coinL}`);
      return coinC;
    }

}
//Solving 9 coin - weight balance problem in 2 Weight
// Balance operations
  for(let k = 0; k < countL; k ++) {

  let ArrEl = overallTestSet[k];
   // Step 1 - Break up into 3 chunks and compare first
  //          two chunks in terms of weight/sum
  //         - Find overweight chunk
  //Step 2 - Work with chunk which is overweight

   let chunk1sum;
   let chunk2sum;
   let flagChunk;
   let foundCoin;

   chunk1sum = checkSum(ArrEl, 0);
   chunk2sum = checkSum(ArrEl, 3);

   // FIRST WEIGHING MACHINE OPERATION
   if (chunk1sum === chunk2sum) {
    // Overweight chunk is chunk 3
    flagChunk = 3;
    foundCoin = findCoin(ArrEl, 6);
   } else if (chunk1sum > chunk2sum) {
    // Overweight chunk is chunk 1
    flagChunk = 1;
    foundCoin = findCoin(ArrEl, 0);
   } else {
    // Overweight chunk is chunk 2
    flagChunk = 2;
    foundCoin = findCoin(ArrEl, 3);
   }

   if(foundCoin === overWeightCointIndex[k]){
    console.log("SUCCESS: ANSWER FOUND CORRECTLY");
   }
   console.log("This is my Test Coin Set:", ArrEl);
   console.log("Expected Overweight Coin: ", overWeightCointIndex[k]);
   console.log("-----------------------------");
}
