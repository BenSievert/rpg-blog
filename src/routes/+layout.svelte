<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="min-h-screen flex flex-col">
    <header class="bg-surface shadow-glow-primary py-6">
        <div class="container mx-auto text-center">
            <h1 class="text-4xl font-header text-primary">Realm of Infinite Madness</h1>
            <p class="text-secondary text-lg mt-2">My thoughts and resources on table top role playing games.</p>
        </div>
    </header>

    <main class="container mx-auto py-10 flex-1">
        {@render children()}
    </main>

    <footer class="bg-surface py-4 text-center mt-10">
        <p class="text-gray-500">sievertbenjamin@gmail.com</p>
    </footer>
</div>
