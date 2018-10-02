function forLoop(array1){
  for (let i=0;i <25;i++){
    if (i === 1){
    array1.push("I am " + i + " strange loop.")
  }else{
    array1.push("I am " + i + " strange loops.")
  }
  }
  return array1
}

function whileLoop(num){
  while (num >0){
    console.log(num);
    num = num -1 }
    return 'done'
}

function incrementVariable() {
  i = i + 1;
}



var i = 0;
 
function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array){
  do{
    delete array.pop();
  }while(array.length > 0 && incrementVariable());
  
  return array;
}