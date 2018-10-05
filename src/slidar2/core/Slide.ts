import {Step} from './Step';

export class Slide {
    public steps: Step[]
    public currentStepNo: number

    public nextStep() {
        if(this.currentStepNo < this.steps.length - 1) {
            this.currentStepNo++;
            this.steps[this.currentStepNo].perform();
        }
    }
}
