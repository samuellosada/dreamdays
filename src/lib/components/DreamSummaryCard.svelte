<script>
    import { dreams } from '$lib/stores';

    let circleSize = 'w-12 h-12';
</script>
<div
    class=" p-6 h-full xl:h-[80%] min-w-[85%] md:min-w-[60%] xl:min-w-[45%] mr-6 rounded-3xl shadow-lg 
    transition-colors snap-center bg-black-900
    flex flex-col justify-center"> 
    {#snippet dreamRow(dream)}
        <div class="flex flex-row justify-center">
            <span class="text-2xl leading-none mx-2 font-light pt-3">{dream.streakCount}</span>
            <div class="{circleSize} rounded-full" style:background-color={dream.color}></div>
            <div class="{circleSize} rounded-full" style:background-color={dream.color}></div>
            <div class="{circleSize} rounded-full" style:background-color={dream.color}></div>
            <div class="{circleSize} rounded-full" style:background-color={dream.color}></div>
            <div class="{circleSize} rounded-full" style:background-color={dream.color}></div>
            <div class="{circleSize} rounded-full" style:background-color={dream.color}></div>
            <div class="{circleSize} rounded-full" style:background-color={dream.color}></div>
        </div>
    {/snippet}
     
    {#each $dreams as dream}
        {@render dreamRow(dream)}
    {/each}
</div>
