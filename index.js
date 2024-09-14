

// Joke Generator
function getJoke() {
    let config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    axios.get("https://icanhazdadjoke.com", config).then((res) => {
        document.getElementById("joke").innerHTML = res.data.joke;
    }).catch((err) => {
        document.getElementById("joke").innerHTML = "An error occurred while fetching the joke.";
    });
}

// Card Data Fetcher
function dataLoaded() {
    let tableBody = document.querySelector('#body');

    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
        let posts = res.data;

        posts.slice(0, 10).forEach((post) => {
            tableBody.innerHTML += `
                <div class="col-4 mb-4">
                    <div class="card">
                        <img class="card-img-top" src="${post.url}" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">${post.title}</p>
                            <a href="#!" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            `;
        });
    }).catch((err) => {
        console.error("Error fetching data: ", err);
    });
}

// Load both features on window load
window.onload = function() {
    getJoke();
    dataLoaded();
}
