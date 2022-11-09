"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawColors(50, 50, 500);
drawColors(75, 75, 450);
drawColors(100, 100, 400);
drawColors(125, 125, 350);
drawColors(150, 150, 300);
drawColors(175, 175, 250);
drawColors(200, 200, 200);
drawColors(225, 225, 150);
drawColors(250, 250, 100);



function drawColors(x, y, size) {
    context.beginPath();
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = "rgb(" + r + "," + g + "," + b + ")";
    context.fillStyle = color;
    context.fillRect(x, y, size, size);
}