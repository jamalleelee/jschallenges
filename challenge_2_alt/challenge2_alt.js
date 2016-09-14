/**
 * Hockey is the game. Make it happen.
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

var lukeShotCount = 1;
var lukeHitCount = 0;
var deathStarShotCount = 1;
var deathStarHitCount = 0;
var resetCount = 1;

$('#luke-shoots').click(function() {
    new Audio("pew.mp3").play();
    $('#luke-numshots').text(lukeShotCount++);
    lukeShoots();
    $('#luke-numhits').text(lukeHitCount);
})

$('#deathstar-shoots').click(function() {
    new Audio("pew.mp3").play();
    $('#deathstar-numshots').text(deathStarShotCount++);
    deathStarShoots();
    $('#deathstar-numhits').text(deathStarHitCount);
})

$('#reset').click(function() {
    lukeShotCount = 0
    lukeHitCount = 0
    deathStarShotCount = 0
    deathStarHitCount = 0
    $("body").css("background-color", "#ffdb74");
    $('#reset').css("background-color", "#ffdb74");
    $('#deathstar-numshots').text(deathStarShotCount);
    $('#deathstar-numhits').text(deathStarHitCount);
    $('#luke-numshots').text(lukeShotCount);
    $('#luke-numhits').text(lukeHitCount);
    $('#num-resets').text(resetCount++);
})

function lukeShoots() {
    if ((randomNumber() % 2) == 0) {
        lukeHitCount++;
        $("body").css("background-color", "green");
        $('#reset').css("background-color", "green");
        new Audio("exploding.mp3").play();
    } else {
        $("body").css("background-color", "#ffdb74");
        $('#reset').css("background-color", "#ffdb74");
        new Audio("sad-trombone.mp3").play();
    }
}

function deathStarShoots() {
    if ((randomNumber() % 2) != 0) {
        deathStarHitCount++;
        $("body").css("background-color", "red");
        $('#reset').css("background-color", "red");
        new Audio("exploding.mp3").play();
    } else {
        $("body").css("background-color", "#ffdb74");
        $('#reset').css("background-color", "#ffdb74");
        new Audio("sad-trombone.mp3").play();
    }
}


function randomNumber(min, max) {
    min = Math.ceil(1);
    max = Math.floor(1000);
    return Math.floor(Math.random() * (max - min)) + min;
}
