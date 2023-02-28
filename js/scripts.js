document.addEventListener('turbolinks:load', () => {

    // Page Loader
    window.addEventListener('beforeunload', (e) => {
        document.body.className = "page-loading";
    }, false);

    // Clear Form
    let formEl = document.querySelectorAll('.form');
    let clearFormBtn = document.querySelectorAll('.clear-form');
    
    if (clearFormBtn) {
        clearFormBtn.forEach((index) => {
            index.addEventListener('click',  () => {
                formEl.forEach((formIndex) => {
                    formIndex.reset();
                });
            });
        });
    }

    let currentStep = 0;
    let form = document.getElementById("myForm");
    if (form) {
        let steps = form.getElementsByClassName("step");
        let nextButtons = form.getElementsByClassName("next");
        let prevButtons = form.getElementsByClassName("prev");
    
        for (let i = 0; i < nextButtons.length; i++) {
            nextButtons[i].addEventListener("click", nextStep);
        }
    
        for (let i = 0; i < prevButtons.length; i++) {
            prevButtons[i].addEventListener("click", prevStep);
        }
    
        function showStep(n) {
            steps[currentStep].style.display = "none";
            currentStep = n;
            steps[currentStep].style.display = "block";
        }
    
        function nextStep() {
            if (currentStep === steps.length - 1) {
                form.submit();
            } else {
                showStep(currentStep + 1);
            }
        }
    
        function prevStep() {
            showStep(currentStep - 1);
        }
    
        showStep(0);
    }
});