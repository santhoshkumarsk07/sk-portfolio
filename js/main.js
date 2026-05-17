// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Initialize AOS Animation
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scroll-progress');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progressHeight = (window.scrollY / totalHeight) * 100;
    if (scrollProgress) {
        scrollProgress.style.width = progressHeight + "%";
    }
});

// Custom Cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
    }

    if (cursorOutline) {
        // Animate the outline slightly behind the dot
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    }
});

// Add hover effects to cursor for clickable items
const clickables = document.querySelectorAll("a, .btn, .skill-card, .project-horizontal-card, .logo, .bx-menu");
clickables.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        if (cursorOutline) {
            cursorOutline.style.width = "60px";
            cursorOutline.style.height = "60px";
            cursorOutline.style.backgroundColor = "rgba(0, 255, 136, 0.1)";
        }
    });
    el.addEventListener("mouseleave", () => {
        if (cursorOutline) {
            cursorOutline.style.width = "40px";
            cursorOutline.style.height = "40px";
            cursorOutline.style.backgroundColor = "transparent";
        }
    });
});

// Typed.js Initialization
if (document.querySelector('.typed-text')) {
    new Typed('.typed-text', {
        strings: ['AI & Data Science Student', 'Machine Learning Engineer', 'Full Stack Developer', 'Problem Solver'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });
}

// Particles.js Initialization
if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 60,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00ff88"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00ff88",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });
}

// TagCloud Initialization
const myTags = [
    'Python', 'Java', 'C', 'HTML', 'CSS', 'JavaScript', 
    'Node.js', 'TypeScript', 'TensorFlow', 'PyTorch', 
    'Keras', 'Scikit-Learn', 'Docker', 'Git', 'GitHub', 
    'MySQL', 'DynamoDB', 'Canva', 'Figma', 'Salesforce'
];
if (document.querySelector('.skill-sphere')) {
    var tagCloud = TagCloud('.skill-sphere', myTags,{
        radius: window.innerWidth > 768 ? 250 : 150,
        maxSpeed: 'normal',
        initSpeed: 'normal',
        direction: 135,
        keep: true
    });
    // Add green color to tagcloud items
    document.querySelector('.skill-sphere').style.color = "var(--main-color)";
    document.querySelector('.skill-sphere').style.fontWeight = "bold";
}

// GitHub Calendar Initialization
if (document.querySelector('.calendar')) {
    GitHubCalendar(".calendar", "santhoshkumarsk07", {
        responsive: true,
        tooltips: true
    });
}

// Magnetic Buttons
const magneticButtons = document.querySelectorAll('.btn');
magneticButtons.forEach(btn => {
    // Add transition for smooth return
    btn.style.transition = 'transform 0.3s ease, background 0.3s ease, color 0.3s ease';
    
    btn.addEventListener('mousemove', function(e) {
        // Temporarily disable transition during hover to allow immediate tracking
        btn.style.transition = 'none';
        
        const position = btn.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;

        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
    });

    btn.addEventListener('mouseout', function() {
        // Restore transition to animate back to original position
        btn.style.transition = 'transform 0.3s ease, background 0.3s ease, color 0.3s ease';
        btn.style.transform = 'translate(0px, 0px)';
    });
});


// Mock Terminal Typing Animations
if (document.getElementById('term-portal')) {
    new Typed('#term-portal', {
        strings: [`
<span class="s-comment">// Connecting to Database...</span>
<span class="s-keyword">const</span> <span class="s-variable">mongoose</span> <span class="s-operator">=</span> <span class="s-function">require</span>(<span class="s-string">'mongoose'</span>);
<span class="s-keyword">await</span> mongoose.<span class="s-function">connect</span>(URI);
<span class="s-comment">// Auth middleware active</span>
router.<span class="s-function">post</span>(<span class="s-string">'/api/payroll'</span>, <span class="s-function">verifyJWT</span>, (<span class="s-variable">req</span>, <span class="s-variable">res</span>) <span class="s-keyword">=></span> {
    <span class="s-keyword">return</span> res.<span class="s-function">status</span>(<span class="s-variable">200</span>).<span class="s-function">json</span>({<span class="s-string">"status"</span>: <span class="s-string">"success"</span>});
});`],
        typeSpeed: 30,
        showCursor: true,
        cursorChar: '|',
        loop: true,
        backDelay: 5000,
        backSpeed: 10
    });
}

if (document.getElementById('term-edgelearn')) {
    new Typed('#term-edgelearn', {
        strings: [`
<span class="s-comment"># Initializing Whisper Model</span>
<span class="s-keyword">import</span> whisper
<span class="s-variable">model</span> <span class="s-operator">=</span> whisper.<span class="s-function">load_model</span>(<span class="s-string">"tiny"</span>)

<span class="s-keyword">def</span> <span class="s-function">process_audio</span>(<span class="s-variable">audio_file</span>):
    <span class="s-variable">result</span> <span class="s-operator">=</span> model.<span class="s-function">transcribe</span>(audio_file)
    <span class="s-keyword">return</span> result[<span class="s-string">"text"</span>]
    
<span class="s-function">print</span>(<span class="s-string">"Model ready on edge device."</span>)`],
        typeSpeed: 30,
        showCursor: true,
        cursorChar: '|',
        loop: true,
        backDelay: 5000,
        backSpeed: 10
    });
}

if (document.getElementById('term-sumit')) {
    new Typed('#term-sumit', {
        strings: [`
<span class="s-comment"># Generating Smart Summary</span>
<span class="s-keyword">from</span> transformers <span class="s-keyword">import</span> pipeline

<span class="s-variable">summarizer</span> <span class="s-operator">=</span> <span class="s-function">pipeline</span>(<span class="s-string">"summarization"</span>)

<span class="s-keyword">def</span> <span class="s-function">summarize_text</span>(<span class="s-variable">text</span>):
    <span class="s-variable">summary</span> <span class="s-operator">=</span> <span class="s-function">summarizer</span>(text, max_length=<span class="s-variable">130</span>)
    <span class="s-keyword">return</span> summary[<span class="s-variable">0</span>][<span class="s-string">'summary_text'</span>]
`],
        typeSpeed: 30,
        showCursor: true,
        cursorChar: '|',
        loop: true,
        backDelay: 5000,
        backSpeed: 10
    });
}


// Preloader Boot Sequence
document.body.classList.add('loading');
const preloader = document.getElementById('preloader');
if (preloader) {
    new Typed('#boot-text', {
        strings: [
            '> Initializing Neural Network...^500<br>> Loading Data Models...^500<br>> Establishing Secure Connection...^500<br>> <span style="color:#fff">Access Granted. Welcome Santhosh.</span>'
        ],
        typeSpeed: 20,
        showCursor: false,
        onComplete: function() {
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                    document.body.classList.remove('loading');
                }, 500);
            }, 1000);
        }
    });
}

// Glass Pill Navbar scroll behavior
let lastScrollTop = 0;
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.classList.add('hide');
    } else {
        // Scrolling up
        header.classList.remove('hide');
    }
    lastScrollTop = scrollTop;
});

// Glowing Timeline Scroll Progress
const timelineContainer = document.querySelector('.timeline-container');
const timelineProgress = document.getElementById('timeline-progress');
const timelineItems = document.querySelectorAll('.timeline-item');

if (timelineContainer && timelineProgress) {
    window.addEventListener('scroll', () => {
        const containerRect = timelineContainer.getBoundingClientRect();
        const containerTop = containerRect.top;
        const containerHeight = containerRect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate how far we've scrolled into the container
        let progress = ((windowHeight / 2) - containerTop) / containerHeight * 100;
        
        // Clamp between 0 and 100
        progress = Math.max(0, Math.min(100, progress));
        timelineProgress.style.height = progress + '%';
        
        // Light up dots
        timelineItems.forEach(item => {
            const itemRect = item.getBoundingClientRect();
            if (itemRect.top < windowHeight / 2) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });
}


// About Me Hacker Terminal
if (document.getElementById('term-bio')) {
    new Typed('#term-bio', {
        strings: [`
<span class="s-keyword">class</span> <span class="s-variable" style="color:#e5c07b;">DataScientist</span>:
    <span class="s-keyword">def</span> <span class="s-function">__init__</span>(<span class="s-variable">self</span>):
        <span class="s-variable">self</span>.name <span class="s-operator">=</span> <span class="s-string">"Santhosh Kumar"</span>
        <span class="s-variable">self</span>.role <span class="s-operator">=</span> <span class="s-string">"AI & Data Science Student"</span>
        <span class="s-variable">self</span>.university <span class="s-operator">=</span> <span class="s-string">"Chennai Institute of Technology"</span>
        <span class="s-variable">self</span>.cgpa <span class="s-operator">=</span> <span class="s-variable">8.8</span>
        
    <span class="s-keyword">def</span> <span class="s-function">get_bio</span>(<span class="s-variable">self</span>):
        <span class="s-keyword">return</span> (
            <span class="s-string">"I specialize in building robust machine learning models, "</span>
            <span class="s-string">"analyzing complex datasets, and developing intelligent "</span>
            <span class="s-string">"solutions that solve real-world problems. With a deep "</span>
            <span class="s-string">"curiosity for how data shapes our world, I continually "</span>
            <span class="s-string">"strive to learn modern technologies and methodologies."</span>
        )
        
<span class="s-comment"># Initialize profile</span>
<span class="s-variable">profile</span> <span class="s-operator">=</span> <span class="s-function">DataScientist</span>()
<span class="s-function">print</span>(profile.<span class="s-function">get_bio</span>())
        `],
        typeSpeed: 15,
        showCursor: true,
        cursorChar: '|',
        loop: false
    });
}
