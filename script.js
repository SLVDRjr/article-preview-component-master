const share_btn = document.querySelector('button');
const avatar = document.querySelector('.avatar');
const social_menu = document.querySelector('.social__menu');
const social = document.querySelector('.social');

share_btn.addEventListener('click', () => {
  avatar.classList.remove('active');
  social_menu.classList.add('active');
  social.classList.add('dark__bg');
})