import { Component, OnInit } from '@angular/core';
import { LiveClassService } from 'src/app/services/liveClass.service';

@Component({
  selector: 'app-live-classes',
  templateUrl: './live-classes.component.html',
  styleUrls: ['./live-classes.component.css'],
})
export class LiveClassesComponent implements OnInit {
  allLiveClasses;
  todaysliveClasses;
  filteredClasses;
  viewList;
  length;
  pageSize = 10;
  keysToFilterOn = ['title', 'allowedWatchCount', 'time'];

  constructor(private liveClassService: LiveClassService) {}

  ngOnInit() {
    // this.getLiveClass();
  }
}
