<button
    aria-label="close_button"
    id="close_button"
    onclick={() => {
        document.querySelector('.nav-wrapper')?.classList.toggle('show')
    }}
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 100 100"
    >
        <line
            x1="10"
            y1="10"
            x2="90"
            y2="90"
            stroke="var(--grey-800)"
            stroke-width="5"
        >
        </line>
        <line
            x1="10"
            y1="90"
            x2="90"
            y2="10"
            stroke="var(--grey-800)"
            stroke-width="5"
        >
        </line>
    </svg>
</button>

<style lang="scss">
    @use '/src/styles/base.scss';

    button {
        background: none;
        color: var(--grey-500);
        border: none;
        padding: 0;
        margin: 0;
        color: black;
    }

    @media (min-width: base.$sm) {
        button {
            display: none;
        }
    }
</style>
