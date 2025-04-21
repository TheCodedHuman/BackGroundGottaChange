console.log("Script running...");

const colorDivs = document.querySelectorAll('.color');      // Selects all divs with class '.color'
const body = document.querySelector('body');                // Selects body

// Loop through each div
colorDivs.forEach(function(div) {
    div.addEventListener('click', function() {
        const colorClass = div.classList[1]; // Extract the second class name (e.g., 'red', 'yellow')

        // Control flow using switch
        switch (colorClass) {
            case 'red':
                body.style.backgroundColor = 'red';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                break;
            case 'green':
                body.style.backgroundColor = 'green';
                break;
            case 'darkgrey':
                body.style.backgroundColor = 'darkgrey';
                break;
            case 'white':
                body.style.backgroundColor = 'white';
                break;
            case 'skyblue':
                body.style.backgroundColor = 'skyblue';
                break;
            case 'lavender':
                body.style.backgroundColor = 'lavender';
                break;
            case 'palegreen':
                body.style.backgroundColor = 'palegreen';
                break;
            case 'peach':
                body.style.backgroundColor = 'peachpuff';
                break;
            case 'beige':
                body.style.backgroundColor = 'beige';
                break;
            case 'softpink':
                body.style.backgroundColor = 'lightpink';
                break;
            case 'lightyellow':
                body.style.backgroundColor = 'lightyellow';
                break;
            case 'turquoise':
                body.style.backgroundColor = 'turquoise';
                break;
            case 'pastelpurple':
                body.style.backgroundColor = 'thistle';
                break;
            case 'seashell':
                body.style.backgroundColor = 'seashell';
                break;
            default:
                console.log("Unrecognized color!");
        }
    });
});