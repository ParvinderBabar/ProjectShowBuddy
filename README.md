# ShowBuddy

Welcome to the ShowBuddy project! ShowBuddy is a web application that allows users to search for and explore information about TV shows, movies, and celebrities. It provides a user-friendly interface for discovering details about your favorite entertainment content.

## Overview

## ShowBuddy offers a seamless experience for users to:

- Search for TV shows, movies, and celebrities.
- Explore detailed information about shows and movies.
- Get insights into the shows and details of celebrities.
- shows the upcoming shows streaming.
  
# Technologies Used
## Frontend:
HTML, CSS (Tailwind CSS), JavaScript
## Frameworks/Libraries: 
Axios for API requests, 
Swiper for the carousel
## API: 
TVMaze API for fetching show-related data and celebrity details.
OMDB API for fetching movies.



## Project Structure

showbuddy/
|-- main.html
|--dist/
   |--js/
      |--celebs.js
      |--searchTVshows.js
      |--searchMovies.js
      |--upcomingShows.js
      |--register.js
|-- src/
    |--style.css
|-- main.js
|-- images/
    |-- logo.jpg
    |-- default_image.jpg
    |-- ...

## Search Functionality:
Dynamic Search Bar: An intuitive search bar enables users to search for TV shows, movies, and celebrities seamlessly.
Flexible Search Options: Users can choose between three search categories: Shows, Movies, and Celebrities, providing a tailored search experience.

## Dropdown for Search Options:
Select Your Interest: The dropdown menu allows users to select their preferred category before initiating a search. Whether you're interested in the latest TV shows, blockbuster movies, or your favorite celebrities, ShowBUDDY caters to diverse entertainment preferences.

## Dynamic Results Display:
Live Results: As users type in the search bar, the application dynamically displays results matching the query.
Detailed Show Information: For TV shows, detailed information such as name, genre, and schedule is presented in an aesthetically pleasing format.

## Upcoming Shows Carousel:
Stay Informed: A visually appealing carousel showcases shows scheduled for streaming today, keeping users updated on the latest entertainment releases.

## Responsive Design:
Cross-Device Compatibility: ShowBUDDY is designed with a responsive layout, ensuring a consistent and enjoyable experience across various devices, including desktops, tablets, and mobile phones.

## User Registration:
Personalized Experience: Users can register and create accounts, unlocking personalized interactions and additional features tailored to their preferences.

# Getting Started
Clone the repository.
Open main.html in your preferred web browser.
Explore shows, movies, and celebrities with the user-friendly interface.

# Swiper Carousel Integration
ShowBUDDY employs the Swiper Carousel to enhance the user experience by presenting a visually appealing and interactive way to showcase upcoming shows. The Swiper Carousel is a powerful and flexible JavaScript library that facilitates the creation of responsive and touch-enabled carousels or sliders.

## Features of Swiper Carousel in ShowBUDDY
1. Responsive Design:
Swiper provides a responsive design that adapts seamlessly to different screen sizes. This ensures an optimal viewing experience across various devices, from desktops to mobile phones.
2. Easy Navigation:
Intuitive Navigation Buttons: Swiper includes built-in navigation buttons for easy control, allowing users to navigate forward and backward through the carousel effortlessly.

3. Touch and Drag Support:
Touch-Sensitive Interface: Users can swipe left or right on touch-enabled devices, providing a natural and engaging way to interact with the carousel.

4. Customizable Settings:
Adjustable Parameters: Swiper offers a wide range of customizable settings, enabling developers to fine-tune the carousel's behavior, such as the number of visible slides, space between slides, and transition effects.
5. Dynamic Content:
Dynamic Data Binding: Swiper seamlessly integrates with dynamic data, making it an ideal choice for displaying dynamic content like upcoming shows in ShowBUDDY.

In ShowBUDDY, the Swiper Carousel is initialized within the application's JavaScript using the Swiper library. The configuration parameters, such as the number of slides to show and navigation options, are set according to the project's requirements.


## Registration Page in ShowBUDDY
The registration page in ShowBUDDY serves as a gateway for users to create accounts and unlock personalized features within the application. This essential component ensures a seamless and secure onboarding process.

Key Features:
1. User-Friendly Interface:
The registration page boasts an intuitive and user-friendly interface, guiding users through the account creation process with clarity and simplicity.
2. Form Input Validation:
Input fields for essential details, such as username, password, and email, are equipped with validation mechanisms. This ensures that users provide accurate and valid information during registration.
3. Stylish Design with Tailwind CSS:
Tailwind CSS is employed to enhance the visual appeal of the registration form. The application of Tailwind's utility-first approach enables the creation of a sleek and modern design.
html
Copy code
<form id="dynamicForm" class="bg-blue-900 p-8 size-11 h-fit rounded-lg max-w-screen-md mx-96 flex items-center justify-center flex-col mt-10">
    <!-- Form elements go here -->
</form>
4. Responsive Layout:
The registration form is designed to be responsive, ensuring a consistent and enjoyable user experience across various devices, from desktops to mobile devices.
5. Submission Handling:
The registration form includes event handling to capture user submissions. Upon successful registration, users receive confirmation and are redirected to a personalized account area.
javascript

6. Dynamic Feedback:
Users receive dynamic feedback upon successful registration, welcoming them and providing details about their newly created account.
javascript
detailsContainer.innerHTML = `
   <p><strong>Thank you ${usernameValue} for creating an account with ShowBUDDY!</strong></p>
`;
7. Clear and Reset:
After successful registration, the form clears input fields and resets, allowing users to seamlessly explore the application or proceed with additional actions.
javascript

// Clear input values
usernameInput.value = "";
passwordInput.value = "";
emailInput.value = "";
Enhancing User Engagement
The registration page in ShowBUDDY prioritizes a positive user experience by combining aesthetic design, responsive layout, and thoughtful user feedback. This ensures that users can effortlessly register and embark on their journey within the ShowBUDDY platform.
## Upcoming Shows Page
This Page provides users with comprehensive information about the streaming of upcoming shows. 

## Celebrities Details Page
The Celebrities Details Page in ShowBUDDY provides users with comprehensive information about their favorite celebrities. This section enriches the user experience by offering in-depth details, enhancing engagement with celebrity profiles.

Key Features:
1. Rich Media Content:
The Celebs Details Page prominently features rich media content, including high-quality images and videos of the celebrity. This visually immersive experience allows users to connect more deeply with the personality.
javascript

5. Responsive Design:
The Celebs Details Page is designed responsively, ensuring a seamless experience across various devices. Tailwind CSS classes contribute to the responsive and visually appealing layout.
html

<div class="celeb-details bg-white p-8 rounded-lg shadow-md">
   <!-- Celeb details content -->
</div>

## Movies Details Page
The movies Details Page in ShowBUDDY provides users with comprehensive information about the list of movies. 

## TV Shows Details Page
The TV Shows Details Page in ShowBUDDY offers a comprehensive exploration of users' favorite TV shows. This section delivers a detailed overview of the show, cast, episodes, and more.

Key Features:
1. Show Overview:
The page provides an overview of the TV show, including its genre, language, and a brief summary. This section serves as a quick introduction for users exploring new shows.

2. Cast and Crew:
Users can discover the cast and crew of the TV show, providing insights into the talented individuals who bring the story to life.
javascript.

3. Responsive Layout:
The TV Shows Details Page ensures a responsive layout using Tailwind CSS, accommodating users on various devices without compromising the visual experience.

## Tailwind CSS 
follows a utility-first approach, which means i can primarily use pre-built utility classes to style your HTML elements. This eliminates the need for writing custom CSS, allowing for rapid development.

Responsive Design:
Tailwind simplifies responsive design by offering classes like sm:, md:, lg:, and xl: to apply styles based on screen sizes. This ensures a consistent user experience across various devices.

Core Concepts:
Utility Classes:
Tailwind provides a wide range of utility classes for common styles, such as margins, paddings, text alignments, colors, and more. For example:

Flexbox and Grid:
Tailwind includes utility classes for Flexbox and Grid layouts. You can easily create responsive grids and flex containers without writing additional CSS.

Typography:
Tailwind simplifies typography styling with classes for text sizes, fonts, and weights. You can apply styles like text-xl, font-bold, etc., directly in your HTML.

Responsive Visibility:
Tailwind allows you to control the visibility of elements based on screen size. For instance, you can use classes like hidden sm:block to hide an element on small screens and display it on larger screens.
To use Tailwind CSS in a project, it's typically integrated into a build process. You can install it via npm, configure it, and then use a build tool like PostCSS to process your stylesheets.

## Acknowledgments

Special Thanks to the wonderful instructors, Matina Patsos and Jamal Taylor, for their guidance and support in my continuous journey of upskilling in the world of technology!

