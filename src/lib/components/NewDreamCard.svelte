<script>
import { dreams } from '$lib/stores';

let description = '';
let color = '#6366f1';

function handleSubmit() {
        const newDream = {
            id: crypto.randomUUID(),
            description,
            color,
            streakCount: 0,
            lastUpdated: '',
        };
        
        dreams.update(currentDreams => [...currentDreams, newDream]);
        description = '';
        color = '#6366f1';
    }

</script>

<div class="p-6 rounded-lg shadow-lg bg-gray-900">
    <h3 class="text-xl font-semibold mb-4">New Dream</h3>
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