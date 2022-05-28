import { Colors } from "src/types/Colors";

export class Sequence {

    items: Array<Colors> = []
    candidates: Array<Colors> = [
        Colors.PRIMARY,
        Colors.SECONDARY,
        Colors.TERTIARY,
        Colors.QUATERNARY
    ]

    addItem() {
        const randomItem: Colors = this.randomItem()
        this.items.push(randomItem)
    }

    retrieveItems(): Array<Colors> {
        return this.items
    }

    private randomItem(): Colors {
        const randomizedNumber: number = this.getRandomNumberFromZeroTo(3)
        return this.candidates[randomizedNumber]
    }

    private getRandomNumberFromZeroTo(max: number): number {
        return Math.floor(Math.random() * (max + 1));
    }

}