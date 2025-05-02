// Persistent theme
(function() {
  const t = localStorage.getItem('theme');
  if (t === 'dark') document.documentElement.classList.add('dark');
})();

// Toggle dark/light
const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', current);
});

// Search toggle and functionality
const searchBtn = document.querySelector('.search-btn');
const navContainer = document.querySelector('.nav-container');
const searchInput = document.getElementById('search-input');

function performSearch(query) {
  // Projects entries
  document.querySelectorAll('.project-entry').forEach(entry => {
    const text = entry.querySelector('h3').innerText.toLowerCase();
    entry.style.display = (!query || text.includes(query)) ? '' : 'none';
  });
  // Blog links
  document.querySelectorAll('.blog-list li').forEach(li => {
    const text = li.innerText.toLowerCase();
    li.style.display = (!query || text.includes(query)) ? '' : 'none';
  });
}

searchBtn.addEventListener('click', () => {
  if (navContainer.classList.contains('search-active')) {
    // Hide input and clear search
    navContainer.classList.remove('search-active');
    searchInput.value = '';
    performSearch('');
  } else {
    navContainer.classList.add('search-active');
    searchInput.focus();
  }
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();
  if (!query) {
    // Hide search input when empty
    navContainer.classList.remove('search-active');
  }
  performSearch(query);
});

// Typed.js initialization
document.addEventListener('DOMContentLoaded', () => {
  new Typed('#typed', {
    strings: ['Cybersecurity Researcher', 'Penetration Tester', 'Security Analyst'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });
  particlesJS('particles-js', {
    particles: { number:{value:50}, size:{value:3} },
    interactivity:{ events:{ onhover:{enable:true, mode:'repulse'} } }
  });
});


// Close search when clicking outside
document.addEventListener('click', function(e) {
  if (navContainer.classList.contains('search-active') && !navContainer.contains(e.target)) {
    searchInput.value = '';
    performSearch('');
    navContainer.classList.remove('search-active');
  }
});
