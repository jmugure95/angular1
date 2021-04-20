import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<number>();
  interval;
  generatedNumber = 0;


  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(): any{
    this.interval = setInterval(() => {
      this.gameStarted.emit(this.generatedNumber + 1);
      this.generatedNumber++;
      }, 1000);
  }
  onStopGame(): any{
    if (this.interval){
      clearInterval(this.interval);
    }
  }

}
