import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveClassBroadcastComponent } from 'src/app/shared/live-class-broadcast/live-class-broadcast.component';
import { NetlessWhiteboardComponent } from 'src/app/shared/netless-whiteboard/netless-whiteboard.component';

const routes: Routes = [
  { path: ':liveClassId/live-stream', component: LiveClassBroadcastComponent },
  { path: 'white-board', component: NetlessWhiteboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveClassesRoutingModule {}
