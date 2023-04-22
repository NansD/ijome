<script>
  export let textToShow = 'Click me';
  export let showText = false;
  export let onClick = () => {}
</script>

{#if showText}
  <p style="font-size: 16px; color: #545454;">{textToShow}</p>
{:else}
  <button on:click={onClick} style="background-color: #F7B2A6; border: none; border-radius: 4px; color: #FFFFFF; padding: 12px 16px;">Obtenir l'indice</button>
{/if}