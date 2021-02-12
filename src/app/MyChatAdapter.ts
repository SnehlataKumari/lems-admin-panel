import { Injectable } from '@angular/core';
import {
  ChatAdapter,
  ChatParticipantStatus,
  ChatParticipantType,
  Group,
  IChatController,
  IChatParticipant,
  Message,
  ParticipantResponse,
} from 'ng-chat';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AgoraChatService } from 'src/app/services/agoraChat.service';

@Injectable({
  providedIn: 'root',
})
export class MyChatAdapter extends ChatAdapter {
  public ngChatInstance: IChatController;
  constructor(private agoraChatService: AgoraChatService) {
    super();
    this.initChat();
  }

  teachersMap;

  public onMsgRe;

  async initChat() {
    const teachers = (await this.agoraChatService.fetchTeachers())['data'];
    this.teachersMap = new Map(
      teachers.map((teacher) => [teacher.userId._id, teacher])
    );
    this.agoraChatService.client.on('MessageFromPeer', (msg: any, peerId) => {
      console.log(msg, peerId);

      const user = {
        participantType: ChatParticipantType.User,
        id: peerId,
        displayName: `${this.teachersMap.get(peerId).userId.firstName} ${
          this.teachersMap.get(peerId).userId.lastName
        }`,
        avatar: null,
        status: ChatParticipantStatus.Online,
      };

      let replyMessage = new Message();

      replyMessage.message = msg.text;
      replyMessage.dateSent = new Date();

      console.log(this.ngChatInstance);
      if (this.ngChatInstance) {
        console.log(this.ngChatInstance);

        this.ngChatInstance.triggerOpenChatWindow(user);
      }
      if (this.onMsgRe) {
        this.onMsgRe(user);
      }
      this.onMessageReceived(user, replyMessage);

      // text: text of the received message; peerId: User ID of the sender.
      /* Your code for handling the event of receiving a peer-to-peer message. */
    });
  }
  public static mockedParticipants: IChatParticipant[] = [
    {
      participantType: ChatParticipantType.User,
      id: 'CHAT_SUPPORT',
      displayName: 'Chat Support',
      avatar: null,
      status: ChatParticipantStatus.Online,
    },
  ];

  listFriends(): Observable<ParticipantResponse[]> {
    return of(
      MyChatAdapter.mockedParticipants.map((user) => {
        let participantResponse = new ParticipantResponse();

        participantResponse.participant = user;
        participantResponse.metadata = {
          totalUnreadMessages: Math.floor(Math.random() * 10),
        };

        return participantResponse;
      })
    );
  }

  getMessageHistory(destinataryId: any): Observable<Message[]> {
    let mockedHistory: Array<Message>;

    mockedHistory = [
      {
        fromId: 1,
        toId: 999,
        message:
          'Hi there, just type any message bellow to test this Angular module.',
        dateSent: new Date(),
      },
    ];

    return of([]);
  }

  sendMessage(message: Message): void {
    // let user = MyChatAdapter.mockedParticipants.find(
    //   (x) => x.id == replyMessage.fromId
    // );
    // this.onMessageReceived(user, replyMessage);

    console.log(message);
    this.agoraChatService.sendMessage(message);
  }
}
