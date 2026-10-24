#!/bin/bash
AGP=$(grep -oP "com.android.tools.build:gradle:\K[0-9.]+" android/build.gradle | head -1)
AGP=${AGP:-3.6.4}
F=node_modules/nodejs-mobile-react-native/android/build.gradle
sed -i "s/jcenter()/google()\n        mavenCentral()/; s/gradle:2\.2\.3/gradle:$AGP/" "$F"
grep -nE "google|mavenCentral|jcenter|classpath" "$F"
