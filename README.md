<p align="center">
    <img src="" alt="Logo">
  <h3 align="center">BandDB</h3>
  <p align="center">
    Simplified Inventory Management & Digital Assistant for Band Directors
    <br />
    <br />
    <a href="">View Demo</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!--Add Screenshot here -->

Do you love Beer? Do you love it so much that you've gone to so many breweries and drank so much beer that you can't remember which one's you've been to and which ones are your favorite? Then you NEED Deja-Bru! 

Features of Deja-Bru:
* Search for Breweries by City or State and find breweries on a map 
* Keep a running list of the breweries you have visited
* Label breweries as a favorite and leaves comments so you remember why it's your favorite! (Since you forgot after your 6th pint!) 

### Built With

* [React.js](https://reactjs.org/)
* [Ruby](https://www.ruby-lang.org/en/)
* [Sinatra](http://sinatrarb.com/)
* [SQLite3](https://www.sqlite.org/index.html)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* ruby<br/>
  You might already have ruby installed, run this to check 
  ```sh
  ruby -v
  ```
  If you don't have ruby, check this [documentation](https://www.ruby-lang.org/en/documentation/installation/#rvm) for how to install it

### Installation

Create a new directory on your machine and run the following commands in your terminal. 

1. Clone the front-end repo in your root directory
   ```sh
   git clone https://github.com/stevehvaughn/phase-3-project-frontend.git
   ```
2. Clone the back-end repo in your root directory 
   ```sh
   git clone https://github.com/stevehvaughn/phase-3-project-backend.git
   ```
3. Install NPM packages in the frontend directory
   ```sh
   npm install
   ```
4. Install Gemfile packages in the backend directory
   ```sh
   bundle install
   ```
5. Start the rake server in the backend directory
   ```sh
   rake server
   ```
6. Start the App in the frontend directory
   ```sh
   npm start
   ```

<!-- USAGE EXAMPLES -->
## Usage

### Landing Page
Pour yourself a cold one and watch the page do the same! Bubble animations and a golden ale colored background prepare you to remember your favorite breweries!
<p align='center'>
  <img width='75%' src="https://user-images.githubusercontent.com/82396393/134078777-9126963f-9814-40a1-88a7-48985900861b.gif"/>
</p>

### Searching for Breweries
Click on the home button and you are presented with a map and a search bar. Enter a city or state to being your search for your favorite breweries! Click a beer on the map to see the name of the brewery, and click the find button to display the card for that brewery. Or you can scroll through the list to start your search!  
<p align='center'>
  <img width='75%' src="https://user-images.githubusercontent.com/82396393/134079494-4358e9f7-6c5c-4424-acf4-d36e9f11e537.gif"/>
</p>

### Marking a Brewery as Visited
Click on "Add to Visited" to mark that brewery as visited. Click on the Visited tab to see all of the breweries you have visited! 
<p align='center'>
  <img width='75%' src="https://user-images.githubusercontent.com/82396393/134080137-7d65b985-15f4-4258-b6a1-ee88a3928d67.gif"/>
</p>

### Visited Tab
On the Visited Tab you can see all of your visited breweries on a map! You can also choose to favorite a specific brewery, rate a brewery 1-5 starts, sort by rating, search by name, and visit the website for that brewery. This is the heart of Deja-Bru! When you can't remember where you've visited and what you rated it, come to this page! 
<p align='center'>
  <img width='75%' src="https://user-images.githubusercontent.com/82396393/134084166-05684232-6e1f-4c80-80f6-13385c5bb3a2.gif"/>
</p>

### Favorites Tab
On the Favorites Tab you can sort through your favorites by name, or state, as well as search by name. When you click view comments you can see any comments you made about that brewery and add a new comment. You can also remove the brewery from your favorites if they sell out to AB and they start making bad beer! 
<p align='center'>
  <img width='75%' src="https://user-images.githubusercontent.com/82396393/134085171-2c84436a-12e7-4135-a2fa-1678952608df.gif"/>
</p>

<!-- ROADMAP -->
## Roadmap

We recently were approved to use the Untappd API so we hope to use that data as instead of OpenBreweryDB at a later time. We are also looking to add user authentication to this app and create our own back-end for this project. 

<!-- CONTRIBUTING -->
## Contributing

Are you a beer aficionado who also codes? Do you want to contribute to this open-source project with your own ideas? Are you interested in this app and want to make it even better? Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Add and Commit your Changes (`git commit -am 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->
## Contact

Steve Vaughn - [GitHub](https://github.com/stevehvaughn) | [LinkedIn](https://www.linkedin.com/in/stevehvaughn/) | [Medium](https://stevehvaughn.medium.com/) | [Twitter](https://twitter.com/stevehvaughn) | [Email](steve.h.vaughn@gmail.com)

John Shellabarger - 

Project Link: [https://github.com/johnshellabarger/deja-bru](https://github.com/johnshellabarger/deja-bru)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [OpenBreweryDB](https://www.openbrewerydb.org/)

