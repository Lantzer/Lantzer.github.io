// Ensure script is connected
console.log('JavaScript is connected');

// JavaScript to simulate typing effect
function typeWriter(elementId, text, speed) {
  let i = 0;
  const element = document.getElementById(elementId);

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Call the function with your desired string and speed
document.addEventListener("DOMContentLoaded", function() {
  console.log('Page fully loaded');
  const text = "Preston Lantzer";
  const speed = 150; // Speed in milliseconds
  typeWriter("typed-output", text, speed);

});
