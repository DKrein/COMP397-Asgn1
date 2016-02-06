var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var Opt3c = (function (_super) {
        __extends(Opt3c, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Opt3c() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Opt3c.prototype.start = function () {
            // add LeftCave Image
            this._opt3Image = new createjs.Bitmap("../../Assets/images/opt3c.png");
            this.addChild(this._opt3Image);
            this._opt2aButton = new objects.Button("opt3c_btn1", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 100);
            this.addChild(this._opt2aButton);
            // LEFT_CAVE Button event listener
            this._opt2aButton.on("click", this._opt2aButtonClick, this);
            // add the LEFT_CAVE button to the MENU scene
            this._opt2bButton = new objects.Button("opt3c_btn2", config.Screen.CENTER_X + 180, config.Screen.CENTER_Y + 100);
            this.addChild(this._opt2bButton);
            // LEFT_CAVE Button event listener
            this._opt2bButton.on("click", this._opt2bButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Opt3c.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        Opt3c.prototype._opt2aButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.OUT1;
            changeScene();
        };
        Opt3c.prototype._opt2bButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.OUT7;
            changeScene();
        };
        return Opt3c;
    })(objects.Scene);
    scenes.Opt3c = Opt3c;
})(scenes || (scenes = {}));
//# sourceMappingURL=opt3c.js.map