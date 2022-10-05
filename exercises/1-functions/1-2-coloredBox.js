"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawRectangle();

function drawRectangle() {
    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(50, 50);
    context.lineTo(200,200);
    context.moveTo(200,50);
    context.lineTo(50,200);
    context.strokeStyle = "red";
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(50, 50);
    context.lineTo(200, 50);
    context.lineTo(200,200);
    context.lineTo(50, 200);
    context.lineTo(50, 50);
    context.strokeStyle = "black";
    context.closePath();
    context.stroke();



}