//function pageLoaderHandler() {
//    alert("I'm alive!");
//}
//
//window.onload = pageLoaderHandler;

window.onload = init;

//function init() {
//    var image = document.getElementById("zero");
//    image.onclick = showAnswer;
//}
//
//function showAnswer() {
//    var image = document.getElementById("zero");
//    image.src = "img/zero.jpg";
//}

function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }    
};

function showAnswer(eventObj) {
    var image = eventObj.target; //target - ссылка на объект, сгенерировавший событие
    var name = image.id;
    name = "img/" + name + ".jpg";
    image.src = name;
}