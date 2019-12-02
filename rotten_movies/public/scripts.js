const app = document.getElementById('inner-content')

const container = document.createElement('div')
container.setAttribute('class', 'container')

function updateTextInput(val) {
    let stepsMap = new Map([
        ["1", ["worst", " Erudite, Boring, Enjoy"]],
        ["2", ["bad", " Challenging Levels of Trash"]],
        ["3", ["okay", " Read A Book Later"]],
        ["4", ["good", " Yaass Queen"]],
        ["5", ["best", " Dank Bottom Of The Barrel"]]
        ]);

    console.log(stepsMap.get(val)[0]);
    console.log(stepsMap.get(val)[1]);
    document.getElementById('textInput').value=stepsMap.get(val)[1];
    document.getElementById('callInput').value=stepsMap.get(val)[0];
}

app.appendChild(container)

const card = document.createElement('div')
card.setAttribute('class', 'card')

const h1 = document.createElement('h1')
const h2  = document.createElement('h2')
const h3 = document.createElement('h3')

container.appendChild(card)

card.appendChild(h1)
card.appendChild(h2)
card.appendChild(h3)

function formChanged() {
    var inputX = document.getElementById('callInput').value

    var request = new XMLHttpRequest()
    var apiUrl = 'http://localhost:5000/movies/'+inputX

    request.open('GET', apiUrl, true);

    request.onload = function() {
    var data = JSON.parse(this.response);

    console.log(data)

    data.forEach(movie => {

    h1.textContent = movie.title
    h2.textContent = movie.genre
    h3.textContent = movie.cag_release

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

