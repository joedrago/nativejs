all: test

js:
	browserify -o Script.js -t coffeeify -r ./src/Game.coffee:Game
	coffee -bcp ./src/boot.coffee >> Script.js

bridges: js
	javac bridge/Game.java bridge/BaseScript.java
	java -cp tools/js.jar:. org.mozilla.javascript.tools.jsc.Main -opt -1 -implements bridge.BaseScript -package bridge Script.js

test: bridges
	javac TestApp.java
	java -cp tools/js.jar:. TestApp

clean:
	rm -f bridge/*.class *.class

