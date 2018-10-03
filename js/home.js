function randomPoint(min, max) {
  return min + ((max - min) * Math.random());
}

function easingOut(k) {
  return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);
}

function init() {
  var hero = document.querySelector('.hero');
  var bg = hero.querySelector('.hero__bg');
  var planets = Array.from(hero.querySelectorAll('.planet'));
  var astronaut = hero.querySelector('.astronaut');
  var flip;

  flip = new FLIP({
    element: bg,
    duration: 500,
    easing: easingOut
  });

  flip.first();
  bg.classList.add('visible');
  flip.last();
  flip.invert();
  flip.play();

  planets.map(function(planet) {
    var flip = new FLIP({
      element: planet,
      duration: 1000,
      easing: easingOut,
      opacity: false
    });

    planet.addEventListener('flipComplete', function() {
      planet.style.animationName = 'planetaryRotation';
    });

    planet.classList.add('outside');
    flip.first();
    planet.classList.remove('outside');
    flip.last();
    flip.invert();

    setTimeout(function() {
      flip.play();
    }, randomPoint(0, 500));
  });

  flip = new FLIP({
    element: astronaut,
    duration: randomPoint(1500, 2000),
    easing: easingOut,
    opacity: false
  });

  astronaut.classList.add('outside');
  flip.first();
  astronaut.classList.remove('outside');
  flip.last();
  flip.invert();
  flip.play();
}

window.addEventListener('load', init);
