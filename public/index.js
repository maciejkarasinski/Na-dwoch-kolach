function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

document
  .getElementById('input-submit')
  .addEventListener('click', function (event) {
    event.preventDefault();
    setCookie('username', document.getElementById('input-name').value, 365);
    location.reload();
  });

function checkCookie() {
  var username = getCookie('username');
  if (username != '') {
    document.getElementById('input-name').style.display = 'none';
    document.getElementById('input-submit').style.display = 'none';
    document.getElementById('output-name').style.display = 'block';
    document.getElementById('output-name').innerHTML = 'Witaj ' + username;
  } else {
    document.getElementById('input-name').style.display = 'block';
    document.getElementById('input-submit').style.display = 'block';
    document.getElementById('output-name').style.display = 'none';

    if (username != '' && username != null) {
      setCookie('username', username, 365);
    }
  }
}
