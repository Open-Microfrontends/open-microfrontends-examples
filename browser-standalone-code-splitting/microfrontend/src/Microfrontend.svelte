<script lang="ts">
    const {welcomeMessage}: {welcomeMessage: string} = $props();
    let showLazyComponent = $state(false);
</script>

<div class="Microfrontend">
    <h3>{welcomeMessage}</h3>
    {#if showLazyComponent}
        {#await import('./LazyComponent.svelte') then LazyComponent}
            <LazyComponent.default />
        {/await}
    {/if}
    <button onclick={() => showLazyComponent = true}>Load component</button>
</div>

<style>
    .Microfrontend {
        margin: 20px;
    }
</style>
