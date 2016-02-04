﻿// INTRO SCENE
module scenes {
    export class Intro extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _introImage: createjs.Bitmap;
        private _startButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._introImage = new createjs.Bitmap("../../Assets/images/Intro.png");
            this.addChild(this._introImage);
            
            // add the LEFT_CAVE button to the MENU scene
             this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 200);
            this.addChild(this._startButton);
            
            this._startButton.on("click", this._startButtonClick, this);
            
            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.OPT1;
            changeScene();
        }
        
       
    }
}