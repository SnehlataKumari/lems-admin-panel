import { Component, OnInit, ViewChild } from '@angular/core';
import { IChatController } from 'ng-chat';
import { MyChatAdapter } from './MyChatAdapter';
import { AgoraChatService } from './services/agoraChat.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('ngChatInstance')
  protected ngChatInstance: IChatController;

  constructor(public authService: AuthService, public adapter: MyChatAdapter) {}

  ngOnInit() {
    this.adapter.ngChatInstance = this.ngChatInstance;
    this.adapter.onMsgRe = this.cb.bind(this);
  }

  cb(user) {
    this.ngChatInstance.triggerOpenChatWindow(user);
  }
  title = 'mytolong-service-provider';
}
