# RNP

This is a ReactNative training project for myself that will be worked on throughout the Summer of 2020.
It's purpose is to re-create the Pokedex Application from HeartGold/SoulSilver as a fun exercise to get me aquainted with the framework.

~~Versions (note for myself)~~
"react": "16.11.0",
"react-native": "0.62.2",
"react-navigation": "git://github.com/Snailapp/react-navigation.git#2.18.5"


For anyone curious about what the app currently looks like without wanting to do the set up, here's some background info with some screenshots:
**This will be updated every push for now on**

# Home Screen:
4 Diffent buttons, one goes to search screen, one opens the dex, one quits (Backs out) of the app. currently only Open works. The fourth button is a filter that filters from Johto to National entries, this will be implemented as soon as the PokemonList and Grid Profiles are finished, same with the search page.

# PokemonList && Grid Profile;
Almost finished, I retrieve the data from a database I created using Google Cloud Firestore.
There is also a temporary search bar I did for fun to make sure I could filter throughout the list of pokemon names that get taken down from firebase. When I implemented the search screen this will be expanded. Should be noted I am slowly updating Pokemon data on the database as I test along, so any blank fields are not bugs, just me not filling them in yet. Only the quit button works on this page as the other 3 will be added with their specific pages on their implementation goes on the Stack Navigator.


Picture of Progress of both Home Screen (bottom) and Pokemon List (top) images.

Here: https://imgur.com/a/KbGgXbw


# To run the app:
The Current Project Scope is focused on iOS as I'm on limited time to do this project. If time permits I will try and branch out to other platforms on 10ft and android devices (and I'm currently only testing on an iPhone XR, so i can't guarantee it'll look as pretty on other iPhone models, but I've tried to keep my RN styling as device-friendly as possible within time constraints I'm giving myself, so it'll get done, **eventually**.


You can run it in Xcode if you open up the project in **RNP/RNProject/ios/RNProject.xcworkspace**

in ../RNProject

$ npm install

Start the bundling Server in ../RNProject:

$ yarn start (may need to run yarn install)

(Emulator guide)[https://www.macinstruct.com/node/494]

Make sure you have a running iPhone emulator concurrently running alongside it, or it won't be able connect to the development server. (I'll keep enhancing this guide as I further into the project, early stages I'm mostly trying to get as much done as possible)

$ react-native run-ios
