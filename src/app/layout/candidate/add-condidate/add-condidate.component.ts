import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var iEdit:any;
@Component({
  selector: 'app-add-condidate',
  templateUrl: './add-condidate.component.html',
  styleUrls: ['./add-condidate.component.css']
})
export class AddCondidateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    $(document).on("change", ".fileInput", function (e2) {
      var img1 = e2.target.files[0];
      this.images = img1
      if (!iEdit.open(img1, true, function (res1) {
        $(e2.target).closest('.profile-img').find(".result").attr("src", res1);
      })) {
        alert("Whoops! That is not an image!");
      }
    });
  }

}
