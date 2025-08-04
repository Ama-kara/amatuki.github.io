document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('menu-btn-check');
    const links = document.querySelectorAll('.sp-menu-content a');
  
    links.forEach(link => {
      link.addEventListener('click', function() {
        if (checkbox.checked) {
          checkbox.checked = false;
        }
      });
    });
  });
  