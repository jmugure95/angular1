import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // serverElements=[];
  serverElements=[];

  onServerAdded(serverData:{serverName:string, content:string}){
      this.serverElements.push({
        type:'server',
        name:serverData.serverName,
        content:serverData.content
      });
    }
  
  onBluePrintAdded(blueprintData:{serverName:string,content:string}){
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.serverName,
      content:blueprintData.content
    });
  } 
}
