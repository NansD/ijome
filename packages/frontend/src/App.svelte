<script lang="ts">
  import emojis from 'emojis-list'
	// pick a random emoji
	const emoji = emojis[Math.floor(Math.random()*emojis.length)];
</script>

<main>
	<h1>Ijome {emoji}</h1>
	<p>Devinez des concepts à partir d'émojis!</p>
</main>

<style global>
	:root {
		--background: #fef6e4;
		--text: #001858;
		--primary: #f582ae;
		--background-darker: #f3d2c1;
	}
	body {
		background-color: var(--background);
		font-size: 15px;
		font-family: proxima-nova, sans-serif;
		color: var(--text);
	}
	h1 {
		font-size: 56px;
		font-weight: 700;
	}
	p {
		font-size: 20px;
	}
</style>
