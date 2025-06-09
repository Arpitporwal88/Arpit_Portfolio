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



 function showSkills(category) {
            const buttons = document.querySelectorAll('.category-buttons button');
            buttons.forEach(button => button.classList.remove('active'));

            const selectedButton = Array.from(buttons).find(button => button.textContent.toLowerCase().includes(category));
            if (selectedButton) {
                selectedButton.classList.add('active');
            }

            const skillsList = document.getElementById('skills-list');

            // Example dynamic skill switching
            const skills = {
                'web-design': [
                    { name: 'HTML', percentage: 84 },
                    { name: 'CSS', percentage: 75 },
                    { name: 'Bootstrap', percentage: 79 },
                    { name: 'Responsive Design', percentage: 79 },
                ],
                programming: [
                    { name: 'Java', percentage: 80 },
                    { name: 'C#', percentage: 75 },
                    { name: 'JavaScript', percentage: 70 },
                    { name: 'C++', percentage: 70 },
                ],
                frameworks: [
                    { name: 'Asp Dotnet Core', percentage: 90 },
                    { name: 'Spring & Spring Boot', percentage: 90 },
                    { name: 'Webforms', percentage: 60 },
                ],
                tools: [
                    { name: 'Git & GitHub', percentage: 90 },
                    { name: 'VS Code', percentage: 90 },
                    { name: 'Docker', percentage: 60 },
                    { name: 'Postman', percentage: 70 },
                ],
                language: [
                    { name: 'English', percentage: 80 },
                    { name: 'Hindi', percentage: 85 },
                ]
            };

            skillsList.innerHTML = '';
            skills[category].forEach(skill => {
                const skillElement = document.createElement('div');
                skillElement.className = 'skill';
                skillElement.innerHTML = `
                    <span class="skill-name">${skill.name}</span>
                    <div class="progress-bar"><span style="width: ${skill.percentage}%;"></span></div>
                    <span class="percentage">${skill.percentage}%</span>
                `;
                skillsList.appendChild(skillElement);
            });
        }