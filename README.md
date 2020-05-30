# RNP

This is a ReactNative training project for myself that will be worked on throughout the Summer of 2020.
It's purpose is to re-create the Pokedex Application from HeartGold/SoulSilver as a fun exercise to get me aquainted with the framework.

~~Versions (note for myself)~~
"react": "16.11.0",
"react-native": "0.62.2",
"react-navigation": "git://github.com/Snailapp/react-navigation.git#2.18.5"


For anyone curious about what the app currently looks like without wanting to do the set up, here's some background info with some screenshots:
**This will be updated every push for now on**

Picture of Progress of both Home Screen (bottom) and Pokemon List (top) images.

iOS Here: https://imgur.com/a/p0H3LOO

Android Here: https://imgur.com/a/QX10wVW

# To run the app:
The current scope of the app is to run successfully on both Android, and iOS mobile devices. 

**To Run on iOS**

**Strictly through command line**

Make sure you are on a Mac or a VM of Mac OS for Xcode as that is how I use to test the iOS Version, I am using Version 10.1 of Xcode to test when building/running the application from RNP/RNProject/ios/RNProject.xcworkspace 
Download XCode, although it should work with most versions, if you want to try with 10.1 here is a link: https://developer.apple.com/download/more/?name=Xcode

Download dependencies in ../RNProject

$ npm install

Start the bundling Server in ../RNProject:

$ yarn start (may need to run yarn install)

(Emulator guide)[https://www.macinstruct.com/node/494]

Make sure you have a running iPhone emulator concurrently running alongside it, or it won't be able connect to the development server. (I'll keep enhancing this guide as I further into the project, early stages I'm mostly trying to get as much done as possible)

$ react-native run-ios

**Or run it from a Workspace Project in Xcode**

Download dependencies in ../RNProject

$ npm install

In ~/.RNP/RNProject/ios 

$ pod install

*NOTE:* This will take a few minutes to do, it might seem stuck on 'Installing boost-for-react-native (1.63.0)' but that usually takes a bit to download. If it goes on for longer then 10-15 minutes, you might need to use user Lakhman's solution here: https://github.com/CocoaPods/cocoapods-downloader/issues/69#issuecomment-351159255 but for 1.63.0 in this case.


Open up the Workspace Project ~/.RNP/RNProject/ios/RNProject.xcworkspace

Wait until it's ready to press start, with your selected emulator or attached device to show up as well in the top left hand corner on the rightside of the Arrow "Play" button. 

Press the play button, this will start the bundling server, open the simulator, and run the app!

**To Run on Android**

I am using Android Studio to run this project, this can be done on either Mac or Windows (tested on both platforms) on it's latest version as Android Studio can be downloaded on either or here: https://developer.android.com/studio/install

Download dependencies in ../RNProject

$ npm install

Start bundling Server in ../RNProject

$ yarn start (may need to run yarn install)


Should be noted Android is currently in the middle of having it's own UI and UX, so features may not run as consistent on there as iOS, but will be when the app has a release.