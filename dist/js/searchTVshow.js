// Function to fetch and display TV show results
async function tvList(userInput) {
  try {
    // Clear previous search results
    const movieDiv = document.querySelector(".movies");
    movieDiv.innerHTML = "";

    const personDetailsContainer = document.querySelector("#person-details");
    personDetailsContainer.innerHTML = "";

    document.querySelector("#movieList").innerHTML = "";

    const celebDiv = document.querySelector(".celebs");
    celebDiv.innerHTML = "";

    const showDetailsContainer = document.querySelector("#show-details");
    showDetailsContainer.innerHTML = "";

    const formContainer = document.getElementById("dynamicFormContainer");
    formContainer.innerHTML = "";

    const searchOption = document.getElementById("search-option").value;

    // Update the API endpoint based on the selected search option
    const response = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${userInput}`
    );
    const list = response.data;

    if (searchOption === "shows") {
      // Create a grid container
      const gridContainer = document.createElement("div");
      gridContainer.classList.add(
        "grid",
        "grid-cols-1",
        "sm:grid-cols-2",
        "md:grid-cols-3",
        "lg:grid-cols-4",
        "xl:grid-cols-5",
        "gap-6"
      );

      list.forEach((item) => {
        const name = item.show.name;
        const img = item.show.image
          ? item.show.image.medium
          : "./images/default_image.jpg";
        const showId = item.show.id;
        const genre = item.show.genres;

        // Create a grid item for each show
        const gridItem = document.createElement("div");
        gridItem.classList.add(
          "bg-blue-800",
          "rounded-md",
          "overflow-hidden",
          "transition-transform",
          "hover:scale-105",
          "cursor-pointer",
          "mb-4",
          "w-full"
        );

        const cardHTML = `
          <div class="flex flex-col h-full">
            <img src="${img}" alt="${name}" class="w-full h-48 object-cover">
            <div class="p-4 flex-grow">
              <h2 class="text-xl font-bold mb-2">${name}</h2>
              <p class="text-gray-200">Genre: ${genre}</p>
            </div>
            <div class="p-3 bg-blue-900">
              <button data-show-id="${showId}" class="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full">Details</button>
            </div>
          </div>
        `;
        gridItem.innerHTML = cardHTML;
        gridContainer.appendChild(gridItem);
      });

      // Append the grid container to the movies div
      movieDiv.appendChild(gridContainer);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Attach a single click event handler to the movies container using event delegation
document.querySelector(".movies").addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const showId = event.target.dataset.showId;
    onClickShowDetails(showId);
  }
});

// Updated click handler function with async/await
async function onClickShowDetails(showId) {
  try {
    // Clear previous show details
    document.querySelector("#show-details").innerHTML = "";
    document.querySelector(".movies").innerHTML = "";

    // Make an API request to get detailed information for the selected show
    const response = await axios.get(`https://api.tvmaze.com/shows/${showId}`);
    const show = response.data;

    const showDetailsContainer = document.querySelector("#show-details");

    const detailContainer = document.createElement("div");
    detailContainer.classList.add(
      "show-details",
      "h-screen",
      "text-yellow-400",
      "p-9",
      "rounded-lg",
      "shadow-lg",
      "bg-white",
      "transition-transform",
      "hover:scale-105"
    );

    const imgElement = document.createElement("img");
    imgElement.src = show.image.medium;
    imgElement.alt = show.name;
    imgElement.classList.add(
      "rounded-lg",
      "mb-4",
      "transition-transform",
      "hover:scale-110"
    );
    detailContainer.appendChild(imgElement);

    const titleElement = document.createElement("h2");
    titleElement.textContent = show.name;
    titleElement.classList.add(
      "text-4xl",
      "font-bold",
      "mb-2",
      "text-blue-800"
    );
    detailContainer.appendChild(titleElement);

    const ulElement = document.createElement("ul");
    ulElement.classList.add("text-black");

    // Add show details to the list
    const details = {
      Language: show.language,
      Genres: show.genres.join(", "),
      "Average Rating": show.rating.average,
      Schedule: `${show.schedule.days} ${show.schedule.time}`,
      Summary: show.summary,
    };

    // Create list items for each detail
    for (const [key, value] of Object.entries(details)) {
      const liElement = document.createElement("li");
      liElement.classList.add("flex", "items-center", "mb-2");
      liElement.innerHTML = `<strong class="mr-2">${key}:</strong><span>${value}</span>`;
      ulElement.appendChild(liElement);
    }

    // Append the list to the detail container
    detailContainer.appendChild(ulElement);

    showDetailsContainer.appendChild(detailContainer);

    document.querySelectorAll(".movies .search-result").forEach((result) => {
      result.style.display = "none";
    });

    document.getElementById("form").reset();

    showDetailsContainer.style.display = "block";
  } catch (error) {
    console.error("Error fetching show details:", error);
  }
}

export { tvList, onClickShowDetails };
