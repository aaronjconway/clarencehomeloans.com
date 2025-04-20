<script lang="ts">
    const { statData } = $props()
</script>

<section class="stats">
    <div class="container compact">
        <div class="stats-grid">
            {#each statData as stat}
                <div class="stat">
                    <h3>{stat.number}</h3>
                    <p>{stat.text}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<style scoped lang="scss">
    .stats {
        padding: var(--space-lg) 0;

        .stats-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--space);
            text-align: center;

            @media (min-width: 768px) {
                grid-template-columns: repeat(3, 1fr);
            }

            .stat {
                h3 {
                    font-size: var(--text-xxl);
                    color: var(--green-500);
                    margin: 0;
                    font-weight: 700;
                }

                p {
                    margin-top: 0.5rem;
                }
            }
        }
    }
</style>
