<script lang="ts">
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query'
  import emojis from 'emojis-list'
  import Challenge from './challenge/Challenge.svelte';
	// pick a random emoji
	const emoji = emojis[Math.floor(Math.random()*emojis.length)];
	const queryClient = new QueryClient();
</script>

<main>
	<QueryClientProvider client={queryClient}>

		<h1>Ijome {emoji}</h1>
		<p>Devinez des concepts à partir d'émojis!</p>
		<Challenge />
	</QueryClientProvider>

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
