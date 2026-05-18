import gsap from "gsap";
import { Draggable } from "gsap/all";
import InertiaPlugin from "gsap/InertiaPlugin";

import "../scss/main.scss";

const world = document.querySelector(".world");

gsap.registerPlugin(Draggable, InertiaPlugin);

let drag;

window.addEventListener("load", () => {

  gsap.set(world, {
    x: -(world.offsetWidth - window.innerWidth) / 2,
    y: -(world.offsetHeight - window.innerHeight) / 2
  });

  drag = Draggable.create(world, {
    type: "x,y",
    edgeResistance: 1,
    inertia: true,
    bounds: ".viewport",
    inertiaProps: {
        x: { resistance: 3000, minDuration: 0.2, maxDuration: 1.4 },
        y: { resistance: 3000, minDuration: 0.1, maxDuration: 1.4 }
    }
  });
});

const centerBtn = document.querySelector('.backToCenter__btn');

centerBtn.addEventListener('click', () => {
  gsap.to(world, {
    x: -(world.offsetWidth - window.innerWidth) / 2,
    y: -(world.offsetHeight - window.innerHeight) / 2,
    duration: 1.6,
    ease: "power3.out"
  });
});

const paths = {
  path1 : {
    sizes : {
      first : 557,
      second : 1635,
      third : 559
    },
    direction : {
      first : "vertical",
      second : "horizontal",
      third : "vertical"
    }
  }
}

// Comment définir l'ordre et le chemin précis entre vert/hor -> pas de .create() mais .path1(), .path2() etc...
// Test avec path1 qui fait : 557px (vert) -> 1635px (hor) -> 559px (vert) + presLn
// Pour cela, un objet global qui contient chaque path(sizes, direction), utilisé via first, second etc... chaque first size = first direction
// Class Lines qui gère .create() pour init, .anim()? -> pour créer la logique d'animation et .update()? pour update l'anim ? .create() prends les valeurs de paths{} et les applique via un for et qui prends paths.length

// Class CrossPoint qui gère .create() pour init 
// Séparer lines.forEach(ln => {
//        Let crosspoint = new CrossPoint(28 ,28);
// });


// Calcul ratio titre pour positionner correctement les points de départ (%)

// Pas besoin de taille spécifiques puisque nav/taille libre -> mais partir sur base des tailles actuelles pour semi responsive 
