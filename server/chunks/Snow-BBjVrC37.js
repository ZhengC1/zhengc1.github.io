import { f as ensure_array_like, i as attr_style, k as stringify } from './index-CPJo5UQb.js';

function Snow($$payload) {
  let snowParticles = [];
  const numParticles = 200;
  function createSnowParticle() {
    let x, y;
    if (typeof window !== "undefined") {
      x = Math.random() * window.innerWidth;
      y = Math.random() * -window.innerHeight;
    } else {
      x = Math.random() * 1e3;
      y = Math.random() * -600;
    }
    return {
      x,
      y,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3
    };
  }
  function updateSnow() {
    if (typeof window === "undefined") return;
    snowParticles = snowParticles.map((particle) => {
      let newY = particle.y + particle.speed;
      if (newY > window.innerHeight) {
        newY = Math.random() * -50;
        particle.x = Math.random() * window.innerWidth;
      }
      return { ...particle, y: newY };
    });
  }
  if (typeof window !== "undefined") {
    for (let i = 0; i < numParticles; i++) {
      snowParticles.push(createSnowParticle());
    }
    setInterval(
      () => {
        updateSnow();
      },
      50
    );
  }
  const each_array = ensure_array_like(snowParticles);
  $$payload.out += `<div class="h-screen w-screen bg-gradient-to-b from-blue-900 to-gray-800 absolute inset-0 overflow-hidden" style="z-index: -1;"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let particle = each_array[$$index];
    $$payload.out += `<div${attr_style(`left: ${stringify(particle.x)}px; top: ${stringify(particle.y)}px; width: ${stringify(particle.size)}px; height: ${stringify(particle.size)}px; opacity: ${stringify(particle.opacity)};`)} class="absolute bg-white rounded-sm"></div>`;
  }
  $$payload.out += `<!--]--></div>`;
}

export { Snow as S };
//# sourceMappingURL=Snow-BBjVrC37.js.map
