// Function to fetch and display search results
async function fetchAndDisplayMovieList(userInput) {
  try {
    const movieList = document.getElementById("movieList");
    // Clear previous search results
    movieList.innerHTML = "";
    const celebDiv = document.querySelector(".celebs");
    celebDiv.innerHTML = "";

    const personDetailsContainer = document.querySelector("#person-details");
    personDetailsContainer.innerHTML = "";

    const movieDiv = document.querySelector(".movies");
    movieDiv.innerHTML = "";

    const showDetailsContainer = document.querySelector("#show-details");
    showDetailsContainer.innerHTML = "";

    const formContainer = document.getElementById("dynamicFormContainer");
    formContainer.innerHTML = "";

    // Check if userInput is not empty
    if (userInput.trim() === "") {
      console.log("User input is empty.");
      return;
    }

    const searchOption = document.getElementById("search-option").value;

    // Update the API endpoint based on the selected search option
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${userInput}&page=1&apikey=41815297`
    );

    if (searchOption === "All") {
      const searchResults = response.data.Search;

      const displayEntries = (entries) => {
        entries.forEach((item) => {
          const listItem = document.createElement("li");
          listItem.classList.add(
            "bg-white",
            "rounded-md",
            "overflow-hidden",
            "shadow-lg",
            "transition-transform",
            "hover:scale-105",
            "cursor-pointer",
            "mb-4",
            "w-full",
            "sm:w-1/2",
            "md:w-1/3",
            "lg:w-1/4",
            "xl:w-1/5"
          );

          listItem.innerHTML = `
            <div class="flex items-center">
                <img src="${item.Poster}" alt="${item.Title}" class="w-16 h-16 object-scale-down">
                <div class="flex flex-col p-4">
                    <h2 class="text-xl font-bold mb-2 text-blue-900">${item.Title}</h2>
                    <p class="text-yellow-500">${item.Year}</p>
                </div>
            </div>
          `;

          // Append the container to the ".movies" container
          movieList.appendChild(listItem);
        });
      };

      // Display all entries without pagination
      displayEntries(searchResults);
    } else {
      console.error("Invalid search option:", searchOption);
    }
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
  }
}

export { fetchAndDisplayMovieList };
