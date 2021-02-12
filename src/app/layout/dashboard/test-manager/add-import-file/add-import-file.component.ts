import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-add-import-file',
  templateUrl: './add-import-file.component.html',
  styleUrls: ['./add-import-file.component.css']
})
export class AddImportFileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('input[type="file"]').change(function(e){
      var fileName = e.target.files[0].name;
      $('.custom-file-label').html(fileName);
  });
  }

}
