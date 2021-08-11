function sumFunction(myVariable){
    let sum = 0;
    for (i=0; i<myVariable.length; i++) {
    sum = sum+myVariable[i] 
} 
return sum 
}


function valueFunction(array, value){ 
    for (i=0; i<array.length; i++) {
    if (array[i] === value) {
    return i    
}  
} 
return -1
}



function newMassive  (array1, array2) { 
    let arrayNew = []; 
    for (i=0; i<array1.length; i++) {
    arrayNew.push (array1 [i])
} 
    for (a=0; a<array2.length; a++) {
    arrayNew.push (array2 [a])
}
return arrayNew 
}

