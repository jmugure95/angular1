import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  oddNumbers = [];
  evenNumbers = [];
  loadedFeature = false;
  title;
  onServerAdded(serverData: {serverName: string, content: string}): any{
      this.serverElements.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.content
      });
    }

  onBluePrintAdded(blueprintData: {serverName: string, content: string}): any{
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.content
    });
  }
  onGameStart(firedNumber: number): any{
    if (firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
    }else{
      this.oddNumbers.push(firedNumber);
    }

  }

  onShowRecipeNow(feature: boolean): any{
    this.loadedFeature = feature;

  }
}
