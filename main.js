onload = () => {
    document.body.classList.remove("container");
  };


  document.addEventListener('DOMContentLoaded', function() {
    const titles = ['Feliz Cumpleaños','para la mejor abogada', 'que papa dios te llene de muchas bendicones hoy, mañana y siempre❤️','mejor tarde que nunca😉.'];
    let index = 0;
  
    function changeTitle() {
      document.getElementById('nombre').textContent = titles[index];
      index = (index + 1) % titles.length;
    }
  
    setInterval(changeTitle, 4000);
  });
  
