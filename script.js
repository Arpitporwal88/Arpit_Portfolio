// Navbar mobile toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Flip text animation for subtitle
const phrases = [
  "I'm a fresher Full Stack Developer.",
  "I'm a web enthusiast.",
  "I'm a problem solver.",
  "I'm a Java Developer.",
  "I'm a passionate learner."
];
let phraseIndex = 0;
const flipText = document.querySelector('.flip-text');

function showNextPhrase() {
  flipText.style.opacity = 0;
  setTimeout(() => {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    flipText.textContent = phrases[phraseIndex];
    flipText.style.opacity = 1;
  }, 400);
}
setInterval(showNextPhrase, 2500);

// Smooth scroll for anchor links (optional polish)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') !== "#") {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('show');
      }
    }
  });
});



// Timeline data
const timelineData = [
  {
    date: "2nd April 25 – Now",
    title: "Software Developer Intern",
    org: "MPSEDC",
    desc: "Contributing to the Samagra project, focusing on software development and implementation. Gaining real-world experience in delivering impactful technological solutions."
  },
  {
    date: "10th Oct23 – 10th Nov23",
    title: "Intern - App Development",
    org: "Bharat Intern",
    desc: "Enhanced coding skills and gained practical insights into app development during a hands-on internship. A valuable learning experience."
  },
  {
    date: "2021 – 2024",
    title: "Bachelor of Computer Applications",
    org: "Shree Vaishnav Institute of Management, Indore",
    desc: "Gained hands-on experience with emerging technologies and practical project work."
  },
  {
    date: "2020 – 2021",
    title: "12th (PCM)",
    org: "Shree Jain Diwakar H. S. School",
    desc: "Specialized in Physics, Chemistry, and Mathematics, developing analytical thinking and a strong understanding of core scientific principles."
  },
  {
    date: "2018 – 2019",
    title: "10th",
    org: "Shree Jain Diwakar H. S. School",
    desc: "Built a strong foundation in science, mathematics, and humanities while fostering problem-solving skills and personal growth."
}

];

// Render timeline alternating box/date left-right as per step
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  const rows = timelineData.map((item, i) => {
    // Odd (0, 2, 4...): left box, right date. Even index = odd step.
    // Even (1, 3, 5...): left date, right box.
    if (i % 2 === 0) {
      return `
      <div class="timeline-row">
        <div class="timeline-col">
          <div class="timeline-card">
            <div class="tl-title">${item.title}</div>
            <div class="tl-org">${item.org}</div>
            <div class="tl-desc">${item.desc}</div>
          </div>
        </div>
        <div class="timeline-col right">
          <div class="timeline-date">${item.date}</div>
        </div>
        <span class="timeline-dot"></span>
      </div>`;
    } else {
      return `
      <div class="timeline-row even">
        <div class="timeline-col">
          <div class="timeline-date">${item.date}</div>
        </div>
        <div class="timeline-col right">
          <div class="timeline-card">
            <div class="tl-title">${item.title}</div>
            <div class="tl-org">${item.org}</div>
            <div class="tl-desc">${item.desc}</div>
          </div>
        </div>
        <span class="timeline-dot"></span>
      </div>`;
    }
  }).join('');
  container.innerHTML = `<div class="timeline-list">${rows}</div>`;
}

renderTimeline();