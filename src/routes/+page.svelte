<script>
    import DreamsList from '$lib/components/DreamsList.svelte';
    
    let showAddDream = false;
</script>

<div class="p-4">
  
    
    {#if showAddDream}
        <div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
            <div class="bg-gray-900 rounded-lg max-w-md w-full">
                <AddDreamForm on:close={() => showAddDream = false} />
            </div>
        </div>
    {/if}
    
    <DreamsList />
</div>