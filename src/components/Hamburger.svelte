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
		top: 4em;
		right: 2em;
		margin-left: -2em;
		margin-top: -45px;
		width: 2em;
		height: 45px;
		z-index: 2;
		cursor: pointer;
	}

	.hamburger div {
		position: relative;
		width: 3em;
		height: 7px;
		border-radius: 3px;
		background-color: #ab3516;
		margin-top: 8px;
		transition: transform 0.3s ease-in-out;
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
		margin-top: -7px;
	}
</style>
