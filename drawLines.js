//This file just has a function to draw all of the lines for the puzzle
//This assumes that the grid is a box

/**
 * @param {object} [app]
 * @param {number} [lineWidth]
 * @param {number} [widthBetween]
 * @param {number} [linelessSpaces]
 */
function drawLines(app, lineWidth, widthBetween, linelessSpaces){
    //i starts at the location of the first line and increments to the next
    let hori;
    let vert;
    for(let i = widthBetween * linelessSpaces + (lineWidth / 2); i < app.renderer.width; i += (lineWidth + widthBetween)){


        //horizontal line
        hori = new PIXI.Graphics();
        hori.lineStyle(4, 0x000000, 1);
        hori.moveTo(0, 0);
        hori.lineTo(app.renderer.width, 0);
        hori.x = 0;
        hori.y = i;
        app.stage.addChild(hori);

        //veritcal line
        vert = new PIXI.Graphics();
        vert.lineStyle(4, 0x000000, 1);
        vert.moveTo(0, 0);
        vert.lineTo(0, app.renderer.height);
        vert.x = i;
        vert.y = 0;
        app.stage.addChild(vert);
    }
}