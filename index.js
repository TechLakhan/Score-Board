let homeScoreBtnOne = document.getElementById("home-score-btn-one");
let homeScoreBtntwo = document.getElementById("home-score-btn-two");
let homeScoreBtnthree = document.getElementById("home-score-btn-three")
let homeScoreEl = document.getElementById("home-score");
let homeScore = 0;

let guestScoreBtnOne = document.getElementById("guest-score-btn-one");
let guestScoreBtnTwo = document.getElementById("guest-score-btn-two");
let guestScoreBtnThree = document.getElementById("guest-score-btn-three")
let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

function increaseGuestScoreByOne() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreByTwo() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreByThree() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function increaseHomeScoreByOne() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function increaseHomeScoreByTwo() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function increaseHomeScoreByThree() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

let newGameEl = document.getElementById("new-game");

function newGame() {
    let count = 0;
    homeScoreEl.textContent = count;
    guestScoreEl.textContent = count;
}
