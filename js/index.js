document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".form-step");
  const nextButtons = document.querySelectorAll(".next");
  const backButtons = document.querySelectorAll(".back");

  let currentStep = 0;

  function showStep(step) {
      steps.forEach((stepDiv, index) => {
          stepDiv.classList.toggle("active", index === step);
      });
  }

  nextButtons.forEach((button) => {
      button.addEventListener("click", () => {
          if (currentStep < steps.length - 1) {
              currentStep++;
              showStep(currentStep);
          }
      });
  });

  backButtons.forEach((button) => {
      button.addEventListener("click", () => {
          if (currentStep > 0) {
              currentStep--;
              showStep(currentStep);
          }
      });
  });

  showStep(currentStep);
});
