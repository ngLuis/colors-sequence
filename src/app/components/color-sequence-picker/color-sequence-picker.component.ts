import { Component, Input, OnInit } from '@angular/core';
import { Radio } from 'src/app/services/Radio';
import { Colors } from 'src/types/Colors';

@Component({
  selector: 'app-color-sequence-picker',
  templateUrl: './color-sequence-picker.component.html',
  styleUrls: ['./color-sequence-picker.component.scss']
})
export class ColorSequencePickerComponent implements OnInit {

  colors = Colors;
  @Input() selectedColor?: Colors;

  constructor() { }

  ngOnInit(): void {
  }

  select(color: Colors) {
    this.selectedColor = color;
    const songName: string = this.selectedColor.toLowerCase() + '.mp3'
    this.reproduceSong(songName)
  }

  reproduceSong(songName: string) {
    Radio.play(songName)
  }

}
