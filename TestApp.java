import bridge.*;

class TestGame implements Game {
    public void log(String s) {
        System.out.println("TestGame::log(): " + s);
    }
}

class TestApp {
    public static void main(String[] args) {
        System.out.println("\nTestApp begin");

        TestGame game = new TestGame();
        game.log("Native call to log");

        Script script = new Script();
        script.startup(game);
        script.update();
        script.shutdown();

        System.out.println("TestApp end\n");
    }
}
