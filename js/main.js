document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open);
    });
  }

  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-a').style.maxHeight = null;
      });
      if(!isOpen){
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  const quoteForm = document.getElementById('quoteForm');
  if(quoteForm){
    quoteForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('qName').value.trim();
      const product = document.getElementById('qProduct').value.trim();
      const msg = document.getElementById('qMsg').value.trim();
      let text = `Hola STAF, soy ${name}. Quisiera una cotización sobre: ${product}.`;
      if(msg){ text += ` ${msg}`; }
      const url = `https://wa.me/50498098998?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    });
  }
});
