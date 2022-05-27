import { Component, Input, OnInit } from '@angular/core';
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

}
