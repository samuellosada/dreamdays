<script>
    import { dreams } from '$lib/stores';

    // WHAT TIME IS THE STREAK BEING RESET AT? 
    // Finish the Editing mode. 
    // submit edited changes
    // allow user to change the color of the dream.

    //BUGS
    // When editing, if text is longer, it overflows the card.

    let props = $props();
    let dream = props.dream

    const today = new Date().toISOString().split('T')[0];
    let dreamLastUpdate = $state(dream.lastUpdated)

    let streak = $state(dream.streakCount);
    let isMarkedToday = $derived(dreamLastUpdate === today);

    let isEditing = $state(false)

    function handleUpdate() {
        dreams.update(currentDreams => 
            currentDreams.map(currentDream => {
                if (currentDream.id === dream.id) {
                    return {
                        ...currentDream,
                        description: currentDream.description
                    };  
                }
                return currentDream;
            })
        );
        cancelEditing();
    }

    function updateStreak() {
        if (!isMarkedToday) {
            dreams.update(currentDreams => 
                currentDreams.map(currentDream => {
                    if (currentDream.id === dream.id) {
                        dreamLastUpdate = today;
                        streak = currentDream.streakCount + 1;
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

    function handleDelete() {
        cancelEditing;
        dreams.update(currentDreams => currentDreams.filter(currentDream => currentDream.id !== dream.id));
    }

    function startEditing() {
        isEditing = true; 
    }

    function cancelEditing() {
        isEditing = false;
    }

//ENSURE YOU MAKE AN ALTERNATIVE FOR DOUBLE CLICK ON MOBILE AT LEAST?! LONG HOLD?
</script>
<!-- svelte-ignore a11y_no_static_element_interactions -->
{#if !isEditing}
    <div
        style:background-color={isMarkedToday ? dream.color : 'bg-slate-50 text-slate-950'}
        class="text-slate-950 
        p-6 h-full xl:h-[80%] min-w-[85%] md:min-w-[60%] xl:min-w-[45%] mr-6 rounded-3xl shadow-lg transition-colors 
        snap-center bg-slate-50 text-slate-950'"
        ondblclick={updateStreak}
    >   
        <!-- Text pushes all elements down if it is bigger than a certain amount. -->
        <h3 class="text-4xl min-h-[90%] xl:min-h-[88%] font-semibold leading-10 mb-4">{dream.description}</h3>
        <div class="flex justify-between items-center">
            <div class="flex gap-2">
                <button
                    onclick={startEditing}
                    class="mx-2 bg-opacity-30 rounded hover:bg-opacity-40 transition-colors"
                >
                <span class="material-symbols-outlined">edit</span>
                </button>
            </div>
            <div>
                <button type="button"
                onclick={updateStreak}
                class="text-4xl leading-none mx-2 font-light">
                {streak}
                </button>
            </div>
        </div>
    </div>
{:else}
    <div
        class="text-slate-950 
        p-6 h-full xl:h-[80%] min-w-[85%] md:min-w-[60%] xl:min-w-[45%] mr-6 rounded-3xl shadow-lg transition-colors 
        snap-center bg-slate-50 text-slate-950"
    >  
    <!-- FOR SOME REASON I CAN STILL SEE A BORDER WHEN THE TEXT AREA IS FOCUSED. -->
        <textarea
            bind:value={dream.description}
            class="w-full min-h-[90%] xl:min-h-[88%] p-0 text-4xl font-semibold leading-10 border-0 focus:border-transparent focus:border-0 focus:border-none focus:outline-none resize-none bg-slate-50"
            placeholder={dream.description}
            required="true"
        >
        {dream.description}
        </textarea>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <div class="flex justify-between items-center">
            <button type="button" class=""
            onclick={() => {handleDelete()}}>Delete</button>
            </div>

            <button
            type="button"
            class="flex gap-2 font-medium hover:opacity-70 transition-opacity"
            onclick={cancelEditing}>Cancel</button>

            <button
            type="button"
            class="flex gap-2 font-medium hover:opacity-70 transition-opacity"
            onclick={handleUpdate}>Confirm</button>


    </div>
{/if}


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