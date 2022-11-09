"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawConcentricPattern();
}

function drawConcentricPattern() {
    context.lineWidth = 2;
    let i = ;
    while () {
        let size = ;
        Utils.strokeCircle(, , size);
        Utils.strokeCircle(, , size);
        Utils.strokeCircle(, , size);
        i = ;
    }
}