# RNP

This is a React + ReactNative training project for myself that will be worked on throughout the Summer of 2020.
It's purpose is to re-create the Pokedex Application from HeartGold/SoulSilver as a fun exercise to get me aquainted with them.

~~Versions (note for myself)~~
"react": "16.11.0",
"react-native": "0.62.2",
"react-navigation": "git://github.com/Snailapp/react-navigation.git#2.18.5"

Although I'm not directly focusing on visual presentation, I have done a bit of RN styling to make it look pretty close thus far. 
For anyone curious about what the app currently looks like without wanting to do the set up:
**This will be updated every push for now on**

# Home Screen:
![](https://i.imgur.com/nNZ1FI3.png)

# PokemonList && Grid Profile;
works great, I retrieve the data from a database I created using Google Cloud Firestore:
![](https://i.imgur.com/WxeBk7u.png)
There is also a temporary search bar I did for fun to make sure I could filter throughout the list of pokemon names that get taken down from firebase. When I implemented the search screen this will be expanded.




# To run the app:
The Current Project Scope is focused on iOS as I'm on limited time to do this project. If time permits I will try and branch out to other platforms on 10ft and android devices (and I'm currently only testing on an iPhone XR, so i can't guarantee it'll look as pretty on other iPhone models, but I've tried to keep my RN styling as device-friendly as possible within time constraints I'm giving myself, so it'll get done, **eventually**.

in ../RNProject

$ npm install

$ yarn install

Start the bundling Server in ../RNProject:

$ yarn start

(Emulator guide)[https://www.macinstruct.com/node/494]

Would highly suggest you are trying to run this on a Mac OS

Make sure you have a running iPhone emulator concurrently running alongside it, or it won't be able connect to the development server. (I'll keep enhancing this guide as I further into the project, early stages I'm mostly trying to get as much done as possible)
$ react-native run-ios
