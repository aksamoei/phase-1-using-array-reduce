const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//reduce elements in batteryBatches to a single sum
const totalBatteries = batteryBatches.reduce(function (acc, currentNumber){
    return acc + currentNumber;
}, 0)
