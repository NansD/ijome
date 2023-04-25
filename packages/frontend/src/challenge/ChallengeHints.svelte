<script lang="ts">
  import type { ChallengeDTO } from '@ijome/common';
  import DisappearingButton from './DisappearingButton.svelte';

  export let challengeData: ChallengeDTO;

  const today = new Date().toDateString();
  const hintsLocalStorageKey = `hints-of-${today}`;
  $: hints =
    JSON.parse(localStorage.getItem(hintsLocalStorageKey)) ||
    [
      challengeData?.theme,
      ...(challengeData?.subThemes?.map((t) => t.theme) || []),
    ].map((theme) => ({ theme, show: false }));
  $: localStorage.setItem(hintsLocalStorageKey, JSON.stringify(hints));
</script>

<div class="hint" style="width: 100%">
  Indice(s) :
  <div class="flex flex-column padding-1">
    {#each hints as hint, index}
      <div
        class="flex align-items-center"
        style="height: 3rem; font-size:1.5rem"
      >
        #{index + 1} &nbsp;
        {#if hint.show}
          {hint.theme}
        {:else}
          <DisappearingButton
            onClick={() => (hint.show = true)}
            showText={hint.show}
            textToShow={hint.theme}
          />
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .hint {
    margin-top: 3rem;
    font-size: 20px;
    text-align: left;
  }
</style>
