//the class responsible for handling the moving, storage of data from the multi
//part forms
//
import { pushState } from "$app/navigation"
import { page } from '$app/state'


export class FormStore {

    currentStep: number = $state(0)
    totalSteps: number = $state(13)
    stepStack: number[] = $state([])
    data: Record<string, string> = $state({})
    submitted: boolean = $state(false)

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
                this.currentStep == this.stepStack.pop()
            }
            if (currentPage > this.currentStep) {
                this.currentStep++
            }
        } else {
            this.currentStep = 0
        }


    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    /*
    * can go to specific step.
    * TODO:-- consolidate to just a handleStep(), -1,n if omitted then next step
    * */
    gotoStep(n: number) {
        setTimeout(() => {
            this.stepStack.push(this.currentStep)
            this.currentStep = n
            pushState('', { page: this.currentStep })
            this.scrollToTop()
        }, 200);
    }


    nextStep() {
        setTimeout(() => {
            this.stepStack.push(this.currentStep)
            // the active step shouldn't be in the step stack. that's why we do
            // it AFTER the push to stack that way  a pop is the recent step
            this.currentStep++
            pushState('', { page: this.currentStep })
            this.scrollToTop()
        }, 200);
    }

    previousStep() {
        this.currentStep = this.stepStack.pop()
        pushState('', { page: this.currentStep })
    }
}
