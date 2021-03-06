import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
    }

  // tslint:disable-next-line:typedef
    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
