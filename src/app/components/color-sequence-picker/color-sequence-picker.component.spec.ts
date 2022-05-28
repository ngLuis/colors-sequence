import {render, screen, fireEvent} from '@testing-library/angular'
import { ColorSequencePickerComponent } from 'src/app/components/color-sequence-picker/color-sequence-picker.component'
import "@testing-library/jest-dom/extend-expect" 
import { Colors } from 'src/types/Colors'

describe("Color Sequence Picker", () => {

    it("Selects color passed as a property", async () => {
        const container = await render(ColorSequencePickerComponent, {
            componentProperties: {
                selectedColor: Colors.PRIMARY
            }
        })

        const firstColor = container.getByRole('primary-color')

        expect(firstColor).toHaveClass('c-picker-wrapper__color--selected')
    })

    it("Selects color when clicks on it", async () => {
        const container = await render(ColorSequencePickerComponent)
        const firstColor = container.getByRole('primary-color')

        await fireEvent.click(firstColor)

        expect(firstColor).toHaveClass('c-picker-wrapper__color--selected')
    })

})
