var gGame = null;

function log(s) {
    if(gGame != null) {
        gGame.log(s);
    }
}

function startup(game) {
    gGame = game;
    log("startup");
}

function shutdown() {
    log("shutdown");
}

function update() {
    log("update");
}
