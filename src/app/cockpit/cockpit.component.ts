import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, content: string}>();
  newServerName = '';
  newContent = '';

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(): void{
    this.serverCreated.emit({
      serverName: this.newServerName,
      content: this.newContent
    });
  }
  onAddBluePrint(): void{
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      content: this.newContent
    });
  }
}
