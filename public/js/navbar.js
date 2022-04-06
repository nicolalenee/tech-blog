const $burger = document.querySelectorAll('.navbar-toggler')[0];

$burger.addEventListener('click', (event) => {
  var target = $burger.getAttribute('data-target');
  var $sub = document.querySelectorAll(target)[0];
  $sub.className = ($sub.className + ' show').replace(/ show show/, '');
});