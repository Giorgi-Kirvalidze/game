import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>()
  interval;
  lastNumber = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onGameStart(){
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.lastNumber + 1)
      this.lastNumber ++ 
    },1000)
  }
  onGameStop(){
    clearInterval(this.interval)
  }
}
