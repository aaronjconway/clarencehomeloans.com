//the class responsible for handling the moving, storage of data from the multi
//part forms
// TODO:-- learn how to modify the page history so can navigate with
// forward/back.
//
// Last attempt clobbered the history so it was not reliable


export class FormStore {

    currentStep: number = $state(0)
    totalSteps: number = $state(13)
    stepStack: number[] = $state([])
    data: Record<string, string> = $state({})
    submitted: boolean = $state(false)
    formName: string = $state('')

    // if we construct on 0 then i think we'll alwasy end up gettting 0
    constructor(currentStep: number = 0) {
        this.currentStep = currentStep
    }

    addData(k: string, v: string) {
        this.data[k] = v
    }

    clearStorage() {
        this.data = {}
        localStorage.removeItem(`formCurrentStep-${this.formName}`)
        localStorage.removeItem(`formData-${this.formName}`)
    }

    initializeFromStorage() {
        const savedStep = localStorage.getItem(`formCurrentStep-${this.formName}`)
        console.log('saved step', savedStep)
        if (savedStep !== null && !isNaN(parseInt(savedStep))) {
            this.currentStep = parseInt(savedStep)
        }

        const savedData = localStorage.getItem(`formData-${this.formName}`)
        console.log('saved data', savedData)
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData)
                if (parsed && typeof parsed === 'object') {
                    this.data = parsed
                }
            } catch (e) {
                console.warn('Failed to parse saved formData from localStorage:', e)
            }
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
            // pushState('', { page: this.currentStep })
            this.scrollToTop()
        }, 200);
    }


    nextStep() {
        setTimeout(() => {
            this.stepStack.push(this.currentStep)

            // the active step shouldn't be in the step stack. that's why we
            // increment AFTER the push to stack that way a pop returns the previous step
            this.currentStep++

            // save to local storage the active step.
            localStorage.setItem(`formData-${this.formName}`, JSON.stringify(this.data))
            localStorage.setItem(`formCurrentStep-${this.formName}`, this.currentStep.toString())

            // pushState('', { page: this.currentStep })
            this.scrollToTop()
        }, 200);
    }

    previousStep() {
        setTimeout(() => {
            // todo this doesn't respect the step stack
            // stack would have to be saved into local storage as well.
            this.currentStep--
            localStorage.setItem(`formData-${this.formName}`, JSON.stringify(this.data))
            localStorage.setItem(`formCurrentStep-${this.formName}`, this.currentStep.toString())

            this.scrollToTop()
        }, 100);
    }
}
