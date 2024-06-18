import { registerAccount } from "./register.js";
import { fetchAndDisplayMovieList } from "./searchMovies.js";
import { celebritySearch } from "./celebs.js";
import { tvList } from "./searchTVshow.js";
import { upcomingShows } from "./upcomingShows.js";

const form = document.querySelector("#form");
const inputSearch = document.querySelector("#inputSearch");
const searchBtn = document.querySelector("#search-btn");

// / Add an event listener for when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Call the upcomingShows function

  upcomingShows();
  searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    // Clear the upcoming shows content
    const carouselList = document.getElementById("carousel-list");

    // Get the search input value
    const userInput = inputSearch.value;

    carouselList.innerHTML = "";

    // Get the selected search option
    const searchOption = document.getElementById("search-option").value;

    // Define the fetchFunction variable
    let fetchFunction;
    let apiUrl;

    if (searchOption === "All") {
      // Hide the slider
      document.getElementById("carousel-list").innerHTML = "";
      // Dynamically import the fetchAndDisplayMovieList function
      fetchFunction = fetchAndDisplayMovieList;
      apiUrl = `http://www.omdbapi.com/?s=${userInput}&page=1&apikey=41815297`;
    } else if (searchOption === "people") {
      // Call the celebritySearch function
      fetchFunction = celebritySearch;
      apiUrl = `https://api.tvmaze.com/search/${searchOption}?q=${userInput}`;
    } else if (searchOption === "shows") {
      fetchFunction = tvList;
      apiUrl = `https://api.tvmaze.com/search/shows?q=${userInput}`;
    } else {
      console.error("Invalid search option:", searchOption);
      return; // Exit the function if the search option is invalid
    }

    // Make the API request
    try {
      const response = await axios.get(apiUrl);

      // Call the dynamically imported function with the API response data
      if (fetchFunction) {
        fetchFunction(userInput, apiUrl);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    if (form) {
      console.log("Form found:", form);
      form.reset();
      console.log("Form reset executed");
    } else {
      console.log("Form not found");
    }
  });
  const registerButton = document.getElementById("registerButton");

  registerButton.addEventListener("click", function () {
    // Clear the upcoming shows content
    const carouselList = document.getElementById("carousel-list");
    carouselList.innerHTML = "";
    console.log("listener working");
    const movieList = document.getElementById("movieList");
    // Clear previous search results
    document.querySelector("#movieList").innerHTML = "";
    const celebDiv = document.querySelector(".celebs");
    celebDiv.innerHTML = "";

    const personDetailsContainer = document.querySelector("#person-details");
    personDetailsContainer.innerHTML = "";

    const movieDiv = document.querySelector(".movies");
    document.querySelector(".movies").innerHTML = "";
    const formContainer = document.getElementById("dynamicFormContainer");
    formContainer.innerHTML = "";

    const showDetailsContainer = document.querySelector("#show-details");
    document.querySelector("#show-details").innerHTML = "";
    registerAccount();
  });
});
