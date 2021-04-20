import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  username = 'one';
  servers = ['testserver1', 'testserver2'];
  displayContent = false;
  displayContent1 = false;
  logs = [];

  serverName = '';
  content = '';
  @Output() serverCreated = new EventEmitter<{serverName: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, content: string}>();

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }



  // showServer(){
  //   this.serverElements.push({
  //     type:'server',
  //     name:this.serverName,
  //     content:this.content
  //   })
  // }

  // showBluePrint(){
  //   this.serverElements.push({
  //     type:'blueprint',
  //     name:this.serverName,
  //     content:this.content
  //   })
  // }

  onCreateServer(){
    // this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created! Name is:' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (event.target as HTMLInputElement).value;
    // console.log(event);
  }

  onUpdateUsername(){
    this.username = '';
  }

  displayPar(){
    this.displayContent = !this.displayContent;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(Date());


  }

  showServer(){
    this.displayContent = !this.displayContent;

  }

  showBluePrint(){
    this.displayContent1 = !this.displayContent1;
  }

}
