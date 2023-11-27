import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ConfirmEventType,
  Message,
  MessageService,
  ConfirmationService,
} from 'primeng/api';

import { formatDate } from '@angular/common';
import { ApiServiceService } from '../services/apiservice.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiList } from '../core/variable/api-list';

interface gen {
  id:number
  name: string;
}

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.scss'],
})
export class RformComponent implements OnInit {
  user!: FormGroup;
  gender: gen[] | undefined;
  messages: Message[] | undefined;
  formData!:any;
    sidebarVisible2: boolean = false;
    submitbtn:boolean=true
    update:boolean=false
  userData!:any
getuser:any
  constructor(
    private val: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private apiService:ApiServiceService
    // private myserv:ArrService,
    
  ) {}
  
  ngOnInit(): void {
    // this.user = this.val.group({
    //   name: [null],
    //   mobile: [null],
    //   date: [null],
    //   gender: [null],
    //   note: [null],
    // });
    this.getUser()
    this.messages = [
      { severity: 'success', summary: 'Success', detail: 'Message Content' },
    ];
    this.gender = [{ id:1, name: 'male' }, { id:2, name: 'female' }, { id:3, name: 'other' }];
    
  
   
    // this.formData=this.myserv.getall() 
    this.user = this.val.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      note: ['', Validators.required],
    });
  }

  get form() {
    return this.user.controls;
  }
  confirm1() {
    if(this.user.invalid){
      this.user.markAllAsTouched()
      return
    }
    this.confirmationService.confirm({
      accept: () => {
        let data=this.user.value
        console.log(data)
        this.apiService.Post(ApiList.useradd,data).subscribe({
          next: (res: any) => {
          // console.log(this.user);
          
          },
          error: (err: HttpErrorResponse) => {
                 console.log(err)
          }
        })
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
        });
        // console.log(this.user.value);
      },
      reject: (type: ConfirmEventType) => {
        this.user.reset()
        switch (type) {
            case ConfirmEventType.REJECT:
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
                break;
            case ConfirmEventType.CANCEL:
                this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                break;
           
        }
      },
    });
 
  }

 
  getbyid(id:number){
    console.log(id);
    
    this.apiService.GetById(ApiList.getbyid,id).subscribe({
      next: (res: any) => {
     
       let userData =res.user
      console.log(userData[0]); 
      
      this.user.patchValue({
        name: userData[0].name,
        mobile: userData[0].mobile,
        dob:new Date(userData[0].dob),
        gender: userData[0].gender,
        note: userData[0].note,
      });
       
      
      },
      error: (err: HttpErrorResponse) => {
             console.log(err)
      }
    })
  }



  getUser(){

    this.apiService.Get(ApiList.getuser).subscribe({
      next: (res: any) => {
      // console.log(this.user);
       this.getuser =res.user
      console.log(this.getuser);  
      
      },
      error: (err: HttpErrorResponse) => {
             console.log(err)
      }
    })
  }

  
  formoff(){
    this.user.reset()
    this.update=false
  }
  edit(id:any){
this.sidebarVisible2=true
this.submitbtn=false
this.update=true
// let data=this.myserv.getById(id)
// this.userData=data[0]
// this.user.patchValue(this.userData)
// this.gender=this.userData.

  }

  // accept(){
  //   console.log(this.user);
    
  //   this.apiService.Post(ApiList.useradd,this.user).subscribe({
  //     next: (res: any) => {
  //     console.log(this.user);
      
  //     },
  //     error: (err: HttpErrorResponse) => {
  //       console.log(err)
  //     }
  //   })
  //   this.messageService.add({
  //     severity: 'info',
  //     summary: 'Confirmed',
  //     detail: 'You have accepted',
  //   });
  //   console.log(this.user.value);
  // }


delete(){
  

}
sub(){
  this.submitbtn=true
}

// interface for user filling data
}
interface data{
  id:number,
  name:string,
  mobile:number,
}
