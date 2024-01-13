async function celebritySearch() {
  try {
    const userInput = inputSearch.value;
    const searchOption = document.getElementById("search-option").value;
    const celebDiv = document.querySelector(".celebs");
    const personDetailsContainer = document.querySelector("#person-details");
    personDetailsContainer.innerHTML = "";
    document.querySelector("#movieList").innerHTML = "";
    document.querySelector(".movies").innerHTML = "";
    document.querySelector("#show-details").innerHTML = "";
    const formContainer = document.getElementById("dynamicFormContainer");
    formContainer.innerHTML = "";

    const response = await axios.get(
      `https://api.tvmaze.com/search/${searchOption}?q=${userInput}`
    );

    if (searchOption === "people") {
      const list = response.data;

      // Clear previous search results
      celebDiv.innerHTML = "";

      const gridContainer = document.createElement("div");
      gridContainer.classList.add(
        "grid",
        "grid-cols-1",
        "sm:grid-cols-2",
        "md:grid-cols-3",
        "lg:grid-cols-4",
        "xl:grid-cols-6",
        "gap-4"
      );

      list.forEach((item) => {
        const name = item.person.name;
        const img = item.person.image
          ? item.person.image.medium
          : "./images/unavailable_img.jpg";
        const personId = item.person.id;

        const celebResultContainer = document.createElement("div");
        celebResultContainer.classList.add(
          "celebs",
          "celebrity-results",
          "bg-white",
          "rounded-md",
          "overflow-hidden",

          "shadow-lg",
          "transition-transform",
          "hover:scale-105"
        );

        const link = document.createElement("a");
        link.href = "#";
        link.dataset.personId = personId;
        link.onclick = function () {
          showPersonDetails(personId);
          return false;
        };

        const imgElement = document.createElement("img");
        imgElement.src = img;
        imgElement.alt = name;
        imgElement.classList.add(
          "w-full",
          "h-48",
          "object-center",
          "rounded-lg",
          "mb-4",
          "transition-transform",
          "hover:scale-110"
        );

        const detailsContainer = document.createElement("div");
        detailsContainer.classList.add("p-4");

        const h2 = document.createElement("h2");
        h2.textContent = name;
        h2.classList.add(
          "text-xl",
          "font-bold",
          "text-blue-800",
          "bg-yellow-400"
        );

        detailsContainer.appendChild(h2);

        link.appendChild(imgElement);
        link.appendChild(detailsContainer);

        celebResultContainer.appendChild(link);
        gridContainer.appendChild(celebResultContainer);
      });

      celebDiv.appendChild(gridContainer);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  // Attach event listener to the search button
  document
    .getElementById("search-btn")
    .addEventListener("click", celebritySearch);

  async function showPersonDetails(personId) {
    const personDetailsContainer = document.querySelector("#person-details");

    try {
      const response = await axios.get(
        `https://api.tvmaze.com/people/${personId}`
      );
      const person = response.data;

      // Clear previous search results
      personDetailsContainer.innerHTML = ""; // Change to use id instead of class

      const detailContainer = document.createElement("div");
      detailContainer.classList.add("person-details");

      const detailsHTML = `
      <div class="person-details bg-white text-yellow-400 p-8 size-11 h-fit rounded-lg max-w-screen-md mx-auto flex items-center justify-center flex-col mt-10">
        ${`<img src="${
          person.image ? person.image.medium : "./images/unavailable_img.jpg"
        }" alt="${
          person.name
        }" class="w-full h-48 object-scale-down mb-4 rounded-md">`}
        <div class="text-blue-800">
          <div class="mb-1 text-yellow-400 font-bold size-7">
            <strong> ${person.name}</strong>
          </div>
          ${
            person.gender
              ? `<div class="mb-2"><strong>Gender:</strong> ${person.gender}</div>`
              : ""
          }
          ${
            person.language
              ? `<div class="mb-2"><strong>Language:</strong> ${person.language}</div>`
              : ""
          }
          ${
            person.country
              ? `<div class="mb-2"><strong>Country:</strong> ${person.country.name}</div>`
              : ""
          }
          ${
            person.birthday
              ? `<div><strong>Birthday:</strong> ${person.birthday}</div>`
              : ""
          }
        </div>
      </div>
    `;

      detailContainer.innerHTML = detailsHTML;
      personDetailsContainer.appendChild(detailContainer);

      document.querySelectorAll(".celebrity-results").forEach((result) => {
        result.style.display = "none";
      });
    } catch (error) {
      console.error("Error fetching person details:", error);
    }
  }
}
export { celebritySearch };
