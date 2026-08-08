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
  const links = root.querySelector('.navbar__links');

  // Active link highlighting
  const currentPath = window.location.pathname;
  root.querySelectorAll('a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('is-active');
    }
  });
}
