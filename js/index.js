document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".form-step");
    const nextButtons = document.querySelectorAll(".next");
    const backButtons = document.querySelectorAll(".back");
    const plzInput = document.querySelector(".plz-input");

    let currentStep = 0; // Keeps track of the current step

    let placeholder = null
    let plzLenth = null

    const errorMessage = document.getElementById("plz-error");




    // // Event listener for the PLZ input field
    // plzInput.addEventListener("input", (event) => {
    //     console.log("PLZ Input value changed:", event.target.value);
    // });


    // plzInput.addEventListener("mouseover", (event) => {
    //     placeholder = '-----'
    //     plzInput.value = placeholder
    //     console.log("PLZ Input value changed:", event.target.value, plzInput.placeholder);
    // });

    
    // plzInput.addEventListener("mouseout", (event) => {
    //     placeholder = 'PLZ'
    //     plzInput.placeholder = placeholder
    //     console.log("PLZ Input value changed:", event.target.value, plzInput.placeholder);
    // });


        // Ensure input is numeric and enforce a 5-digit mask
        plzInput.addEventListener("input", (event) => {
            const value = plzInput.value.replace(/\D/g, ""); // Remove non-numeric characters
            plzInput.value = value;
            plzLenth = value


            console.log(value.length)
    
            
    
            // Show an error if not filled completely
            if (value.length === 5) {
                errorMessage.style.display = "none";
            } else {
                errorMessage.style.display = "block";
            }
        });


        
    
        // Handle placeholder behavior
        plzInput.addEventListener("focus", () => {
            if (plzInput.value === "") {
                plzInput.placeholder = "-----";
            }
        });
    
        plzInput.addEventListener("blur", () => {
            if (plzInput.value === "") {
                plzInput.placeholder = "PLZ";
            }
        })



    // Function to show the current step
    function showStep(step) {
        steps.forEach((stepDiv, index) => {
            stepDiv.classList.toggle("active", index === step);
        });
    }



    // Event listeners for next buttons
    nextButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    // Event listeners for back buttons
    backButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    // Show the initial step
    showStep(currentStep);
});
