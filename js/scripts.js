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

    // Password Visibility
    let passwordEl = document.querySelectorAll('.password');
    let passwordBtn = document.querySelectorAll('.password-btn');
    let passwordIcon = document.querySelectorAll('.password-icon');

    if (passwordBtn) {
        passwordBtn.forEach((index) => {
            index.addEventListener('click', () => {
                passwordEl.forEach((passwordIndex) => {
                    if (passwordIndex.type === 'password') {
                        passwordIndex.type = 'text';
                        passwordIcon.forEach((passwordIconIndex) => {
                            passwordIconIndex.innerHTML = 'visibility_off';
                        });
                    } else {
                        passwordIndex.type = 'password';
                        passwordIcon.forEach((passwordIconIndex) => {
                            passwordIconIndex.innerHTML = 'visibility';
                        });
                    }
                });
            });
        })
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

    // Sidebar
    let sidebarToggler = document.getElementById('sidebar-toggler');
    let asideEl = document.getElementById('aside');

    if (sidebarToggler) {
        sidebarToggler.addEventListener('click', () => {
            asideEl.classList.add('show-aside');
            asideEl.classList.remove('hide-aside');

            let asideDivOverlay = document.createElement('div');
        
            asideDivOverlay.className = 'shadow-overlay'; 
            document.getElementsByTagName('body')[0].appendChild(asideDivOverlay);

            asideDivOverlay.addEventListener('click', () => {
                asideEl.classList.add('hide-aside');
                document.getElementsByTagName('body')[0].removeChild(asideDivOverlay);
            });
        
        });
    }

    // Sidebar has-children Class
    function ToggleMenu(event) {
        event.stopPropagation();
        if (event.target.firstElementChild) {
            event.target.classList.toggle('active');
        }
    }

    let menuParents = document.querySelectorAll(".side-menu .side-item .side-link");
    menuParents.forEach(menuParent => {
        menuParent.parentElement.addEventListener("click", ToggleMenu);
    })
});