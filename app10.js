//----------------------17 to 20-------------------
var br = '<br>';
// task1
var array = new Array(3)
// task2
var array = new Array(3)
for(var i = 0; i < array.length; i++) {
    array[i] = new Array(4);
  }
array[0][0]=0;
array[0][1]=1;
array[0][2]=2;
array[0][3]=3;
array[1][0]=1;
array[1][1]=0;
array[1][2]=1;
array[1][3]=2;
array[2][0]=2;
array[2][1]=1;
array[2][2]=0;
array[2][3]=1;

    for(let i = 0; i < array.length; i++) {
      for(let j = 0; j < array[i].length; j++) {
      //  document.write(array[i][j]+" ")        
      }
      document.write(br)
    }
    
// task3
for (let k = 1; k <= 10; k++) {
    //document.write(k + br)    
}
// task4

// var num = prompt('Enter table ')
// var lenght = prompt('Enter length ')
// for (let i = 1; i <= lenght; i++) {
//     document.write(num +' * ' + i + '= ' + num * i + br)
    
// }

// task5

var fruits = ['apple', 'banana', 'mango', 'orange','strawberry']
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i]+br)
document.write('At index ' + i +' ' + fruits[i] + br+br)    
}

// task6
//part(i)
for (let k = 1; k <= 15; k++) {
    //document.write(k + br)    
}

//part(ii)
for (let k = 10; k >= 1; k--) {
    //document.write(k + br)    
}

//part(iii)
for (let k = 0; k <= 20; k++) {
    if (k % 2 == 0 ) {
        //document.write(k  + br)    
    }    
}

//part(iv)
for (let k = 0; k <= 20; k++) {
    if (k % 2 != 0 ) {
        //document.write(k  + br)    
    }    
}

//part(v)
for (let k = 2; k <= 20; k++) {
    if (k % 2 == 0 ) {
        //document.write(k  +'k'+ br)    
    }    
}

// task7

var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var variable = 0;
// var search = prompt('Search for an item')
// for (let i = 0; i < A.length; i++) {
//     if (search === A[i]) {
//         alert('Your item is found at index ' + i)
//         variable--;
//         break;
//     }         
// }
// if (variable === 0) {
//     alert('wrong input')
// }

// task8

var B = [33,66,88,109,21,91]
var largest= B[0];
for (let i = 0; i < B.length; i++) {    
    if (largest < B[i]) {
        largest = B[i]        
    }
}
//alert('Largest number is ' + largest)

// task9

var B = [33,66,88,109,21,91]
var Samllest= B[0];
for (let i = 0; i < B.length; i++) {    
    if (Samllest > B[i]) {
        Samllest= B[i]        
    }
}
//alert('Samllest number is ' + Samllest)

// task10
for (let k = 1; k <= 20; k++) {
    document.write(5*k + ' ')    
}