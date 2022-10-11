"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawRectangle();

function drawRectangle() {
    context.beginPath();
    context.strokeStyle = "red";
    context.rect(50,50, 150, 150);
    context.rect(275,75 ,50, 50);
    context.rect(75, 275, 50, 50);
    context.rect(200,200, 150,150);
    context.stroke();

    context.beginPath();
    context.fillRect(125,125, 150, 150);
    context.fillRect(50,325, 25, 25);
    context.fillRect(325, 50, 25 ,25);
}