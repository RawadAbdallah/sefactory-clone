// menu/navbar section
const menuToggler = document.getElementById('menu-toggler')
const navBarOverlay = document.getElementById('navbar-overlay')

menuToggler.addEventListener('click', () => {
    menuToggler.classList.toggle("menu-toggled")
    navBarOverlay.classList.toggle('hidden')
})


// program section
const programsWrapper = document.getElementById('programs')
const programTitleText = document.getElementById('program-title-text')
const programTitleColoredText = document.getElementById('program-title-colored')
const programDescText = document.getElementById('program-desc-text')
const programDateText = document.getElementById('bootcamp-date-text')
const programImage = document.getElementById('program-img')
const fcsBtn = document.getElementById('fcs-program-btn')
const fswBtn = document.getElementById('fsw-program-btn')
const fsdBtn = document.getElementById('fsd-program-btn')
const uixBtn = document.getElementById('uix-program-btn')
let activeProgramClass = 'program-fcs'

const programs = [
    {
        id: 1,
        title: '<h1 id="program-title-text"><span id="program-title-colored">> FCS:</span> Foundations of Computer Science</h1>',
        body: '// This 9-week course covers fundamental topics in computer science, including data structures, algorithms, and foundational concepts. It is suitable for coding enthusiasts, former computer science students, and beginners who wish to learn Python programming, object-oriented programming, file systems, and more. The course includes online video materials, assignments, and instructor-led sessions.',
        button: fcsBtn,
        img: './assets/fcs.png',
        color: '#ffc635',

    },
    {
        id: 2,
        title: '<h1 id="program-title-text"><span id="program-title-colored">> FSW:</span> Full-Stack Web Development</h1>',
        body: '// Our 14-week bootcamp is designed to equip aspiring developers with the technical and interpersonal skills needed to become professional software engineers. Participants will learn essential concepts such as Version Control, Object-Oriented Programming, Database Management Systems, MVC Design Patterns, Dependency Management, modern Web Frameworks, and AWS. The program also includes a soft-skills curriculum covering Communication & Interpersonal Skills, Professional Writing, Technical Presentations, Negotiation, and Interviewing, which will be taught through lectures, weekly projects, tech talks, and a final project to showcase their learning.',
        button: fswBtn,
        img: './assets/fsw.png',
        color: 'rgba(40, 238, 167)'
    },
    {   
        id: 3,
        title: '<h1 id="program-title-text"><span id="program-title-colored">> FSD:</span> Full-Stack Data</h1>',
        body: `// SE Factory's 12-week Full-Stack Data course offers robust training in data analysis and engineering. Participants learn to handle large data sets with Python and use libraries like Pandas, NumPy, and Matplotlib for data manipulation and visualization. The course also delves into cloud orchestration, distributed computing, relational databases, and SQL basics. Hands-on projects provide real-world data analysis experience. Upon completion, students gain proficiency in Python for analytics, understand data warehousing, and can effectively visualize and present data insights.`,
        button: fsdBtn,
        img: './assets/fsd.png',
        color: '#9864da'
    },
    {
        id: 4,
        title: '<h1 id="program-title-text"><span id="program-title-colored">> UIX:</span> UI/UX Design Bootcamp</h1>',
        body: `// SE Factory's 6-week UI/UX course offers immersive learning in UI/UX design. It encompasses the essentials of UI/UX, from mastering Figma, color psychology, typography to UX heuristics, prototyping and WCAG guidelines. Learners work on projects, transforming wireframes into mockups, and creating responsive interfaces. The course culminates in a final project, enabling students to conduct a thorough UX audit, revamp a website, and create a well-documented case study. Graduates leave equipped with a polished portfolio and market-ready skills in UI/UX design.`,
        button: uixBtn,
        img: './assets/uix.png',
        color: '#fb508e'
    }
]
function toggleDropdown(id) {
  var dropdownContent = document.getElementById(id);
  if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
  } else {
      dropdownContent.style.display = "block";
  }
}


programs.forEach(program => {
    program.button.addEventListener('click', () => {
        programTitleText.innerHTML = program.title
        programDescText.innerHTML = program.body
        programImage.setAttribute('src', program.img)
        program.button.classList.add('active-button')
        programsWrapper.style.backgroundColor = program.color
        if(program.id === 1){
            programsWrapper.classList.replace(activeProgramClass, 'program-fcs')
            activeProgramClass = 'program-fcs'
            uixBtn.classList.remove('active-button')
            fsdBtn.classList.remove('active-button')
            fswBtn.classList.remove('active-button')
        } else if (program.id === 2) {
            programsWrapper.classList.replace(activeProgramClass, 'program-fsw')
            activeProgramClass = 'program-fsw'
            uixBtn.classList.remove('active-button')
            fsdBtn.classList.remove('active-button')
            fcsBtn.classList.remove('active-button')
        } else if ( program.id === 3){
            programsWrapper.classList.replace(activeProgramClass, 'program-fsd')
            activeProgramClass = 'program-fsd'
            uixBtn.classList.remove('active-button')
            fswBtn.classList.remove('active-button')
            fcsBtn.classList.remove('active-button')
        } else {
            programsWrapper.classList.replace(activeProgramClass, 'program-uix')
            activeProgramClass = 'program-uix'
            fcsBtn.classList.remove('active-button')
            fsdBtn.classList.remove('active-button')
            fswBtn.classList.remove('active-button')
        }
        programImage.setAttribute('alt', activeProgramClass)
    })
})





const slides = document.querySelectorAll('.testimonial');
const dotsContainer = document.getElementById('dots-container');

let currentIndex = 0;

function showSlide(index) {
  const transformValue = -index * 100 + '%';
  document.querySelector('.testimonials-wrapper').style.transform = `translateX(${transformValue})`;

  // Update active dot
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function handleDotClick(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

// Create dots
slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.addEventListener('click', () => handleDotClick(index));
  dotsContainer.appendChild(dot);
});

// Show the initial slide
showSlide(currentIndex);

// Swipe functionality
let startX;

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  const endX = event.changedTouches[0].clientX;
  const deltaX = startX - endX;

  if (deltaX > 0 && currentIndex < slides.length - 1) {
    currentIndex++;
  } else if (deltaX < 0 && currentIndex > 0) {
    currentIndex--;
  }

  showSlide(currentIndex);
}

document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchend', handleTouchEnd);
