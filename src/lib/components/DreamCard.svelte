<script>
    import { createEventDispatcher } from 'svelte';
    import { dreams } from '$lib/stores';

    export let dream;
    const dispatch = createEventDispatcher();
    
    const today = new Date().toISOString().split('T')[0];
    $: isMarkedToday = dream.lastUpdated === today;
    
    function updateStreak() {
        if (!isMarkedToday) {
            dispatch('updateStreak', { dreamId: dream.id });
        }
    }

    function UpdateCompletion(){
        if(!isMarkedToday){
            console.log(dream.id, dreams.id);
        //     dreams.update(currentDreams => 
        //     currentDreams.map(dream => {
        //         if (dream.id === dreamId) {
        //             const today = new Date().toISOString().split('T')[0];
        //             return {
        //                 ...dream,
        //                 streakCount: dream.streakCount + 1,
        //                 lastUpdated: today,
        //                 dailyProgress: [...dream.dailyProgress, { date: today, completed: true }]
        //             };  
        //         }
        //         return dream;
        //     })
        // );
        }
    }
</script>

<!-- TO DO -->
 <!-- Add marking complete feature - streak goes up and colour changes -->
  <!-- Add card editing - can then delete card, edit description or change color -->

<div
    class="text-slate-950 
    p-6 h-full xl:h-[80%] min-w-[85%] md:min-w-[60%] xl:min-w-[45%] mr-6 rounded-lg shadow-lg transition-colors 
    snap-center
     { isMarkedToday ? dream.color : 'bg-slate-50'}">
    <h3 class="text-4xl min-h-[90%] xl:min-h-[88%] font-semibold leading-10 mb-4">{dream.description}</h3>
    <div class="flex justify-between items-center">
        <div class="flex gap-2">
            <button
                on:click={() => dispatch('edit', { dreamId: dream.id })}
                class="mx-2 bg-opacity-30 rounded hover:bg-opacity-40 transition-colors"
            >
            <span class="material-symbols-outlined">edit</span>
            </button>
        </div>
        <div>
            <button type="button"
            on:click={UpdateCompletion}
            class="text-4xl leading-none mx-2 font-light">
            {dream.streakCount}
            </button>
        </div>
    </div>
</div>

<style>
.material-symbols-outlined:hover {
    font-variation-settings: 'wght' 900;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}

@media screen and (min-width: 601px) {
    .material-symbols-outlined {
    font-size: 36px;
  }
}

@media screen and (max-width: 600px) {
    .material-symbols-outlined {
    font-size: 24px;
  }
}
</style>