<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="min-h-screen flex flex-col">
    <header class="bg-surface shadow-glow-primary py-6">
        <div class="container mx-auto text-center">
            <h1 class="text-4xl font-header text-primary">Realm of Infinite Madness</h1>
            <p class="text-secondary text-lg mt-2">My thoughts on everything.</p>
        </div>
    </header>

    <main class="container mx-auto py-10 px-4 flex-1">
        {@render children()}
    </main>

    <footer class="bg-surface py-4 text-center mt-10 text-gray-500">
        <p class="mb-1">Realm of Infinite Madness</p>
        <p class="mb-1"><a class="hover:text-gray-400" href="mailto:sievertbenjamin@gmail.com">sievertbenjamin@gmail.com</a></p>
        <p><a class="hover:text-gray-400" href="https://www.bensievert.dev">www.bensievert.dev</a></p>
    </footer>
</div>
