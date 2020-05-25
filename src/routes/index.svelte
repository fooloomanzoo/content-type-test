<style>
	h1 {
		font-size: 2.8em;
		font-weight: 700;
		text-transform: uppercase;
		text-align: center;
		margin: 0.5em 0;
		flex: 0 0 auto;
	}

	.container {
		display: flex;
		flex-flow: row wrap;
		width: 100%;
	}

	.entry {
		display: flex;
		flex-flow: column;
		flex: 1 1 25%;
		min-width: 400px;
		box-sizing: border-box;
		padding: 1em;
	}

	.content {
		width: 100%;
		min-height: 300px;
		flex: 1 1 auto;
	}
</style>

<script>
	import { currentSrc } from '../stores/store.js';
</script>

<svelte:head>
	<title>Response Tests</title>
</svelte:head>


<div class="container">
	<div class="entry">
		<h1>{"<img>"}</h1>
		<img class="content" alt={$currentSrc} src={$currentSrc}>
	</div>
	<div class="entry">
		<h1>{"<embed>"}</h1>
		<embed class="content" alt={$currentSrc} src={$currentSrc}>
	</div>
	<div class="entry">
		<h1>{"<object>"}</h1>
		<object class="content" title={$currentSrc} data={$currentSrc}>
	</div>
	<div class="entry">
		<h1>{"<iframe>"}</h1>
		<iframe class="content" title={$currentSrc} src={$currentSrc}>
	</div>
</div>
