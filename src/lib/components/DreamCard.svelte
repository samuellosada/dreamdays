<script>
    import { dreams } from '$lib/stores';

    export let dream;
    
    const today = new Date().toISOString().split('T')[0];
    $: isMarkedToday = dream.lastUpdated === today;
    
    //This changes the colour of the card when marked for the day.
    $: cardColour = isMarkedToday ? dream.color : 'bg-slate-50 text-slate-950';

    function updateDream() {
        if (!isMarkedToday) {
            dreams.update(currentDreams => 
                currentDreams.map(currentDream => {
                    console.log(currentDream.color);
                    if (currentDream.id === dream.id) {
                        return {
                            ...currentDream,
                            streakCount: currentDream.streakCount + 1,
                            lastUpdated: today,
                        };  
                    }
                    return currentDream;
                })
            );
        }
    }  

//ENSURE YOU MAKE AN ALTERNATIVE FOR DOUBLE CLICK ON MOBILE AT LEAST?! LONG HOLD?
</script>
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    style:background-color={cardColour}
    class="text-slate-950 
    p-6 h-full xl:h-[80%] min-w-[85%] md:min-w-[60%] xl:min-w-[45%] mr-6 rounded-3xl shadow-lg transition-colors 
    snap-center bg-slate-50 text-slate-950'"
    on:dblclick={updateDream}
>
    <h3 class="text-4xl min-h-[90%] xl:min-h-[88%] font-semibold leading-10 mb-4">{dream.description}</h3>
    <div class="flex justify-between items-center">
        <div class="flex gap-2">
            <button
                on:click={() => console.log('editing')}
                class="mx-2 bg-opacity-30 rounded hover:bg-opacity-40 transition-colors"
            >
            <span class="material-symbols-outlined">edit</span>
            </button>
        </div>
        <div>
            <button type="button"
            on:click={updateDream}
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