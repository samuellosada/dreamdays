<script>
    import { dreams } from '$lib/stores';
    import { getYearProgress, getRandomQuote } from '$lib/utils';
    
    $: totalStreaks = $dreams.reduce((acc, dream) => acc + dream.streakCount, 0);
    $: totalDaysWithStreaks = new Set(
        $dreams.flatMap(dream => 
            dream.dailyProgress
                .filter(progress => progress.completed)
                .map(progress => progress.date)
        )
    ).size;

    $: currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
</script>

<header class="p-6 flex justify-between items-start">
    <div class="text-3xl font-bold">
        {currentDate}
    </div>
    <div class="text-right">
        <h1 class="text-4xl font-bold mb-4">DREAMDAYS</h1>
        <p class="text-xl italic mb-6">"{getRandomQuote()}"</p>
        <div class="space-y-2 text-sm">
            <p>Total Streaks: {totalStreaks}</p>
            <p>Days with Progress: {totalDaysWithStreaks}</p>
            <p>Year Progress: {getYearProgress()}%</p>
        </div>
    </div>
</header>