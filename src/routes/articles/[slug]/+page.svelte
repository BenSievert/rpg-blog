<script lang="ts">
  import type {PageData} from './$types';
  import {formatDate} from '../../../functions'

  let {data}: { data: PageData } = $props();
  const {html, title, date_created} = data
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>
<div class="prose">
    <div class="flex justify-between items-center">
        <h1 class="mb-0">{title}</h1>
        {formatDate(date_created)}
    </div>
    {@html html}
</div>
