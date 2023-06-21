var array1 = [1, 2, 3, 4, 5];
var array2 = [10, 20, 30];
var array3 = [];

function calculateAverage(numbers) {
    if (numbers.length === 0) {
        console.log(0);;
    } else {
        var som = 0;
        for (var a=0; a < numbers.length; a++) {
            som += numbers[a];
        }
    
        var average = som / numbers.length;
        console.log(average);
    }
}

calculateAverage(array2);