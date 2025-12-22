AOS.init({ duration: 1000, once: true });

/* Typing Effect */
const texts = [
  "Modern • Responsive • Clean UI",
  "Frontend Developer",
  "Creative CSS & JavaScript",
];

let i = 0,
  j = 0,
  del = false;
const el = document.getElementById("typing");

function typing() {
  const text = texts[i];
  el.textContent = del ? text.slice(0, --j) : text.slice(0, ++j);

  if (!del && j === text.length) del = true;
  if (del && j === 0) {
    del = false;
    i = (i + 1) % texts.length;
  }
  setTimeout(typing, del ? 60 : 100);
}
if (el) typing();

/* Load GitHub Projects */
const container = document.getElementById("projects");

fetch("https://api.github.com/users/hafizullohkomilov013-cyber/repos")
  .then((res) => res.json())
  .then((data) => {
    data.slice(0, 6).forEach((repo) => {
      container.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <h5>${repo.name}</h5>
            <p class="text-muted">${repo.description || "No description"}</p>
            <a href="${
              repo.html_url
            }" target="_blank" class="btn btn-outline-primary btn-sm">
              GitHub
            </a>
          </div>
        </div>
      `;
    });
  });
