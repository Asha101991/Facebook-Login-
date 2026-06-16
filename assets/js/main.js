const form = document.querySelector('#demo-form');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Demo only — no information was submitted.');
});
