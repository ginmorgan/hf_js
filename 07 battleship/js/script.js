var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
}

var ships = [
    {
        locations: ["10", "20", "30"],
        hits: ["", "", ""]
    },
    {
        locations: ["32", "33", "34"],
        hits: ["", "", ""]
    },
    {
        locations: ["63", "64", "65"],
        hits: ["", "", ""]
    },
];

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipSunk: 0,

    ships: [{locations: ["10", "20", "30"], hits: ["", "", ""]},
            {locations: ["32", "33", "34"], hits: ["", "", ""]},
            {locations: ["63", "64", "65"], hits: ["", "", ""]}],
    
    fire: function(guess) {
        for (var i=0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess); // indexOf ищет в массиве указанное значение и возвращает его индекс
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed...");
        return false;
    },
    
    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
};

//view.displayMiss("00");
//view.displayHit("34");
//view.displayMiss("55");
//view.displayHit("12");
//view.displayMiss("25");
//view.displayHit("26");
//view.displayMessage("Tap tap, is this thing on?")
//model.fire("54");
//model.fire("14");
//model.fire("24");
//model.fire("34");
//model.fire("44");
//model.fire("53");
//model.fire("34");