// LEFT_CAVE SCENE
module scenes {
    export class Out4 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _opt3Image: createjs.Bitmap;
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
            this._opt3Image = new createjs.Bitmap("../../Assets/images/out4.png");
            this.addChild(this._opt3Image);

            this._opt2aButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 220);
            this.addChild(this._opt2aButton);
            
            // LEFT_CAVE Button event listener
            this._opt2aButton.on("click", this._opt2aButtonClick, this);

            

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
            scene = config.Scene.INTRO;
            changeScene();
        }

    }
}