<script>
	export let open = false;
</script>

<input type="checkbox" id="toggler" class="toggler" bind:checked={open} />
<label for="toggler" class="hamburger">
	<div class="top-bun" />
	<div class="meat" />
	<div class="bottom-bun" />
</label>

<style>
	.hamburger {
		z-index: 5;
		cursor: pointer;
	}

	.hamburger div {
		position: relative;
		width: 2em;
		height: 5px;
		border-radius: 3px;
		background-color: var(--dark-bg-color);
		margin-top: 6px;
		transition: transform 0.3s ease-in-out;
		margin: 6px 6px 0 6px;
	}
	#toggler {
		position: absolute;
		right: 1em;
		top: 2em;
		opacity: 0;
	}
	#toggler:checked + .hamburger .top-bun {
		transform: rotate(-45deg);
		margin-top: 25px;
	}
	#toggler:checked + .hamburger .bottom-bun {
		opacity: 0;
		transform: rotate(45deg);
	}
	#toggler:checked + .hamburger .meat {
		transform: rotate(45deg);
		margin-top: -5px;
	}
</style>
