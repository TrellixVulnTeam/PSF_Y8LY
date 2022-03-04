import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { VisitorService } from 'src/app/services/visitor.service';
import { environment } from 'src/environments/environment.dev';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent implements OnInit {
  addVisitorForm: FormGroup | any;
  private apiURL = environment.apiUrl;




  constructor(private fb: FormBuilder, private toastr: ToastrService, public router: Router, private visitorService: VisitorService, private http: HttpClient) { }

  ngOnInit(): void {
    this.addVisitorForm = this.fb.group({
      visitorName: new FormControl('', [Validators.required]),
      fatherName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(11)]),
      address: new FormControl('', [Validators.required]),
      purpose: new FormControl('', [Validators.required]),
      attendedPerson: new FormControl('', [Validators.required])
    });
  }

  addVisitor() {
    //  this.submitted = true;
    if (!this.addVisitorForm.valid) {
      return;
    } else {

      let data = {
        visitorName: this.addVisitorForm.value.visitorName,
        visitorFatherName: this.addVisitorForm.value.fatherName,
        visitorPhone: this.addVisitorForm.value.phoneNumber,
        visitorAddress: this.addVisitorForm.value.address,
        purpose: this.addVisitorForm.value.purpose,
        attenderName: this.addVisitorForm.value.attendedPerson
      }

      //console.log(this.addVisitorForm.value)
      this.visitorService.addVisitors(data).subscribe((data: any) => {
        console.log(data)
        if (data.success) {
          this.toastr.success(data.message);
          this.addVisitorForm.reset();

        }
        else {
          this.toastr.error(data.message);
          this.addVisitorForm.reset();

        }

      })

    }


  }


  //  this.http.post(this.apiURL + 'visitors/add', formData).subscribe(
  //    (response) => console.log(response),
  //    (error) => console.log(error)
  //    )


}