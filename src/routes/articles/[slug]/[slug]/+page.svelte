<script lang="ts">
  import type {PageData} from './$types';

  let {data}: { data: PageData } = $props();
  const {html, title} = data
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>
<pre class="prose">
{@html html}
</pre>
