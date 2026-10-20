// Edite apenas config.js para definir o link de pagamento.
const CHECKOUT_URL = String(window.SITE_CONFIG?.checkoutUrl || '').trim();
document.getElementById('year').textContent = new Date().getFullYear();
const menu=document.getElementById('mobile-nav'),trigger=document.getElementById('menu-trigger');
trigger.addEventListener('click',()=>{const open=menu.classList.toggle('open');trigger.setAttribute('aria-expanded',String(open));});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');trigger.setAttribute('aria-expanded','false');}));
const modal=document.getElementById('modal');
document.getElementById('checkout').addEventListener('click',()=>{if(CHECKOUT_URL.trim()){window.location.assign(CHECKOUT_URL.trim())}else{modal.showModal()}});
document.getElementById('close').addEventListener('click',()=>modal.close());
document.getElementById('close2').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
