async function upcomingShows() {
  try {
    const response = await axios.get(
      "https://api.tvmaze.com/schedule?country=US&date="
    );
    const list = response.data;

    // Create carousel container
    const carouselList = document.getElementById("carousel-list");
    const carouselContainer = document.createElement("div");

    carouselContainer.classList.add("swiper-wrapper");

    // Create Swiper container
    const swiperContainer = document.createElement("div");
    swiperContainer.classList.add("swiper-container");
    swiperContainer.innerHTML =
      '<p class="text-2xl lg:text-4xl font-bold text-white mb-7">Shows Streaming Today</p>';
    // Append Swiper container to carousel container
    carouselList.appendChild(swiperContainer);
    swiperContainer.appendChild(carouselContainer);

    list.forEach((item) => {
      // Create a new div for each item
      const carouselItem = document.createElement("div");
      carouselItem.classList.add("swiper-slide");

      // Create an img element for each image
      const imgElement = document.createElement("img");
      imgElement.src = item.show.image.medium;
      imgElement.alt = item.show.name;
      imgElement.classList.add("card-image", "shrink-0");

      // Additional details for each slide
      const detailsContainer = document.createElement("div");
      detailsContainer.innerHTML = `
          <h2 class="text-lg lg:text-xl font-bold text-white mb-2">${item.show.name}</h2>
          <ul class="text-gray-300">
              <li class="flex items-center mb-2">
                  <strong class="mr-2">Airdate:</strong>
                  <span>${item.airdate}</span>
              </li>
               <li class="flex items-center mb-2">
                   <strong class="mr-2">Airtime:</strong>
                  <span>${item.airtime}</span>
              </li>
          </ul>
        `;

      carouselItem.appendChild(imgElement);
      carouselItem.appendChild(detailsContainer);
      carouselContainer.appendChild(carouselItem);
    });

    // Initialize Swiper
    const swiper = new Swiper(swiperContainer, {
      slidesPerView: 6,
      spaceBetween: 6,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    // Display an error message to the user
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Failed to fetch data. Please try again.";
    carouselList.appendChild(errorMessage);
  }
}

export { upcomingShows };
