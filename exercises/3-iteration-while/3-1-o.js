"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawGradient();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);

}

function drawGradient() {
    let i = 0;
    while (i <= ) {
        let gray = ;
        context.strokeStyle = Utils.rgb(gray, gray, gray);
        Utils.drawLine(, , , );
        i++;
    }
}