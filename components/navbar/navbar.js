export async function initNavbar() {
  const root = document.getElementById('navbar-root');
  if (!root) return;

  // Fetch navbar template
  const response = await fetch('/components/navbar/navbar.html');
  const html = await response.text();

  // Parse HTML safely
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;

  const template = wrapper.querySelector('#navbar-template');
  if (!template) return;

  // Insert navbar
  root.appendChild(template.content.cloneNode(true));

  // Setup behavior
  const toggle = root.querySelector('.navbar__toggle');
  const links = root.querySelector('.navbar__links');

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Active link highlighting
  const currentPath = window.location.pathname;
  root.querySelectorAll('a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('is-active');
    }
  });
}
