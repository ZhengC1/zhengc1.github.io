<script>
    let snowParticles = [];
    const numParticles = 200;
  
    function createSnowParticle() {
      let x, y;
      if (typeof window !== 'undefined') {
        x = Math.random() * window.innerWidth;
        y = Math.random() * -window.innerHeight;
      } else {
        // Provide default values for server-side rendering
        x = Math.random() * 1000; //  default width
        y = Math.random() * -600;  // default height
      }
  
      return {
        x: x,
        y: y,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.7 + 0.3,
      };
    }
  
    function updateSnow() {
      if (typeof window === 'undefined') return;
  
      snowParticles = snowParticles.map((particle) => {
        let newY = particle.y + particle.speed;
        if (newY > window.innerHeight) {
          newY = Math.random() * -50;
          particle.x = Math.random() * window.innerWidth;
        }
        return { ...particle, y: newY };
      });
    }
  
      if (typeof window !== 'undefined') {
          for (let i = 0; i < numParticles; i++) {
            snowParticles.push(createSnowParticle());
          }
      
          setInterval(() => {
            updateSnow();
          }, 50);
      }
  </script>
  
  <div class="h-screen w-screen bg-gradient-to-b from-blue-900 to-gray-800 absolute inset-0 overflow-hidden"
  style="z-index: -1;"
  >
    {#each snowParticles as particle (particle)}
      <div
        style="left: {particle.x}px; top: {particle.y}px; width: {particle.size}px; height: {particle.size}px; opacity: {particle.opacity};"
        class="absolute bg-white rounded-sm"
      />
    {/each}
  </div>