import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverName="";
  content = "";
  @Output() serverCreated = new EventEmitter<{serverName: string, content:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, content:string}>();
  

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(){
    this.serverCreated.emit({
      serverName:this.serverName,
      content:this.content
    });
  }

  onAddBluePrint(){
    this.blueprintCreated.emit({
      serverName:this.serverName,
      content:this.content
    });
  } 

}
