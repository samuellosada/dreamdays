<script>
    import { dreams } from '$lib/stores';
    import { getYearProgress, getRandomQuote } from '$lib/utils';
    
    $: totalStreaks = $dreams.reduce((acc, dream) => acc + dream.streakCount, 0);
    $: totalDaysWithStreaks = new Set(
        $dreams.flatMap(dream => 
            dream.streakCount
        )
    ).size;

    $: currentDate = new Date().toLocaleDateString('en-GB', {
        
        year: '2-digit',
        month: '2-digit',
        day: '2-digit'
    }).replace(/\//g, ' ');;
</script>

<header class="p-6">
    <div class="text-right">
        <h1 class="text-4xl font-bold mb-1">DREAMDAYS</h1>
        <!-- Automatic srolling when quote overflows (real nice smooth and cool) -->
        <p class="text-2xl font-extralight truncate text-clip mb-3">{getRandomQuote()}</p>
        <div class="flex justify-between items-start">
            <div class="text-5xl font-light self-end">
                {currentDate}
            </div>
            <div class="leading-tight text-2xl font-extralight">
                <p>{totalStreaks}</p>
                <!-- Will need to adjust to calculate number of days where a dream was ticked in the year -->
                <p>{totalDaysWithStreaks}/365</p>
                <!-- Same as above but for weeks - this one can be changed -->
                <p>{getYearProgress()}</p>
            </div>
        </div>
    </div>
</header>