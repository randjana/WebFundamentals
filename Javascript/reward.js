//Function to return reward

function returnReward(days){
    var totSum = 0;
    for (var i = 0;i < days;i++){
        totSum = totSum + Math.pow(2,i) * 0.01;
    }
    return totSum;
}

returnReward(30);
