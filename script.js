document.addEventListener("DOMContentLoaded", () => {
    const loginLink = document.getElementById("login-link");
    const loginSection = document.getElementById("login-section");

    loginLink.addEventListener("click", (event) => {
        event.preventDefault();
        loginSection.classList.toggle("hidden");
    });

    // Meal Planner Form Submission
    const mealPlannerForm = document.getElementById("meal-planner-form");
    mealPlannerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Meal plan generated successfully!");
        // Additional logic for generating meal plan
    });

    // Checkout Button
    const checkoutButton = document.getElementById("checkout");
    checkoutButton.addEventListener("click", () => {
        alert("Proceeding to checkout!");
        // Additional logic for checkout process
    });
});
