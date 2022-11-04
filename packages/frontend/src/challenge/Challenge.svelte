<script>
   import { useQuery } from '@sveltestack/svelte-query'
   import { getDailyChallenge } from './getDailyChallenge'
   const queryResult = useQuery('todos', getDailyChallenge)
</script>

<style>
  div {
    font-size: 20px;
  }
</style>
<div>
  Challenge du jour :
  {$queryResult.data?.challenge}
</div>
