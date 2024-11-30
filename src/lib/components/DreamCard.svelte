<script>
    import { createEventDispatcher } from 'svelte';
    
    export let dream;
    const dispatch = createEventDispatcher();
    
    const today = new Date().toISOString().split('T')[0];
    $: isMarkedToday = dream.lastUpdated === today;
    
    function updateStreak() {
        if (!isMarkedToday) {
            dispatch('updateStreak', { dreamId: dream.id });
        }
    }
</script>

<div 
    class="p-6 rounded-lg shadow-lg transition-colors"
    style="background-color: {isMarkedToday ? dream.color : '#374151'}"
>
    <h3 class="text-4xl font-semibold mb-4">{dream.description}</h3>
    <div class="flex justify-between items-center">
        <div>
            <span class="text-sm opacity-80">Current Streak:</span>
            <span class="ml-2 font-bold">{dream.streakCount} days</span>
        </div>
        <div class="flex gap-2">
            <button
                on:click={() => dispatch('edit', { dreamId: dream.id })}
                class="px-3 py-1 bg-black bg-opacity-30 rounded hover:bg-opacity-40 transition-colors"
            >
                Edit
            </button>
            <button
                on:click={updateStreak}
                class="px-3 py-1 bg-black bg-opacity-30 rounded hover:bg-opacity-40 transition-colors"
                disabled={isMarkedToday}
            >
                {isMarkedToday ? 'Marked' : 'Mark Progress'}
            </button>
        </div>
    </div>
</div>