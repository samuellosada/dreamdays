<script>
import { fly } from 'svelte/transition';
import { dreams } from '$lib/stores';

let description = $state('');
let color = $state('#6366f1');

let currentStep = $state(0);

const today = new Date().toISOString().split('T')[0];

function handleSubmit() {
    const newDream = {
        id: crypto.randomUUID(),
        description,
        color,
        streakCount: 0,
        lastUpdated: null,
    };
    
    dreams.update(currentDreams => [...currentDreams, newDream]);
    resetForm();
}

function resetForm() {
    description = '';
    color = '#6366f1';
    currentStep = 0;
}

function nextStep() {
    if (currentStep < 2) {
        currentStep++;
    } else {
        handleSubmit();
    }
}
function previousStep() {
    if (currentStep > 0) {
        currentStep--;
    }
}
function isStepValid() {
    if (currentStep === 1 && !description.trim()) return false;
    return true;
}

</script>
<!-- svelte-ignore a11y_consider_explicit_label -->
<div class="p-8 h-full xl:h-[80%] min-w-[85%] md:min-w-[60%] xl:min-w-[45%] mr-6 rounded-3xl bg-white text-black">
    {#if currentStep === 0}
        <div class="space-y-4" in:fly={{ y: 50, duration: 400 }}>
            <h1 class="text-6xl font-bold mb-4">NEW<br>DREAM</h1>
            <p class="text-xl mb-8">It's better to have failed at something,<br>then to have won at nothing.</p>
            <div class="flex justify-start">
                <button 
                    type="button" 
                    style="background-color: #3B82F6"
                    class="p-4 w-16 h-16 rounded-full hover:bg-emerald-600 transition-colors flex items-center justify-center"
                    onclick={() => nextStep()}
                >
                    <span class="material-symbols-outlined text-white text-3xl">
                        add
                    </span>
                </button>
            </div>
        </div>
    {:else if currentStep === 1}
        <div class="space-y-6" in:fly={{ y: 50, duration: 400 }}>
            <h1 class="text-6xl font-bold">MY DREAM<br>IS...</h1>
            <textarea
                id="description"
                bind:value={description}
                class="w-full p-4 mt-8 h-40 text-xl border-2 border-black rounded-xl focus:outline-none focus:border-black resize-none"
                placeholder="Type your dream here..."
                required
            ></textarea>
            <div class="flex justify-between mt-8 text-xl">
                <button
                    type="button"
                    class="font-medium hover:opacity-70 transition-opacity"
                    onclick={() => previousStep()}
                >
                    Cancel
                </button>
                <button
                    type="button"
                    class="font-medium hover:opacity-70 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    onclick={nextStep}
                    disabled={!isStepValid()}
                >
                    Confirm
                </button>
            </div>
        </div>
    {:else if currentStep === 2}
        <div class="space-y-6" in:fly={{ y: 50, duration: 400 }}>
            <h1 class="text-6xl font-bold">MY DREAM<br>IS GIVING...</h1>
            <div class="grid grid-cols-4 gap-4 mt-8">
                <button 
                    class="w-16 h-16 rounded-full bg-blue-500 hover:opacity-80 transition-opacity"
                    onclick={() => color = '#3B82F6'}
                ></button>
                <button 
                    class="w-16 h-16 rounded-full bg-emerald-500 hover:opacity-80 transition-opacity"
                    onclick={() => color = '#10B981'}
                ></button>
                <button 
                    class="w-16 h-16 rounded-full bg-red-500 hover:opacity-80 transition-opacity"
                    onclick={() => color = '#EF4444'}
                ></button>
                <button 
                    class="w-16 h-16 rounded-full bg-yellow-500 hover:opacity-80 transition-opacity"
                    onclick={() => color = '#F59E0B'}
                ></button>
                <button 
                    class="w-16 h-16 rounded-full bg-indigo-500 hover:opacity-80 transition-opacity"
                    onclick={() => color = '#6366F1'}
                ></button>
                <button 
                    class="w-16 h-16 rounded-full bg-orange-500 hover:opacity-80 transition-opacity"
                    onclick={() => color = '#F97316'}
                ></button>
                <button 
                    class="w-16 h-16 rounded-full bg-pink-500 hover:opacity-80 transition-opacity"
                    onclick={() => color = '#EC4899'}
                ></button>
            </div>
            <div class="flex justify-between mt-8 text-xl">
                <button
                    type="button"
                    class="font-medium hover:opacity-70 transition-opacity"
                    onclick={() => previousStep()}
                >
                    Back
                </button>
                <button
                    type="button"
                    class="font-medium hover:opacity-70 transition-opacity"
                    onclick={nextStep}
                >
                    Create
                </button>
            </div>
        </div>
    {/if}
</div>

<style>
    .material-symbols-outlined {
      font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24
    }
</style>