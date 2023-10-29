Shery.mouseFollower({
  skew: true,
  style:2,
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.4,
});
Shery.makeMagnet("#nav", {
    ease: "cubic-bezier(0.5, 1, 0., 1)",
    duration: 0.8,
});

function valuesetter() {
  gsap.set("#nav  a", { y: "100%", opacity: 0 }),
    gsap.set("#home span .child", { y: "100%" }),
    gsap.set("#home .row img", { opacity: 0 });
}
function revealtoSpan() {
  document.querySelectorAll(".reveal").forEach(function (element) {
    let Parent = document.createElement("span");
    let Child = document.createElement("span");
    Parent.classList.add("parent");
    Child.classList.add("child");

    Child.innerHTML = element.innerHTML;
    Parent.appendChild(Child);
    element.innerHTML = "";
    element.appendChild(Parent);
  });
}

var t1 = gsap.timeline();

function loaderanimation() {
  t1.from("#loader .child span", {
    x: 120,
    duration: 0.7,
    stagger: 0.1,
    ease: Circ.easeInOut,
  })
    .to("#loader .parent .child", {
      y: "-110%",
      duration: 0.8,
      ease: Circ.easeInOut,
    })
    .to("#loader", {
      height: 0,
      duration: 0.8,
      // delay:-2,
      // bottom:"100%",
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "100%",
      duration: 0.8,
      delay: -1,
      // bottom:"100%",
      ease: Expo.easeInOut,
    })
    .to("#green", {
      // height:"0%",
      bottom: "100%",
      duration: 0.8,
      delay: -0.8,
      // bottom:"100%",
      ease: Circ.easeInOut,
      onComplete: function () {
        animatehomepage();
      },
    });
}

function animatesvg() {
  gsap.to("#Visual>g>g>path", {
    strokeDashoffset: 0,
    strokeDasharray: 0,
    duration: 2,
    ease: Expo.easeInOut,
    delay: 2,
  });
}

function animatehomepage() {
  var tl = gsap.timeline();
  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.06,
    ease: Expo.easeInOut,
  })
    .to("#home span .child", {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: Expo.easeInOut,
    })
    .to("#home .row img", {
      // y:0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: Expo.easeInOut,
      onComplete: function () {
        gsap.to(".row svg", {
          opacity: 1,
          duration: 0.5,
        });
      },
    });
}

function locoInitialize() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
}

function cardhovereffect() {
  const cursor = document.querySelector("#cursor");
  cursor.style.pointerEvents = "none";

  document.querySelectorAll(".cnt").forEach(function (cnt) {
    var showingimg;
    cnt.addEventListener("mousemove", function (dets) {
      showingimg = dets.target;
      const x = dets.pageX - window.scrollX;
      const y = dets.pageY - window.scrollY;
      cursor.children[showingimg.dataset.index].style.opacity = 1;
      cursor.children[
        showingimg.dataset.index
      ].style.transform = `translate(${x}px, ${y}px)`;
      showingimg.style.filter = "grayscale(1)";
      document.querySelector("#work").style.backgroundColor =
        "#" + showingimg.dataset.color;
    });
    cnt.addEventListener("mouseleave", function (dets) {
      cursor.children[showingimg.dataset.index].style.opacity = 0;
      showingimg.style.filter = "grayscale(0)";
      document.querySelector("#work").style.backgroundColor = "#fff";
    });
  });
}
setTimeout(function () {
  var loader = document.querySelector('.loader');
  if (loader) {
      loader.parentNode.removeChild(loader);
  }
}, 4000);


revealtoSpan();
valuesetter();
loaderanimation();
cardhovereffect();
// animatesvg();
locoInitialize();
