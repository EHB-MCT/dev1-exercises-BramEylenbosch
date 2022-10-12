"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

let margin = 50;

drawLines();

function drawLines(x, y){
    context.beginPath();
    context.moveTo(margin, 50);
    context.lineTo(width - margin, 50);
    context.lineTo(margin, (height - margin) / 4);
    context.lineTo(width - margin,(height - margin) / 4 );
    context.lineTo(margin, 2 * (height - margin) / 4);
    context.lineTo(width - margin,2 * (height - margin) / 4);    
    context.lineTo(margin, 3 * (height - margin) / 4);
    context.lineTo(width - margin, 3 * (height- margin) / 4);
    context.lineTo(margin, (height - margin));
    context.lineTo(width - margin, height - margin);
    context.lineTo(margin, 50); 
    context.stroke();
}