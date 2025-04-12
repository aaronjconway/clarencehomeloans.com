//the class responsible for handling the moving, storage of data from the multi
//part forms
//
import { pushState } from "$app/navigation"
import { page } from '$app/state'


export class FormStore {

    currentStep: number = $state(0)
    data: Record<string, string> = $state({})

    constructor(currentStep: number = 0) {

        this.currentStep = currentStep

        $effect(() => {
            window.addEventListener('popstate', this.handleNavigate.bind(this))
            return () => {
                window.removeEventListener('popstate', this.handleNavigate.bind(this))
            }
        })
    }

    addData(k: string, v: string) {
        this.data[k] = v
    }

    /*
    * if the page state changes then we can also increment the steps
    * TODO:-- unsure of how to modify the App.PageState type  learn more
    * typescript
    * */
    handleNavigate() {
        let currentPage = page.state.page
        if (page.state.page) {

            if (currentPage < this.currentStep) {
                this.currentStep--
            }
            if (currentPage > this.currentStep) {
                this.currentStep++
            }
        } else {
            this.currentStep = 0
        }


    }

    /*
    * can go to specific step.
    * TODO:-- consolidate to just a handleStep(), -1,n if omitted then next step
    * */
    gotoStep(n: number) {
        this.currentStep = n
        pushState('', { page: this.currentStep })
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    nextStep() {
        setTimeout(() => {
            this.currentStep++
            pushState('', { page: this.currentStep })
            this.scrollToTop()
        }, 150);
    }

    previousStep() {
        this.currentStep--
        pushState('', { page: this.currentStep })
    }
}
