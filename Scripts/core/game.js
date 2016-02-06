/// <reference path = "_reference.ts" />
// global variables
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
var menu;
var intro;
var opt1;
var opt2a;
var opt2b;
var opt3a;
var opt3b;
var opt3c;
var opt3d;
var out1;
var out2;
var out3;
var out4;
var out5;
var out6;
var out7;
var out8;
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.INTRO:
            // show the MENU scene
            stage.removeAllChildren();
            intro = new scenes.Intro();
            currentScene = intro;
            console.log("Starting INTRO Scene");
            break;
        case config.Scene.OPT1:
            stage.removeAllChildren();
            opt1 = new scenes.Opt1();
            currentScene = opt1;
            console.log("Starting OPT1 Scene");
            break;
        case config.Scene.OPT2A:
            stage.removeAllChildren();
            opt2a = new scenes.Opt2a();
            currentScene = opt2a;
            console.log("Starting OPT2A Scene");
            break;
        case config.Scene.OPT2B:
            stage.removeAllChildren();
            opt2b = new scenes.Opt2b();
            currentScene = opt2b;
            console.log("Starting OPT2B Scene");
            break;
        case config.Scene.OPT3A:
            stage.removeAllChildren();
            opt3a = new scenes.Opt3a();
            currentScene = opt3a;
            console.log("Starting OPT3A Scene");
            break;
        case config.Scene.OPT3B:
            stage.removeAllChildren();
            opt3b = new scenes.Opt3b();
            currentScene = opt3b;
            console.log("Starting OPT3B Scene");
            break;
        case config.Scene.OPT3C:
            stage.removeAllChildren();
            opt3c = new scenes.Opt3c();
            currentScene = opt3c;
            console.log("Starting OPT3C Scene");
            break;
        case config.Scene.OPT3D:
            stage.removeAllChildren();
            opt3d = new scenes.Opt3d();
            currentScene = opt3d;
            console.log("Starting OPT3D Scene");
            break;
        case config.Scene.OUT1:
            stage.removeAllChildren();
            out1 = new scenes.Out1();
            currentScene = out1;
            console.log("Starting OUT1 Scene");
            break;
        case config.Scene.OUT2:
            stage.removeAllChildren();
            out2 = new scenes.Out2();
            currentScene = out2;
            console.log("Starting OUT2 Scene");
            break;
        case config.Scene.OUT3:
            stage.removeAllChildren();
            out3 = new scenes.Out3();
            currentScene = out3;
            console.log("Starting OUT3 Scene");
            break;
        case config.Scene.OUT4:
            stage.removeAllChildren();
            out4 = new scenes.Out4();
            currentScene = out4;
            console.log("Starting OUT4 Scene");
            break;
        case config.Scene.OUT5:
            stage.removeAllChildren();
            out5 = new scenes.Out5();
            currentScene = out5;
            console.log("Starting OUT5 Scene");
            break;
        case config.Scene.OUT6:
            stage.removeAllChildren();
            out6 = new scenes.Out6();
            currentScene = out6;
            console.log("Starting OUT6 Scene");
            break;
        case config.Scene.OUT7:
            stage.removeAllChildren();
            out7 = new scenes.Out7();
            currentScene = out7;
            console.log("Starting OUT7 Scene");
            break;
        case config.Scene.OUT8:
            stage.removeAllChildren();
            out8 = new scenes.Out8();
            currentScene = out8;
            console.log("Starting OUT8 Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
//# sourceMappingURL=game.js.map