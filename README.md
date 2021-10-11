## PETCARE v3.0.0

This project is an iOS based app using React Native that is meant to help facilitate resources for new pet owners. From fiding instructional videos pertinent to your pet's breed to finding nearest veterinarians and much more.

### Built With
* [Firebase](https://firebase.google.com/)
* [React Native](https://reactnative.dev/)
* [Expo](https://laravel.com)


<!-- GETTING STARTED -->
## Getting Started
-The main entry point for the App is the App.js file
-We use Expo for development and yarn

### Prerequisites

Make sure you have Homebrew installed
* Homebrew
  ```sh
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)
  ``` 
* Firebase
    - Make sure to start a Firebase project and copy the credentails to src/components/Firebase.js
    - With the Firebase project make sure that it has Firestore and Auth for account creation 
    - The first time this project is run on a Firebase project, comment out the data injection code
    located in src/components/Firebase.js, this code will initialize the disease information data for
    the pet diagnosis feature. It will also create an admin in Firebase with <br />
    default username: "ad.min" <br />
    default password: "temp" <br />
    and is reccomended that the password is changed before deploying the app publicly
    - The admin account is the only account that can create vets, while other admin account can be created
    through Firebase it is advised that the amount of admin be kept to a minimum as much as possible. 

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/OAKevin/pet-carev3.git
   ```
2. Install packages using yarn
   ```sh
   yarn install --global expo-cli
   ```
3. Initialize your project with Expo
   ```sh
   expo init pet-carev3
   ```

<!-- ROADMAP -->
## Roadmap

<Whatever we have planned to do on this iteration of the app and what we want the next team to complete>

<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
<We need to add Project Owner and team info>
