// for animating the profession text in Intro section.
const roles = ['Front-end Developer', 'UI/UX Enthusiast', 'Python Developer', 'Linux Enthusiast'];
let i = 0, j = 0, current = '', isDeleting = false;

function type() {
  current = roles[i];
  document.querySelector('.typing').textContent = current.substring(0, j);

  if (!isDeleting && j < current.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  } else {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();



// for read more/less button in About section.
const btn = document.getElementById("about-read-btn");
const fullText = document.getElementById("about-full-text");

btn.addEventListener("click", () => {
  if (fullText.style.display === "none") {
    fullText.style.display = "inline";
    btn.textContent = "Collapse";
  } else {
    fullText.style.display = "none";
    btn.textContent = "Expand";
  }
});
