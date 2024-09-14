function getRiddle() {
    // Simulate a riddle API fetch
    axios.get("https://riddles-api.com/api/riddles/random").then((res) => {
        document.getElementById("riddle").innerHTML = res.data.riddle;
    }).catch((err) => {
        document.getElementById("riddle").innerHTML = "An error occurred while fetching the riddle.";
    });
}

function dataLoaded() {
    let tableBody = document.querySelector('#body');

    // Simulate a puzzle API fetch
    axios.get("https://puzzles-api.com/api/puzzles").then((res) => {
        let puzzles = res.data;

        puzzles.slice(0, 10).forEach((puzzle) => {
            tableBody.innerHTML += `
                <div class="col-4">
                    <div class="card">
                        <img class="card-img-top" src="${puzzle.puzzle}" alt="Puzzle image">
                        <div class="card-body">
                            <h4 class="card-title">Puzzle</h4>
                            <p class="card-text">${puzzle.description}</p>
                            <a href="#!" class="btn btn-primary">Solve this puzzle</a>
                        </div>
                    </div>
                </div>
            `;
        });
    }).catch((err) => {
        console.error("Error fetching puzzles: ", err);
    });
}

// Load both riddles and puzzles on window load
window.onload = function() {
    getRiddle();
    dataLoaded();
};
  /*
     <!-- Riddle Section -->
    <div class="riddle-card">
        <span class="title">🤔 Want a Riddle?</span>
        <p id="riddle" class="description">Click the button to generate a riddle!</p>
        <div class="action">
            <button class="valid" onclick="getRiddle()">Create Riddle 🤔</button>
        </div>
    </div>

    <!-- Puzzle Section -->
    <h1>Puzzles</h1>
    <div class="container">
        <div class="row" id="body"></div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    */