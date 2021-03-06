var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var Out5 = (function (_super) {
        __extends(Out5, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Out5() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Out5.prototype.start = function () {
            // add LeftCave Image
            this._opt3Image = new createjs.Bitmap("../../Assets/images/out5.png");
            this.addChild(this._opt3Image);
            this._opt2aButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 220);
            this.addChild(this._opt2aButton);
            // LEFT_CAVE Button event listener
            this._opt2aButton.on("click", this._opt2aButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Out5.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        Out5.prototype._opt2aButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return Out5;
    })(objects.Scene);
    scenes.Out5 = Out5;
})(scenes || (scenes = {}));
//# sourceMappingURL=out5.js.map