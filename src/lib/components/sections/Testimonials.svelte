<script lang="ts">
    import { Splide, SplideSlide } from '@splidejs/svelte-splide'

    let reviewDialog: HTMLDialogElement
    let reviewText = $state('')

    interface Review {
        content: string
        author: string
        review_date: Date
    }

    function handleReadMore(review: Review) {
        reviewText = review.content
        reviewDialog.open ? reviewDialog.close() : reviewDialog.showModal()
    }

    const { reviews } = $props()
</script>

<!-- <pre>{JSON.stringify(reviews, null, 4)}</pre> -->
<section>
    <div class="container">
        <Splide aria-label="Testimonials">
            {#each reviews as review}
                <SplideSlide>
                    <div class="review-card">
                        <div class="review-stars">
                            {#each Array(5) as _}
                                <i class="fa fa-star"></i>
                            {/each}
                        </div>
                        <div class="review-text">
                            {@html review.content}
                        </div>
                        <button
                            onclick={() => {
                                handleReadMore(review)
                            }}>read more</button
                        >
                        <div class="author">
                            - {review.author}
                        </div>
                    </div>
                </SplideSlide>
            {/each}
        </Splide>
    </div>
</section>
<dialog bind:this={reviewDialog}>
    <div class="inner-dialog">
        <p>{@html reviewText}</p>
        <form method="dialog">
            <button>close</button>
        </form>
    </div>
</dialog>

<style lang="scss">
    .review-stars {
        display: flex;
        margin: 0 auto;
        width: fit-content;
        gap: var(--space-xxs);
        margin-bottom: var(--space);
        i {
            color: gold;
        }
    }
    dialog {
        border: none;
        margin: auto;
        width: fit-content;
        height: 100%;
        background: none;
        &::backdrop {
            background: rgb(1, 1, 1, 0.2);
        }

        .inner-dialog {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            line-height: var(--body-line-height);
            padding: var(--space-md);
            background: white;
            /* width: 50%; */
            /* height: 100%; */
            border: solid 1px var(--grey-200);
            margin: auto;
            border-radius: 5px;
            font-family: serif;
            font-size: 30px;
            overflow: scroll;
            white-space: wrap;

            p {
                padding: 2em;
            }
        }
    }
    button {
        display: flex;
        margin: var(--space-md) auto;
        color: var(--green-600);
        background: none;
        text-transform: unset;
        text-align: center;
    }

    section {
        background-color: var(--light-green);
        margin: 0;
        padding: var(--space-lg) 0;
    }

    .review-card {
        border-radius: 4px;
        height: 90%;
        flex-direction: column;
        justify-content: space-between;
        padding: var(--space-md);
        margin: 0;

        &:before {
            display: flex;
            width: 100%;
            justify-content: center;
            content: '❝';
            color: var(--green-600);
            font-size: 4rem;
        }
    }

    .review-text {
        font-family: serif;
        font-size: var(--text-lg);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        text-overflow: ellipsis;
        line-clamp: 4;
        max-height: calc(1.6em * 4);
        line-height: 1.6em;
        padding: 0 var(--space-md);
    }

    .author {
        text-align: center;
        font-size: var(--text-sm);
        margin: var(--space-sm) 0;
    }

    @media (max-width: 768px) {
        .review-text {
            font-family: serif;
            font-size: var(--text-md);
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            overflow: hidden;
            text-overflow: ellipsis;
            line-clamp: 5;
            max-height: calc(1.6em * 5);
            line-height: 1.6em;
        }

        dialog {
            .inner-dialog {
                font-size: var(--text-md);
                padding: var(--space-xs);
                p {
                    padding: var(--space-xs);
                }
            }
        }
    }
</style>
