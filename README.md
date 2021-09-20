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
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!--Add Screenshot here -->

BandDB is designed to be a simple, user-friendly database management system for secondary and post-secondary band directors. If you have used Charms in the past and struggled with it, then you need to check out BandDB! 

Features of BnadDB:
* Keep a digital Instrument Inventory and track which instruments are checked out to which students 
* Digitize your music library!
* Assign Lockers to students and easily access their locker combination when they forget! 

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
   git clone https://github.com/stevehvaughn/banddb-frontend.git
   ```
2. Clone the back-end repo in your root directory 
   ```sh
   git clone https://github.com/stevehvaughn/banddb-backend.git
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
  <img width='75%' src=""/>
</p>

### Searching for Breweries
Click on the home button and you are presented with a map and a search bar. Enter a city or state to being your search for your favorite breweries! Click a beer on the map to see the name of the brewery, and click the find button to display the card for that brewery. Or you can scroll through the list to start your search!  
<p align='center'>
  <img width='75%' src=""/>
</p>

### Marking a Brewery as Visited
Click on "Add to Visited" to mark that brewery as visited. Click on the Visited tab to see all of the breweries you have visited! 
<p align='center'>
  <img width='75%' src=""/>
</p>

### Visited Tab
On the Visited Tab you can see all of your visited breweries on a map! You can also choose to favorite a specific brewery, rate a brewery 1-5 starts, sort by rating, search by name, and visit the website for that brewery. This is the heart of Deja-Bru! When you can't remember where you've visited and what you rated it, come to this page! 
<p align='center'>
  <img width='75%' src=""/>
</p>

### Favorites Tab
On the Favorites Tab you can sort through your favorites by name, or state, as well as search by name. When you click view comments you can see any comments you made about that brewery and add a new comment. You can also remove the brewery from your favorites if they sell out to AB and they start making bad beer! 
<p align='center'>
  <img width='75%' src=""/>
</p>

<!-- ROADMAP -->
## Roadmap

I plan on refactoring this entire project in the future to implement a Ruby on Rails backend as opposed to a Sinatra backend. I also want to add user authentication for teachers to login and only see their students. 

<!-- CONTRIBUTING -->
## Contributing

Are you a teacher who also codes? Do you want to contribute to this open-source project with your own ideas? Are you interested in this app and want to make it even better? Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Add and Commit your Changes (`git commit -am 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->
## Contact

Steve Vaughn - [GitHub](https://github.com/stevehvaughn) | [LinkedIn](https://www.linkedin.com/in/stevehvaughn/) | [Medium](https://stevehvaughn.medium.com/) | [Twitter](https://twitter.com/stevehvaughn) | [Email](steve.h.vaughn@gmail.com)

Project Link: [https://github.com/stevehvaughn/banddb-frontend]https://github.com/stevehvaughn/banddb-frontend) | [https://github.com/stevehvaughn/banddb-backend]https://github.com/stevehvaughn/banddb-backend)

<!-- ACKNOWLEDGEMENTS -->
