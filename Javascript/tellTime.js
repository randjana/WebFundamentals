// Tell time

function tellTime(h,m,p){
    var hour = h;
    var minute = m;
    var period = p;

    if (minute > 30){
        console.log("It's almost 9 in the morning");}
    else{
        console.log("It's just after 7 in the evening");
    }
}

tellTime(8,20,"AM");
