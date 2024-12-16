<script>
    import { dreams } from '$lib/stores';
    import DreamCard from './DreamCard.svelte';
    import NewDreamCard from './NewDreamCard.svelte';
</script>

<div class="flex overflow-x-auto scroll-smooth overscroll-x-none h-full p-4">
    <!-- Iterates to render dreamcards -->
    {#each $dreams as dream (dream.id)}
        <DreamCard {dream} />
    {/each}

    <NewDreamCard />
</div>