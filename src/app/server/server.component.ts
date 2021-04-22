import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';

    getServerStatus(): any {
        return this.serverStatus;
    }

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
    }

    getColor(): any{
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
