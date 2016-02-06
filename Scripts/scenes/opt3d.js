var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var Opt3d = (function (_super) {
        __extends(Opt3d, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Opt3d() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Opt3d.prototype.start = function () {
            // add LeftCave Image
            this._opt3Image = new createjs.Bitmap("../../Assets/images/opt3d.png");
            this.addChild(this._opt3Image);
            this._opt2aButton = new objects.Button("opt3d_btn1", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 100);
            this.addChild(this._opt2aButton);
            // LEFT_CAVE Button event listener
            this._opt2aButton.on("click", this._opt2aButtonClick, this);
            // add the LEFT_CAVE button to the MENU scene
            this._opt2bButton = new objects.Button("opt3d_btn2", config.Screen.CENTER_X + 180, config.Screen.CENTER_Y + 100);
            this.addChild(this._opt2bButton);
            // LEFT_CAVE Button event listener
            this._opt2bButton.on("click", this._opt2bButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Opt3d.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        Opt3d.prototype._opt2aButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.OUT2;
            changeScene();
        };
        Opt3d.prototype._opt2bButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.OUT8;
            changeScene();
        };
        return Opt3d;
    })(objects.Scene);
    scenes.Opt3d = Opt3d;
})(scenes || (scenes = {}));
//# sourceMappingURL=opt3d.js.map