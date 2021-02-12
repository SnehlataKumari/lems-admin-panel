import {Component, OnInit, ViewChild} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AlertService } from 'src/app/services/alert.service';
import { LiveClassService } from 'src/app/services/liveClass.service';
import matchSorter from 'match-sorter';
@Component({
  selector: 'app-live-stream-class',
  templateUrl: './live-stream-class.component.html',
  styleUrls: ['./live-stream-class.component.css']
})
export class LiveStreamClassComponent implements OnInit {
  // displayedColumns: string[] = ['id', 'uid', 'username', 'eroll' , 'bdatetime' , 'sname', 'status', 'assign'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  // ngOnInit() {
  //   this.dataSource.paginator = this.paginator;
  // }


  liveClasses;
  selectedLiveClass;
  rejectionReason = new FormControl('', Validators.required);

  displayedColumns: string[] = ['streamCode', 'teacherName', 'selectedGroup', 'date',  'liveCLassPreview', 'tprev', 'action'];
  keysToFilterOn = ['streamCode', 'teacherName', 'selectedGroup'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private liveClassService: LiveClassService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    this.getAllLiveClasses();
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource = new MatTableDataSource(matchSorter(this.liveClasses, filterValue, { keys: this.keysToFilterOn }));
  }

  // async onAcceptLiveClass(selectedLiveClass) {
  //   const response = await this.liveClassService.acceptLiveClass(selectedLiveClass);
  //   this.alertService.success(response['message']);
  //   this.getAllLiveClasses();
  // }

  // async onRejectLiveClass() {
  //   const selectedClassId = this.selectedLiveClass._id;
  //   const response = await this.liveClassService.rejectLiveClass(selectedClassId, this.rejectionReason.value);
  //   this.alertService.success(response['message']);
  //   this.getAllLiveClasses();
  // }

  setSelectedLiveClass(selectedLiveClass) {
    this.selectedLiveClass = selectedLiveClass;
  }

  async getAllLiveClasses() {
    this.liveClasses = (await this.liveClassService.getAllLiveClassCreatedByAdmin())['data'];
    console.log(this.liveClasses);
    this.dataSource = new MatTableDataSource<any>(this.liveClasses);
    this.dataSource.paginator = this.paginator;
  }

  async deleteLiveClass() {
    const response = await this.liveClassService.deleteLiveClass(this.selectedLiveClass);
    this.getAllLiveClasses();
    return response;
  }

  // setSelectedLiveClassId(liveClassId) {
  //   this.selectedLiveClass = liveClassId;
  // }
}

 
// export interface PeriodicElement {
//   id: string;
//   uid: string;
//   username: string;
//   eroll: string;
//   bdatetime: string;
//   sname: string;
//   status: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   {id: '1', uid: 'shivani', username: 'data', eroll: 'data', bdatetime: 'data', sname: 'data' , status: 'data' ,},
// ]
