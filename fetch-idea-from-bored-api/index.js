fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("activity-container").innerHTML = `
            <p>${data.activity}</p>
        `
    })
``