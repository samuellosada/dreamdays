<script>
    let { color =  $bindable() } = $props();
</script>

<!-- This component needs colour to be passed back to the deamcard to be saved. but the initial colour must also be passed -->
 <!-- it needs to be passed because it will be used to both make new dreams and edit existing that already have a chosen dream -->
<!-- svelte-ignore a11y_consider_explicit_label -->
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