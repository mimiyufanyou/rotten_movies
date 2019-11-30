const app = document.getElementById('inner-content')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

function formChanged() {
    var inputX = document.getElementById('requestInput').value;
    document.getElementById('demo').innerHTML = inputX;

    var request = new XMLHttpRequest()
    var apiUrl = 'http://localhost:5000/movies/'+inputX


    request.open('GET', apiUrl, true);

    request.onload = function() {
    var data = JSON.parse(this.response);

    data.forEach(movie => {

    const card = document.createElement('div')
    card.setAttribute('class', 'card')

    const h1 = document.createElement('h1')
    h1.textContent = movie.title

    const h2  = document.createElement('h2')
    h2.textContent = movie.genre

    const h3 = document.createElement('h3')
    h3.textContent = movie.cag_release

    container.appendChild(card)

    card.appendChild(h1)
    card.appendChild(h2)
    card.appendChild(h3)

    })
   }
    request.send()
};


// fetch data from endpoint based on what user inputs

// displaying the data by modifying the DOM

// generate random statements like

// "You basic bitch. What about this?"
// "Terrible, try this."
// "Nobody wants to watch that. Do you?"

