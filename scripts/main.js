// Calculate and display experience duration in years
window.addEventListener("DOMContentLoaded", () => {
  const expEl = document.getElementById("experience-years");
  if (expEl) {
    const start = new Date("2024-08-01");
    const now = new Date();
    const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth()); 
    const years = (months / 12).toFixed(1);
    expEl.textContent = `${years} years (${months} months)`;
  }
  
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      try {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value.trim();

        //control flow logic (if, else if, switch)
        if (!name || !email || !subject || !message) {
          alert("All fields are required.");
          return;
        }

        if (!email.includes("@")) {
          throw new Error("Invalid email format.");
        }

        switch (subject) {
          case "hiring":
            alert("Thank you for your interest in hiring me!");
            break;
          case "project":
            alert("I'd love to collaborate on your project!");
            break;
          case "question":
            alert("Thanks for your question. I'll get back to you soon!");
            break;
          default:
            alert("Thanks for reaching out.");
        }

        // Simulate storing data
        const contactData = { name, email, subject, message };
        console.log("Contact Submission:", contactData);

        // Optionally reset form
        form.reset();

      } catch (error) {
        console.error("Form submission failed:", error);
        alert("An error occurred: " + error.message);
      }
    });
  }
});