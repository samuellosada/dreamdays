<script>
    import { dreams } from '$lib/stores';
	import AddDreamCard from './AddDreamCard.svelte';
    import DreamCard from './DreamCard.svelte';
    
    
    function handleUpdateStreak(event) {
        const dreamId = event.detail.dreamId;
        dreams.update(currentDreams => 
            currentDreams.map(dream => {
                if (dream.id === dreamId) {
                    const today = new Date().toISOString().split('T')[0];
                    return {
                        ...dream,
                        streakCount: dream.streakCount + 1,
                        lastUpdated: today,
                        dailyProgress: [...dream.dailyProgress, { date: today, completed: true }]
                    };  
                }
                return dream;
            })
        );
    }
</script>

<div class="grid gap-4 p-4">
    

    <!-- Iterates to render dreamcards -->
    {#each $dreams as dream (dream.id)}
        <DreamCard
            {dream}
            on:updateStreak={handleUpdateStreak}
            on:edit
            on:changeColor
        />
    {/each}

    <AddDreamCard />
    <!-- ADDITIONAL CARDS: -->
    <!-- Add Dream Card -->
    
</div>