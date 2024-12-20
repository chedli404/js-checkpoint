function reversestring(ch) {
    var chi = "";
    for (var i = ch.length - 1; i >= 0; i--) {
        chi += ch[i];
    }
    return chi;

}


function count(ch) {
    var k = 0;
    for (var i = 0; i <= ch.length - 1; i++) {
        k += 1;

    }
    return k
}

function minmax(arr) {
    var min = arr[0];
    var max = arr[0];
    for (var i = 1; i <= arr.length - 1; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }

    }
    return [min, max];
}



function sumofarray(arr) {
    var sum = 0
    for (var i of arr) {
        sum += i

    }
    return sum
}



function prime(n) {
    var p = true
    for (var i = 2; i <= n - 1; i++) {
        if (n % i == 0) {
            p = false
        }
    }
    return p
}


function factoriel(n) {
    var s = 1
    for (var i = 1; i <= n ; i++){
        s *= i
    }
        return s
}
