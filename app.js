function PageTransitions() {
  // Button click active class
  const sectBtn = document.querySelectorAll('.control');
  for (let i = 0; i < sectBtn.length; i++) {
    // sectBtn[i].addEventListener('click', function() {
    //   let currentBtn = document.querySelectorAll('.active-btn');
    //   currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
    //   this.className += ' active-btn';
    // })
    sectBtn[i].addEventListener('click', (ev) => {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].classList.remove('active-btn');
      let newBtn = ev.target;
      newBtn.classList.add('active-btn');
    });
  }

  // Sections active class
  const sections = document.querySelectorAll('.section');
  const allSections = document.querySelector('.main-content');
  allSections.addEventListener('click', (ev) => {
    let id = ev.target.dataset.id;
    if (id) {
      // Remove selected from the other buttons
      sectBtn.forEach((btn) => {
        btn.classList.remove('active');
      });
      ev.target.classList.add('active');

      // Hide other sections
      sections.forEach((section) => {
        section.classList.remove('active');
      });

      let element = document.getElementById(id);
      element.classList.add('active');
    }
  });

  // Toggle theme
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
  });
}

PageTransitions();