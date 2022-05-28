import { Colors } from "src/types/Colors";
import { Sequence } from "../services/Sequence";

describe("Sequence", () => {

    it("Generates an array of one element", () => {
        const sequence: Sequence = new Sequence();

        sequence.addItem()
        const colors: Array<Colors> = sequence.retrieveItems()

        expect(colors.length).toBe(1)
    })

    it("Generates an array of two elements and first element is not altered", () => {
        const sequence: Sequence = new Sequence();
        sequence.addItem()
        const firstElementGenerated: Colors = sequence.retrieveItems()[0]

        sequence.addItem()
        const colors: Array<Colors> = sequence.retrieveItems()

        expect(colors[0]).toBe(firstElementGenerated)
    })

    it("Generates an array of six elements if addItem is executed six times", () => {
        const sequence: Sequence = new Sequence();
        const expectedGeneratedItems: number = 6;

        sequence.addItem()
        sequence.addItem()
        sequence.addItem()
        sequence.addItem()
        sequence.addItem()
        sequence.addItem()
        const colors: Array<Colors> = sequence.retrieveItems()

        expect(colors.length).toBe(expectedGeneratedItems)
    })

})