<script>
    export const prerender = true;
    import profile from '$lib/assets/profile.jpg';
    import Resume from '$lib/components/Resume.svelte';
    import Snow from '$lib/components/Snow.svelte';
 </script>

<div class="flex items-center justify-center h-screen w-full">
    <div class="w-72 h-72 rounded-full overflow-hidden" >
        <img src={profile} alt="Chun Zheng" class="w-full h-auto object-cover">
      </div>
</div>
<Resume />
<Snow />
