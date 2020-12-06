import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = true;
  serverName = '';
  serverCreateStatus = 'No Server was Created';
  serverCreated = false;
  servers = ['TestServer','TestServers','RomeoComponents'];
  constructor() {

    setTimeout(() => {
      this.allowNewServers = false;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    console.log(this.servers);
    
    this.serverCreateStatus = 'Server was created Name ' + this.serverName;
  }


}
