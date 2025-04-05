function selectAstrologer(name) {
  const nameMap = {
    riya: "Astrologer Riya",
    aryan: "Astrologer Aryan"
  };
  document.getElementById("selectedAstrologer").value = nameMap[name];
}

document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const astrologer = document.getElementById("selectedAstrologer").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (name && astrologer && date && time) {
    document.getElementById("confirmationMsg").innerText = 
      `✅ Appointment booked with ${astrologer} on ${date} at ${time}.`;
    this.reset();
  } else {
    alert("Please fill all fields.");
  }
});
