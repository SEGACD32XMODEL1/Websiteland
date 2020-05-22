let cursor = {
    amount: 0,
    cost: 100,
    multiplier: 1
}

let curamo = cursor.amount;

let curcost = cursor.cost;

let curmul = cursor.multiplier;

let clickcount = document.getElementById("clicks");

let doc = document.getElementById;

let clicks = 10;

function click(number) {
    clicks = clicks + number;
    clickcount.innerHTML = clicks;
};

let mouseclick = click(1);

function buyCursor() {
    if (clicks >= curcost) {
        curamo++;
        clicks = clicks - curcost;
        curcost = Math.floor(curcost * 1.1)
        clickcount.innerHTML = clicks;
        document.getElementById("cursors").innerHTML = curamo;
        document.getElementById("cursorCost").innerHTML = curcost;
        console.log('successful cursor buy' + " " + "|" + " " + clicks + " " + "clicks left," + " " + curamo + " " + "cursors");
    } else {
        console.log('not enough clicks or another error!')
    }
}

window.setInterval(function () {
    click(curamo * curmul);
}, 1000);

function upgradeClicker() {
    if (clicks >= 10) {
        clicks = clicks - 10;
        document.getElementById("clicker").style.display = "none";
        document.getElementById("mouse").style.display = "none";
        document.getElementById("mousebutton").style.display = "block";
        console.log("Mouse bought successfully!" + " " + "|" + " " + clicks + " " + "clicks left");
    } else {
        console.log("Not enough clicks or error!");
    }
}

let mousebuttonmultiplier = 1;

function mousebutton() {
    click(mousebuttonmultiplier);
}

function doubleclickauto() {
    if (clicks >= 1000) {
        curmul = 2;
        clicks = clicks - 1000;
        document.getElementById("double").style.display = "none";
        document.getElementById("doublebutton").style.display = "none";
    } else {
        console.log("not enough clicks or another error!");
    }
}

function doubleclick() {
    if (clicks >= 500) {
        mousebuttonmultiplier = 2;
        clicks = clicks - 500;
        document.getElementById("doublemouse").style.display = "none";
        document.getElementById("doublemousebutton").style.display = "none";
        console.log(mousebuttonmultiplier)
    } else {
        console.log("not enough clicks or another error!");
    }
}
