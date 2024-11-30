<script>
    import { dreams } from '$lib/stores';
    import DreamCard from './DreamCard.svelte';
    
    let description = '';
    let color = '#6366f1';
    
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

    function handleSubmit() {
        const newDream = {
            id: crypto.randomUUID(),
            description,
            color,
            streakCount: 0,
            lastUpdated: '',
            dailyProgress: []
        };
        
        dreams.update(currentDreams => [...currentDreams, newDream]);
        description = '';
        color = '#6366f1';
    }
</script>

<div class="grid gap-4 p-4">
    

    {#each $dreams as dream (dream.id)}
        <DreamCard
            {dream}
            on:updateStreak={handleUpdateStreak}
            on:edit
            on:changeColor
        />
    {/each}

    <div class="p-6 rounded-lg shadow-lg bg-gray-900">
        <h3 class="text-xl font-semibold mb-4">Add New Dream</h3>
        <form on:submit|preventDefault={handleSubmit} class="space-y-4">
            <div>
                <label for="description" class="block text-sm font-medium mb-2">
                    What's your dream?
                </label>
                <textarea
                    id="description"
                    bind:value={description}
                    class="w-full px-3 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    rows="4"
                    required
                ></textarea>
            </div>
            
            <div>
                <label for="color" class="block text-sm font-medium mb-2">
                    Choose a color
                </label>
                <input
                    type="color"
                    id="color"
                    bind:value={color}
                    class="w-full h-12 rounded-lg cursor-pointer"
                />
            </div>
            
            <button
                type="submit"
                class="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
                Add Dream
            </button>
        </form>
    </div>
</div>