const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  console.log('Active Page:', activePage);
  console.log('Link Href:', link.href);

  if (link.href.includes(activePage)) {
    link.classList.add('active');
    console.log(link);
  }
});
