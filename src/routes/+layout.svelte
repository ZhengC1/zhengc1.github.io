<script lang="ts">
	import '../global.css';

    import Snow from '$lib/components/Snow.svelte';
	let { children } = $props();
</script>

{@render children()}
<Snow />
