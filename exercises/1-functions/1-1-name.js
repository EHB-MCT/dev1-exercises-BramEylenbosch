"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();

function drawName() {
    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(100, 100);
    context.lineTo(100, 700);
    context.lineTo(300,550);
    context.lineTo(100,400);
    context.lineTo(300, 250);
    context.lineTo(100, 100);
    context.strokeStyle = "red";
    context.stroke();

    context.beginPath();
    context.strokeStyle = "blue";
    context.moveTo(350, 100);
    context.lineTo(350, 700);
    context.moveTo(350,100);
    context.lineTo(500, 250);
    context.lineTo(350, 400);
    context.lineTo(500, 700);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "yellow";
    context.moveTo(600, 700);
    context.lineTo(750, 100);
    context.lineTo(900, 700);
    context.moveTo(675, 400);
    context.lineTo(825, 400);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "green";
    context.moveTo(1000, 700);
    context.lineTo(1000, 100);
    context.lineTo(1125, 300);
    context.lineTo(1250, 100);
    context.lineTo(1250, 700);
    context.stroke();
}