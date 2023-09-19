/** @format */

let homeScoreCard = document.getElementById("home");
let guestScoreCard = document.getElementById("guest");
homeScore = 0;
guestScore = 0;
homeScoreCard.textContent = homeScore;
guestScoreCard.textContent = guestScore;
function homePlusOne() {
  homeScore += 1;
  homeScoreCard.textContent = homeScore;
}
function homePlusOne() {
  homeScore += 1;
  homeScoreCard.textContent = homeScore;
}
function homePlusTwo() {
  homeScore += 2;
  homeScoreCard.textContent = homeScore;
}
function homePlusThree() {
  homeScore += 3;
  homeScoreCard.textContent = homeScore;
}
function guestPlusOne() {
  guestScore += 1;
  guestScoreCard.textContent = guestScore;
}
function guestPlusTwo() {
  guestScore += 2;
  guestScoreCard.textContent = guestScore;
}
function guestPlusThree() {
  guestScore += 3;
  guestScoreCard.textContent = guestScore;
}
