import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'angular-component-binding';
  serverElements: {type: string, name: string, content: string}[]= []
  
  onServerAdded(eventData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      name: eventData.serverName,
      content: eventData.serverContent,
      type: 'true',
    })
  }
  onBlueprintAdded(eventData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      name: eventData.serverName,
      content: eventData.serverContent,
      type: 'true',
    })
  }

  onChangeFirst(){

  }

  onDestroyFirst(){
    
  }
}
