//var letters = ["a", "b", "c", "d", "e"];
//var numArray = letters.length;
//document.write("Array length = " + numArray + "<br>");
//
//var first = letters[0];
//document.write("First array element is: " + first + "<br>");
//
//letters[0] = "Hello, Jack! It's me :)";
//var first = letters[0];
//document.write("First array element after replace: " + first + "<br>" + "<br>");
//
//var products = ["Cho Cho Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
//var last = products.length - 1;
//var recent = products[last];
//document.write("Last ice flavour is: " + recent + "<br>" + "<br>");
//--------------------------------------------------------------------
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 55, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var i = 0;
var value;
var maxValue = 0;
while (i < scores.length) {
    document.write("Раствор №" + i + " " + "очков: " + scores[i] + "<br>");
    value = scores[i];
    if (maxValue < value) {
        maxValue = value
    }
    i++; // i = i + 1
}
document.write("<br> Всего тестов: " + scores.length + "<br>");
document.write("Максимум очков: " + maxValue + "<br>");
var array = [];
for (i = 0; i < scores.length; i++) {
    if (maxValue == scores[i]) {
        array.push(i + " ");
    }
}
document.write("Победили образцы №: " + array);
//--------------------------------------------------------------------