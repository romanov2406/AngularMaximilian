import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent {
  
  serverId: number = 10;
  serverStatus: string = 'offline';
  obj = [1,2,3,4,54,6,7]
  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline' 
  }

  getServerStatus(): string{
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus === 'online'? 'green': 'red'
  }
}
