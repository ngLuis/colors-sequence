import { Radio } from "../services/Radio"

describe("Radio", () => {

    it("Reproduces a song", async () => {
        const songName: string = 'song.mp3'
        const playSpy = jest.spyOn(Radio, 'play')

        await Radio.play(songName)

        expect(playSpy).toHaveBeenCalledTimes(1)
    })

})