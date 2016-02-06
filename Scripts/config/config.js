var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = -1;
        Scene.INTRO = 0;
        Scene.OPT1 = 1;
        Scene.OPT2A = 2;
        Scene.OPT2B = 3;
        Scene.OPT3A = 4;
        Scene.OPT3B = 5;
        Scene.OPT3C = 6;
        Scene.OPT3D = 7;
        Scene.OUT1 = 8;
        Scene.OUT2 = 9;
        Scene.OUT3 = 10;
        Scene.OUT4 = 11;
        Scene.OUT5 = 12;
        Scene.OUT6 = 13;
        Scene.OUT7 = 14;
        Scene.OUT8 = 15;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 800;
        Screen.HEIGHT = 600;
        Screen.CENTER_X = 400;
        Screen.CENTER_Y = 300;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map