document.getElementById("get-activity").addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // textContent or innerHTML can be used to change the content of an element. textContent is safer because it doesn't allow HTML injection.
    document.getElementById("activity").textContent = data.activity 
    document.getElementById("title").textContent = "🦾 HappyBot🦿"
    document.querySelector("main").classList.add("fun");
  })
})
