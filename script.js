document.getElementById("getStartedBtn").addEventListener("click", function() {
    // Hide the original landing page content and show the new UI
    document.querySelector("header").style.display = "none";
    document.getElementById("emailSubscription").style.display = "none";
    document.getElementById("content").style.display = "block";
});

// Category buttons to toggle between sections
document.getElementById("articlesBtn").addEventListener("click", function() {
    document.getElementById("articlesSection").style.display = "grid";
    document.getElementById("resourcesSection").style.display = "none";
    document.getElementById("storeSection").style.display = "none";
});

document.getElementById("resourcesBtn").addEventListener("click", function() {
    document.getElementById("articlesSection").style.display = "none";
    document.getElementById("resourcesSection").style.display = "grid";
    document.getElementById("storeSection").style.display = "none";
});

document.getElementById("storeBtn").addEventListener("click", function() {
    document.getElementById("articlesSection").style.display = "none";
    document.getElementById("resourcesSection").style.display = "none";
    document.getElementById("storeSection").style.display = "grid";
});
