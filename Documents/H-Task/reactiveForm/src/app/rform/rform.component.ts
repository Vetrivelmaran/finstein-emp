import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ConfirmEventType,
  Message,
  MessageService,
  ConfirmationService,
} from 'primeng/api';
import { ArrService } from '../arr.service';
import { formatDate } from '@angular/common';

interface gen {
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
  

  constructor(
    private val: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,private myserv:ArrService
    
  ) {}
  
  ngOnInit(): void {
    // this.user = this.val.group({
    //   name: [null],
    //   mobile: [null],
    //   date: [null],
    //   gender: [null],
    //   note: [null],
    // });
    this.messages = [
      { severity: 'success', summary: 'Success', detail: 'Message Content' },
    ];
    this.gender = [{ name: 'male' }, { name: 'female' }, { name: 'other' }];
    
  
   
    this.formData=this.myserv.getall() 
    this.user = this.val.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      date: ['', Validators.required],
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
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
        });
        console.log(this.user.value);
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
  formoff(){
    this.user.reset()
    this.update=false
  }
  edit(){
this.sidebarVisible2=true
this.submitbtn=false
this.update=true

  }
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
