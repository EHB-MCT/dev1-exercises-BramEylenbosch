"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;


drawPattern();

function drawPattern() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width / 3, height / 3 * 2);
    context.fillStyle = "blue";
    context.fillRect(0, height / 3 * 2, width / 3, height / 3);
    context.fillStyle = "black";
    context.fillRect(width / 3 * 2, 0, width / 3, height / 3 * 2);
    context.fillStyle = "blue";
    context.fillRect(width / 3 * 2, height / 3 * 2, width / 3, height / 3);
    context.fillStyle = "red";
    context.fillRect(0, height / 6 * 1, width, height / 3);
}