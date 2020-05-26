<script>
	import { currentSrc, sources, options } from '../stores/store.js';

  let form;
  let selectedType = options[0].value;

  async function handleSubmit() {
    const response = await fetch('/contentType', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type: selectedType })
    });
    resetSource();
  }

  function resetSource() {
    // reset src to reload
    let selectedSrc;
    currentSrc.update(s => {
      selectedSrc = s;
      return ''
    });
    
    setTimeout(() => {
      currentSrc.set(selectedSrc);
    }, 500);
  }
</script>

<style>
  nav {
    display: flex;
    flex-flow: row nowrap;
    border-bottom: 1px solid rgba(240, 16, 128, 0.1);
    padding: 1em 2em;
  }

  select {
    display: inline-block;
    appearance: none;
    height: 2.5em;
    font-family: inherit;
    font-size: inherit;
    padding: 0 0.5em;
    margin: 0 1em;
    border-radius: 0.3em;
    cursor: pointer;
  }
</style>

<nav>
  <form bind:this={form} method="POST" on:submit|preventDefault={handleSubmit}>

    <select bind:value={selectedType} on:change={() => form.requestSubmit()}>
      {#each options as o}
        <option value={o.value}>{o.text}</option>
      {/each}
    </select>

  </form>

  <select bind:value={$currentSrc}>
    {#each sources as s}
      <option value={s.value}>{s.text}</option>
    {/each}
  </select>
</nav>
