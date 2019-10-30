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

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 55, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var last = scores.length - 1;
var i = 0;
var count = 0;
while (i <= last) {
    document.write("Раствор №" + i + " " + "очков: " + scores[i] + "<br>");
    i = i + 1;
    count = count + 1;
}
document.write("Всего тестов: " + count + "<br>");