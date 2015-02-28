all: test

bridges:
	javac bridge/Game.java bridge/BaseScript.java
	java -cp tools/js.jar:. org.mozilla.javascript.tools.jsc.Main -opt -1 -implements bridge.BaseScript -package bridge Script.js

test: bridges
	javac TestApp.java
	java -cp tools/js.jar:. TestApp

clean:
	rm -f bridge/*.class *.class
