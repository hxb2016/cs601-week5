let button = document.getElementById("button")
button.addEventListener("click", async (e) => {
    e.preventDefault();
    await fetch("./degrees.json")
        .then(res => {
            console.log("come in")
            res.json()
        })
        .then(date => console.log(date))

})