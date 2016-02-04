// LEFT_CAVE SCENE
module scenes {
    export class Opt2a extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _opt2Image: createjs.Bitmap;
        private _opt2aButton: objects.Button;
        private _opt2bButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add LeftCave Image
            this._opt2Image = new createjs.Bitmap("../../Assets/images/opt2a.png");
            this.addChild(this._opt2Image);

            this._opt2aButton = new objects.Button(
                "Opt1btn",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 220);
            this.addChild(this._opt2aButton);
            
            // LEFT_CAVE Button event listener
            this._opt2aButton.on("click", this._opt2aButtonClick, this);
            
            // add the LEFT_CAVE button to the MENU scene
            this._opt2bButton = new objects.Button(
                "Opt2btn",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 220);
            this.addChild(this._opt2bButton);            
            
            // LEFT_CAVE Button event listener
            this._opt2bButton.on("click", this._opt2bButtonClick, this);
            

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _opt2aButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.OPT3A;
            changeScene();
        }
        
        private _opt2bButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.OPT3B;
            changeScene();
        }
       
    }
}