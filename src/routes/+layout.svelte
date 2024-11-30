<script>
    import "../app.pcss";
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<div class="min-h-screen flex flex-col h-screen">
    <Header />
    <main class="flex-1 container mx-auto overflow-y-auto">
        <slot />
    </main>
    <Footer />
</div>