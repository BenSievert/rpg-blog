<script lang="ts">
  import type {PageData} from './$types';
  import {formatDate} from "../functions";

  let {data}: { data: PageData } = $props();
  const {articles} = data
</script>

<h2 class="text-2xl mb-4 text-primary">Who am I anyway?</h2>
<p>Well, if you're on this site you probably know or at least somewhat know me already. On the off chance that you've
    stumbled upon this from somewhere else here is my introduction.</p>
<br/>
<p>My name is Ben and I've been playing ttrpgs for over a decade. I started out on games like Dungeons and Dragons 4th
    Edition and Pathfinder. I tend to no longer play high fantasy games and most of my experience is
    in running horror, but I like a bit of everything.
</p>
<br/>
<p>
    Below you'll see articles I've written about ttrpgs and I hope to eventually provide some resources to help others
    play these games. If you came to this site because you're going to play in one of my games you should start with
    "What to Expect in my Games".
</p>
<h3 class="text-xl mt-6 mb-4 text-secondary">My articles</h3>
<ul>
    {#each articles as {id, title, date_created}}
        <li class="text-secondary hover:underline"><a
                href="/articles/{id}">{title} - {formatDate(date_created)}</a></li>
    {/each}
</ul>
