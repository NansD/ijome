<script lang="ts">
   import { useQuery, useMutation } from '@sveltestack/svelte-query'
   import { getDailyChallenge } from './api/getDailyChallenge'
  import { submitAnswer } from './api/submitAnswer';

   const queryResult = useQuery('todos', getDailyChallenge)
   const mutation = useMutation(submitAnswer)

   let guess: string = '';
   function handleSubmit(event) {
    $mutation.mutate({ answer: guess });
   }
</script>

<style>
  div {
    font-size: 20px;
  }
</style>
<div>
  Challenge du jour :
  {$queryResult.data?.challenge}
  <form on:submit|preventDefault={handleSubmit}>
    <input name="guess" bind:value={guess}>
  </form>
  {#if $mutation.isSuccess}
    {#if $mutation.data?.correct}
      <div>Succès ✅</div>
      {:else}
      <div>Loupé 🔴</div>
    {/if}
  {/if}
</div>
