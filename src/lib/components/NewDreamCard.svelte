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

<div class="p-6 h-full xl:h-[80%] min-w-[85%] md:min-w-[60%] xl:min-w-[45%] mr-6 rounded-lg shadow-lg">
    <h3 class="text-4xl font-semibold mb-4">New Dream</h3>
    <p>It’s better to have failed at something, then to have won at nothing.</p>
    <form on:submit|preventDefault={handleSubmit} class="space-y-4">
        <div>
            <textarea
                id="description"
                bind:value={description}
                class="w-full px-3 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                rows="4"
                required
            ></textarea>
        </div>
        
        <div>
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