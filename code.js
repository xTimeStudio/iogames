var
  button = document.getElementById('begin'),
  input = document.getElementById('gameLink'),
  gameBody = document.getElementById('game-body'),
  desc = document.getElementById('desc');
  desc.innerHTML = `<h2>Здравствуйте!</h2> Мы приветствуем вам новое приложение, где вы можете написать название игры и получить ее тут же!<br> Важно! В скрипте уже встроенны начало ссылки <del>http://</del><ins>здесь то что вы написали</ins><del>.io</del>`
button.addEventListener('click', gameAdd);
function gameAdd() {
  var gameLink = document.createElement('embed');
  gameLink.src = 'http://'+input.value+'.io';
  gameLink.style.width = 1350;
  gameLink.style.height = 600;
  desc.hidden = true;
  desc.disabled = true;
  gameBody.appendChild(gameLink);
}
