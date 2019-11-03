var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef" : 123};
var test8 = ["abcdef", 123];
function test9(){return "abcdef"};
var test10 = null;

console.log("1 " + typeof test1);
console.log("2 " + typeof test2);
console.log("3 " + typeof test3);
console.log("4 " + typeof test4);
console.log("5 " + typeof test5);
console.log("6 " + typeof test6);
console.log("7 " + typeof test7);
console.log("8 " + typeof test8);
console.log("9 " + typeof test9);
console.log("10 " + typeof test10);

if (99 == "99") {
    console.log("Число равно строке");
} else {
    console.log("Число НЕ РАВНО строке");
}