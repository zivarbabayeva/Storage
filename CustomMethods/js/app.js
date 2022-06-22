
//unshift method//

var arrs = [];
var u = arguments.length;

for (var i = 0; i < this.index; i++) {
    arrs[i] = this.arr[i];
}
for (var i = 0; i < u; i++) {
    this.arr[i] = arguments[i];
    this.index++;
}
for (var i = 0; i < arrs.length + u; i++) {
    this.arr[i + u] = arrs[i];
}
return this;


//PUSH method//
function push(arr, value) {
    var newArray = [];
    var i = arr.length;
    for (var i = 0; i < arr.length; i++) {
        newArray[i] = arr[i];
    }
    newArray[i] = value;
    return newArray;
}
//TRIM METHOD
function Trim(str) {
    while (str.substring(0, 1) == ' ') {
        str = str.substring(1, str.length);
    }
    while (str.substring(str.length - 1, str.length) == ' ') {
        str = str.substring(0, str.length - 1);
    }
    return str;
}

