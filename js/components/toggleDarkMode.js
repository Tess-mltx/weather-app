// console.log("fichier toggler js est chargé");

    const checkbox = document.getElementById('toggleDarkMode');

    checkbox.addEventListener('change', function () {
        let body = document.documentElement;
        let overlay = document.querySelectorAll('.mainPage-sectionForecast-forecastCard-overlay');

        switch (this.checked) {
            case false:
                body.classList.remove('lightMode');
                body.classList.add('darkMode');
                overlay.classList.remove('lightMode');
                overlay.classList.add('darkMode');
                break;
            case true:
                body.classList.remove('darkMode');
                body.classList.add('lightMode');
                overlay.classList.remove('darkMode');
                overlay.classList.add('lightMode');
                break;
        }
    });

