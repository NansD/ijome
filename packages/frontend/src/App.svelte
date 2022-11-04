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

		<div class="flex justify-content-center align-items-center gap-1 padding-1" style="flex-wrap: wrap">
			<h1>Ijome {emoji}</h1>
			<p>Devinez des concepts à partir d'émojis!</p>
		</div>
		<Challenge />
	</QueryClientProvider>

</main>

<style global>
	:root {
		--background: #fef6e4;
		--text: #001858;
		--primary: #f582ae;
		--primary-lighter: #fce0eb;
		--background-darker: #f3d2c1;
		--border-radius: 5px;
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
	input[type=text] {
		border: 3px solid var(--text);
		border-radius: var(--border-radius);
		font-size: 28px;
		color: var(--text);
	}

	input[type=text]:focus {
		box-shadow: 0 5px 15px -10px rgb(31 18 53 / 60%);
	}

	button {
		padding: 0.9rem 2rem;
		border-radius: var(--border-radius);
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
		color: var(--text);
	}

	button.primary {
		background-color: var(--primary);
		font-size: 28px;
		border: 0;
	}

	button:disabled {
		cursor: not-allowed;
		background-color: var(--primary-lighter);
	}

	button:hover:not([disabled]) {
		box-shadow: 0 5px 15px -10px rgb(31 18 53 / 60%);
	}

	.bg-darker {
		background-color: var(--background-darker);
	}

	.bg-ligher {
		background-color: var(--background);
	}

	.padding-1 {
		padding: 1rem;
	}

	.border-radius {
		border-radius: var(--border-radius);
	}

	.flex {
  	display: flex;
	}
	
	.gap-1 {
		gap: 1rem;
	}

	.flex-row {
  	display: flex;
		flex-direction: row;
	}

	.flex-column {
  	display: flex;
		flex-direction: column;
	}
	.align-items-center {
	 align-items: center;
}
 .align-items-start {
	 align-items: flex-start;
}
 .align-items-end {
	 align-items: flex-end;
}
 .align-items-baseline {
	 align-items: baseline;
}
 .justify-content-center {
	 justify-content: center;
}
 .justify-content-start {
	 justify-content: flex-start;
}
 .justify-content-end {
	 justify-content: flex-end;
}
 .justify-content-space-around {
	 justify-content: space-around;
}
 .justify-content-space-between {
	 justify-content: space-between;
}
 .justify-content-space-evenly {
	 justify-content: space-evenly;
}

.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
}
@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

.skeleton-text {
  width: 50%;
  height: 2rem;
  margin: 2rem 0;
  border-radius: 0.25rem;
}
.skeleton-img {
	width: 3rem;
	height: 3rem;
  margin-bottom: 0.5rem;
	border-radius: 100px;
}
	
</style>
