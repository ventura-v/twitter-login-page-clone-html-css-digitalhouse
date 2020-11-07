document
  .getElementById("theme-switcher")
  .addEventListener("click", function () {

    // aplicando Toggle na classe do body
    document.querySelector('body').classList.toggle('darkMode');

    // pegando o nome da classe
    var classBody = document.querySelector('body').classList[0]

    // verificando se a classe "darkMode" está aplicada
    if (classBody === 'darkMode') {

      // caso esteja, o tema dark será aplicado
      document.querySelector(".switch").src = './img/theme-dark.png'
      document.getElementById('img-logo').src = './img/twitter-logo-dark.png'

    } else {

      // caso não esteja, o tema light será aplicado
      document.querySelector(".switch").src = './img/theme-light.png'
      document.getElementById('img-logo').src = './img/twitter-logo.png'
    }

  });