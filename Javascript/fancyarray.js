//Function to print the array in a fancy way

function fancyArray(namesArray){
    for (var i=0;i<namesArray.length;i++){
      console.log((i+1) + "->" +namesArray[i]);
    }
}

var names = ["James", "Jim", "Jill", "John"];

fancyArray(names);
