var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var Opt2b = (function (_super) {
        __extends(Opt2b, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Opt2b() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Opt2b.prototype.start = function () {
            // add LeftCave Image
            this._opt2Image = new createjs.Bitmap("../../Assets/images/opt2b.png");
            this.addChild(this._opt2Image);
            this._opt2aButton = new objects.Button("opt2b_btn1", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 100);
            this.addChild(this._opt2aButton);
            // LEFT_CAVE Button event listener
            this._opt2aButton.on("click", this._opt2aButtonClick, this);
            // add the LEFT_CAVE button to the MENU scene
            this._opt2bButton = new objects.Button("opt2b_btn2", config.Screen.CENTER_X + 180, config.Screen.CENTER_Y + 100);
            this.addChild(this._opt2bButton);
            // LEFT_CAVE Button event listener
            this._opt2bButton.on("click", this._opt2bButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Opt2b.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        Opt2b.prototype._opt2aButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.OPT3C;
            changeScene();
        };
        Opt2b.prototype._opt2bButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.OPT3D;
            changeScene();
        };
        return Opt2b;
    })(objects.Scene);
    scenes.Opt2b = Opt2b;
})(scenes || (scenes = {}));
//# sourceMappingURL=opt2b.js.map