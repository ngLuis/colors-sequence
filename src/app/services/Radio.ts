export class Radio {

    static audioPath: string = '../../assets/sounds/'

    private static createAudio(songName: string): HTMLAudioElement {
        return new Audio(this.audioPath + songName);
    }

    static play(songName: string): void {
        const audio: HTMLAudioElement = this.createAudio(songName)
        audio.play()
    }

}