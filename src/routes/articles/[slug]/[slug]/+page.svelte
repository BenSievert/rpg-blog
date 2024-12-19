<script lang="ts">
  import type {PageData} from './$types';
  import {onMount} from "svelte";

  let {data}: { data: PageData } = $props();
  const {html, title} = data
</script>
<svelte:head>
    <title>{title}</title>
</svelte:head>
{@html html}
