//creating a 5x5 picross game
//window is 400x400 pixels
//boxes are 47x47
//lines are 4px wide


let app = new PIXI.Application({
    width: 400,
    height: 400,
    transparent: true,
});

//app.renderer.width
//app.renderer.height

//set up to center based on app size and then append to html
let gameWindow = document.getElementById("gameWindow");
gameWindow.style.width = app.renderer.width + "px";
gameWindow.style.height = app.renderer.height + "px";
gameWindow.append(app.view);

//Application Setup Complete

//Setup the lines for the grid
drawLines(app, 4, 47, 3);

app.renderer.render(app.stage);