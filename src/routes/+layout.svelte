<script lang="ts">
	export const prerender = true;
	import '../global.css';
	let { children } = $props();
</script>

{@render children()}
