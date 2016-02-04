var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var Opt3b = (function (_super) {
        __extends(Opt3b, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Opt3b() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Opt3b.prototype.start = function () {
            // add LeftCave Image
            this._opt3Image = new createjs.Bitmap("../../Assets/images/opt3b.png");
            this.addChild(this._opt3Image);
            this._opt2aButton = new objects.Button("Opt1btn", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 220);
            this.addChild(this._opt2aButton);
            // LEFT_CAVE Button event listener
            this._opt2aButton.on("click", this._opt2aButtonClick, this);
            // add the LEFT_CAVE button to the MENU scene
            this._opt2bButton = new objects.Button("Opt2btn", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 220);
            this.addChild(this._opt2bButton);
            // LEFT_CAVE Button event listener
            this._opt2bButton.on("click", this._opt2bButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Opt3b.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        Opt3b.prototype._opt2aButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.OUT1;
            changeScene();
        };
        Opt3b.prototype._opt2bButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.OUT4;
            changeScene();
        };
        return Opt3b;
    })(objects.Scene);
    scenes.Opt3b = Opt3b;
})(scenes || (scenes = {}));
//# sourceMappingURL=opt3b.js.map