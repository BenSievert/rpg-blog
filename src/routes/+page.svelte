<script lang="ts">
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>
<div class="bg-amber-900">
{data.version}
</div>