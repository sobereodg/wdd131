document.addEventListener("DOMContentLoaded", () => {
    displayDateInfo();
    populateSelectOptions();
    trackFormSubmissions();
    populateProductSelect();
  });
  
  function displayDateInfo() {
    const yearSpan = document.getElementById("year");
    const lastModified = document.getElementById("lastModified");
  
    const currentYear = new Date().getFullYear();
    const modifiedDate = document.lastModified;
  
    if (yearSpan) yearSpan.textContent = currentYear;
    if (lastModified) lastModified.textContent = modifiedDate;
  }
  

  function populateSelectOptions() {
    const select = document.getElementById("feedbackTopic");
  
    if (!select) return;
  
    const options = [
      "General Feedback",
      "Report a Bug",
      "Feature Suggestion",
      "Account Issue"
    ];
  
    options.forEach(option => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      select.appendChild(opt);
    });
  }
  

  function trackFormSubmissions() {
    const form = document.getElementById("feedbackForm");
    const counterDisplay = document.getElementById("formCounter");
  
    let submissionCount = localStorage.getItem("formSubmissions") || 0;
    if (counterDisplay) counterDisplay.textContent = submissionCount;
  
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        submissionCount++;
        localStorage.setItem("formSubmissions", submissionCount);
        if (counterDisplay) {
          counterDisplay.textContent = submissionCount;
        }
        alert("Thanks for your feedback!");
        form.reset();
      });
    }
  }

  function populateProductSelect() {
    const products = [
      "AK117 – Balanced AR Slayer",
      "BY15 – Classic Pump-Action Power",
      "Fennec – Twin Barrel SMG Madness",
      "DLQ – One Shot, One Kill",
      "JAK-12 – Auto Shotty Beast",
      "HS0405 – High-Impact Hammer"
    ];
  
    const productSelect = document.getElementById("product"); 
  
    if (!productSelect) return;
  
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product;
      option.textContent = product;
      productSelect.appendChild(option);
    });
  }
  