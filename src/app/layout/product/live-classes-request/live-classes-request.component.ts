import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AlertService } from 'src/app/services/alert.service';
import { LiveClassService } from 'src/app/services/liveClass.service';
import matchSorter from 'match-sorter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-live-classes-request',
  templateUrl: './live-classes-request.component.html',
  styleUrls: ['./live-classes-request.component.css'],
})
export class LiveClassesRequestComponent implements OnInit {
  liveClasses;
  selectedLiveClass;
  rejectionReason = new FormControl('', Validators.required);

  displayedColumns: string[] = [
    'streamCode',
    'teacherName',
    'date',
    'selectedGroup',
    'liveCLassPreview',
    // 'tprev',
    'approveReject',
  ];
  keysToFilterOn = ['streamCode', 'user.firstName', 'selectedGroup'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private liveClassService: LiveClassService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    this.getAllLiveClasses();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);

    this.dataSource = new MatTableDataSource(
      matchSorter(this.liveClasses, filterValue, { keys: this.keysToFilterOn })
    );
    console.log(this.dataSource);
  }

  async onAcceptLiveClass(selectedLiveClass) {
    const response = await this.liveClassService.acceptLiveClass(
      selectedLiveClass
    );
    this.alertService.success(response['message']);
    this.getAllLiveClasses();
  }

  async onRejectLiveClass() {
    const selectedClassId = this.selectedLiveClass._id;
    const response = await this.liveClassService.rejectLiveClass(
      selectedClassId,
      this.rejectionReason.value
    );
    this.alertService.success(response['message']);
    this.getAllLiveClasses();
  }

  setSelectedLiveClass(selectedLiveClass) {
    this.selectedLiveClass = selectedLiveClass;
  }

  async getAllLiveClasses() {
    this.liveClasses = (await this.liveClassService.getAllLiveService())[
      'data'
    ];
    this.dataSource = new MatTableDataSource<any>(this.liveClasses);
    this.dataSource.paginator = this.paginator;
  }

  gotoTestPreview(element) {
    this.router.navigate(['live-class', element._id, 'live-stream']); // :liveClassId/live-stream
  }
}
