"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawGradientCircles();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);
}

function drawGradientCircles() {
    let i = 0;
    while () {
        let gray = ;
        context.fillStyle = Utils.rgb(gray, gray, gray);
        let radius = ;
        Utils.fillAndStrokeCircle(200, 200, radius);
        i++;;
    }
}