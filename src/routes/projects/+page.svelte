<script lang="ts">
  let { data } = $props();
</script>

<main>
  <h1>.projects</h1>

  <ul>
    {#each data.projects as project (project.slug)}

      <div class="projectItem">

            <div class="head">

                <a href="/projects/{project.slug}">
                    <h2>{project.meta.title ?? project.slug}</h2>
                    <!-- {#if project.meta.description}
                    <p>{project.meta.description}</p>
                    {/if} -->
                </a>
                
                {#if project.meta.date}
                <span>{project.meta.date}</span>
                {/if}
                
            </div>

            {#if project.meta.tags}
            {#each project.meta.tags as tag (tag)}
            <div>
                <span class="tag">#{tag}</span>
            </div>
            {/each}
            {/if}

        </div>

    {/each}
  </ul>
</main>

<style>

    .head{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    a{
        color: var(--link);
    }
    
    ul{
        width: 50%;
        margin: none;
        padding: none;
    }
    
    .projectItem{
        width: 100%;
        /* background-color: red; */
        display: flex;
        gap: var(--size-5);
        width: 100%;

    }

    main{
        display: flex;
        flex-flow: column;
        width: 100%;
        align-items: center;
        gap: var(--size-5);
    }

</style>