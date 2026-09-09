<script>
	export const prerender = true;
</script>

<div class="container">
	<h1>bald felix</h1>
	<div class="image-wrapper">
		<img src="/felix.jpg" alt="bald felix from stray kids" />
	</div>
	<p class="caption">lee felix. no hair. still ate.</p>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 80vh;
		gap: 1.5rem;
		padding: 2rem;
	}

	h1 {
		font-size: 3rem;
		font-weight: 900;
		letter-spacing: -0.02em;
		margin: 0;
		text-transform: lowercase;
	}

	.image-wrapper {
		max-width: 480px;
		width: 100%;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
	}

	img {
		width: 100%;
		height: auto;
		display: block;
	}

	.caption {
		font-size: 1rem;
		opacity: 0.6;
		margin: 0;
		font-style: italic;
	}
</style>
