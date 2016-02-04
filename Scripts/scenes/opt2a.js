var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var Opt2a = (function (_super) {
        __extends(Opt2a, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Opt2a() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Opt2a.prototype.start = function () {
            // add LeftCave Image
            this._opt2Image = new createjs.Bitmap("../../Assets/images/opt2a.png");
            this.addChild(this._opt2Image);
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
        Opt2a.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        Opt2a.prototype._opt2aButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.OPT3A;
            changeScene();
        };
        Opt2a.prototype._opt2bButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.OPT3B;
            changeScene();
        };
        return Opt2a;
    })(objects.Scene);
    scenes.Opt2a = Opt2a;
})(scenes || (scenes = {}));
//# sourceMappingURL=opt2a.js.map