<script lang="ts">
  import { useQuery, useMutation } from '@sveltestack/svelte-query';
  import { Confetti } from 'svelte-confetti';
  import { onMount } from 'svelte';
  import { getDailyChallenge } from './api/getDailyChallenge';
  import { submitAnswer } from './api/submitAnswer';

  type Try = {
    answer: string;
    success: boolean;
  };
  let tries: Try[] = [];
  $: disabled =
    !answer || tries.some((tentative) => tentative.answer === answer);
  const queryResult = useQuery('todos', getDailyChallenge);
  $: document.title = `Ijome - ${$queryResult.data?.challenge}`
  const mutation = useMutation(submitAnswer, {
    onError() {
      tries.push({ answer, success: false });
      tries = tries;
    },
    onSuccess(data, variables) {
      tries.push({ answer: variables.answer, success: data.correct });
      tries = tries;
    },
  });

  $: isCorrect = tries.some(tentative => tentative.success);

  let answer: string = '';
  let ref: HTMLInputElement;
  onMount(() => {
    ref.focus();
  });
  function handleSubmit(event) {
    $mutation.mutate({ answer });
  }
</script>

<div
  class="bg-darker padding-1 flex-column justify-content-center align-items-center gap-1" style="padding-top: 112px;"
>
  <div class="challenge-card">
    <h2>Challenge du jour</h2>
    {$queryResult.data?.challenge}
  </div>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="answer">Réponse:</label>
    <input
      type="text"
      name="answer"
      bind:value={answer}
      bind:this={ref}
      class:success={isCorrect}
      class:error={!isCorrect}
      enterkeyhint="send"
    />
    <button class="primary" type="submit" {disabled}> Soumettre </button>
    {#if isCorrect}
    <div style="width: 100%" class="flex-column align-items-center">
      <!-- https://mitcheljager.github.io/svelte-confetti/ -->
      <Confetti amount=200 x={[-0.5, 0.5]} delay={[0, 250]}  />
      <Confetti amount=100 x={[-0.75, -0.3]} y={[0.15, 0.75]}  delay={[0, 1000]} />
      <Confetti amount=100 x={[0.3, 0.75]} y={[0.15, 0.75]}  delay={[0, 1000]} />
      <p style="justify-self:flex-start"> Félicitations 🥳 ! On se retrouve demain pour la prochaine partie !</p>
    </div>
    {/if}
  </form>
</div>
<div
  class="bg-lighter padding-1 flex-column justify-content-center align-items-center gap-1"
>
  {#each tries as tentative, index}
    <div
      class="flex-row align-items-center gap-1 justify-content-space-between tentative"
    >
      <span>
        #{index + 1}
      </span>
      <span>
        {tentative.answer}
      </span>
      {#if tentative.success}
        <p>Succès ✅</p>
      {:else}
        <p>Loupé ❌</p>
      {/if}
    </div>
  {/each}
</div>

<style>
  .challenge-card {
    background-color: var(--background);
    border-radius: var(--border-radius);
    font-size: 3rem;
    text-align: center;
    padding: 2.5rem;
    width: 80vw;
  }

  h2 {
    font-size: 2rem;
    text-align: left;
    margin-bottom: 2rem;
  }
  .tentative {
    border: 3px solid var(--text);
    border-radius: var(--border-radius);
    padding: 0 1rem;
    width: 80vw;
  }

  @media(min-width: 992px) {
    .challenge-card {
      width: 50vw;
    }
    .tentative {
      width: 50vw;
    }
  }
</style>
