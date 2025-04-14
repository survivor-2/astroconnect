// Save selected astrologer in localStorage
function selectAstrologer(name) {
    localStorage.setItem("selectedAstrologer", name);
    alert(`Selected ${name}`);
  }
  
  // Confirm booking
  function confirmBooking(event) {
    event.preventDefault();
    const name = document.getElementById("userName").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const astrologer = localStorage.getItem("selectedAstrologer") || "Not selected";
  
    alert(`Booking confirmed with ${astrologer} on ${date} at ${time}. Thank you, ${name}!`);
  }
  
  // Simple AI chatbot
  function chatBot() {
    const input = document.getElementById("userInput");
    const chatbox = document.getElementById("chatbox");
  
    const userMsg = document.createElement("div");
    userMsg.className = "msg user";
    userMsg.textContent = input.value;
    chatbox.appendChild(userMsg);
  
    const botMsg = document.createElement("div");
    botMsg.className = "msg bot";
  
    const msg = input.value.toLowerCase();
    if (msg.includes("price") || msg.includes("cost")) {
      botMsg.textContent = "Each session costs ₹500. Payment can be made at the time of booking.";
    } else if (msg.includes("time") || msg.includes("duration")) {
      botMsg.textContent = "Sessions last around 30 minutes.";
    } else if (msg.includes("astrologer")) {
      botMsg.textContent = "We have expert astrologers in love, career, and vastu.";
    } else {
      botMsg.textContent = "Sorry, I didn’t get that. Try asking about price, time or astrologers.";
    }
  
    chatbox.appendChild(botMsg);
    chatbox.scrollTop = chatbox.scrollHeight;
    input.value = "";
  }
  
