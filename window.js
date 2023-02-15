//window holo javaScript running Environment.
// The javascript variable window

var name='kuddus';

function add(num1, num2){
    window.result = num1 + num2;// kuno variable ar aageh window dile global scoope hoye jay.
    console.log('name inside', name);
    function double (num){
        return num * 2;
    }
    var total = double(result);
    return total;
}

console.log('name outside', name);
var sum = add(13, 21);
console.log(sum);
console.log('result outside', result);