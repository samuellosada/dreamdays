<script>
    import "../app.pcss";
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();
</script>

<div class="min-h-screen flex flex-col h-screen">
    <Header />
    <main class="flex-1 container m-auto overflow-y-auto">
        {@render children?.()}
    </main>
    <Footer />
</div>