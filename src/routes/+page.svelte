<script lang="ts">
  import type {PageData} from './$types';

  let {data}: { data: PageData } = $props();
  const {articles} = data
</script>
<h2 class="text-2xl mb-4">My articles</h2>
<ul>
    {#each articles as {id, title}}
        <li class="text-secondary hover:underline"><a
                href="/articles/{title.replaceAll(` `, `_`).toLowerCase()}/{id}">{title}</a></li>
    {/each}
</ul>
