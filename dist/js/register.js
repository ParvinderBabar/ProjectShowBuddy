function registerAccount() {
  const formContainer = document.getElementById("dynamicFormContainer");

  const form = document.createElement("form");
  form.setAttribute("id", "dynamicForm");
  form.setAttribute(
    "class",
    "bg-blue-900 p-8 rounded-lg max-w-md mx-auto mt-10 text-white"
  );
  form.innerHTML = "<h2 class='text-2xl font-bold mb-4'>CREATE AN ACCOUNT</h2>";

  const usernameInput = createInput("text", "username", "Username");
  const passwordInput = createInput("password", "password", "Password");
  const emailInput = createInput("email", "email", "Email");

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute(
    "class",
    "bg-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-yellow-500"
  );
  submitButton.textContent = "Submit";

  form.appendChild(usernameInput);
  form.appendChild(passwordInput);
  form.appendChild(emailInput);
  form.appendChild(submitButton);

  formContainer.innerHTML = ""; // Clear previous content
  formContainer.appendChild(form);

  // Event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect input values
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    const emailValue = emailInput.value;

    // Display details
    const detailsContainer = document.createElement("div");
    detailsContainer.setAttribute(
      "class",
      "bg-yellow-200 p-8 rounded-lg max-w-md mx-auto mt-10 text-black"
    );
    detailsContainer.innerHTML = `
      <p class='text-xl'><strong>Thank you ${usernameValue} for creating an account with showBUDDY!</strong></p>
    `;

    // Append details to the form container
    formContainer.innerHTML = ""; // Clear previous content
    formContainer.appendChild(detailsContainer);

    // Clear input values
    usernameInput.value = "";
    passwordInput.value = "";
    emailInput.value = "";

    console.log("Form submitted!");
  });
}

// Function to create input elements
function createInput(type, id, placeholder) {
  const input = document.createElement("input");
  input.setAttribute("type", type);
  input.setAttribute("id", id);
  input.setAttribute(
    "class",
    "shadow appearance-none border mb-4 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
  );
  input.setAttribute("placeholder", placeholder);
  input.setAttribute("required", true);

  return input;
}

export { registerAccount };
