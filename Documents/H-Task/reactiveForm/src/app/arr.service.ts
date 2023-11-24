import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ArrService implements OnInit{
  formData: any[] = [
    {
      id: 1,
      name: 'John Doe',
      mobile: '1234567890',
      date: '2023-11-24',
      gender: 'Male',
      note: 'Sample note 1',
    },
    {
      id: 2,
      name: 'Jane Doe',
      mobile: '9876543210',
      date: '2023-11-25',
      gender: 'Female',
      note: 'Sample note 2',
    },
    {
      id: 3,
      name: 'Alice Smith',
      mobile: '5551234567',
      date: '2023-11-26',
      gender: 'Female',
      note: 'Sample note 3',
    },
    {
      id: 4,
      name: 'Bob Johnson',
      mobile: '7778889999',
      date: '2023-11-27',
      gender: 'Male',
      note: 'Sample note 4',
    },
    {
      id: 5,
      name: 'Charlie Brown',
      mobile: '1231231234',
      date: '2023-11-28',
      gender: 'Male',
      note: 'Sample note 5',
    },
    {
      id: 6,
      name: 'Eva Davis',
      mobile: '4445556666',
      date: '2023-11-29',
      gender: 'Female',
      note: 'Sample note 6',
    },
    {
      id: 7,
      name: 'Frank White',
      mobile: '9998887777',
      date: '2023-11-30',
      gender: 'Male',
      note: 'Sample note 7',
    },
    {
      id: 8,
      name: 'Grace Taylor',
      mobile: '2223334444',
      date: '2023-12-01',
      gender: 'Female',
      note: 'Sample note 8',
    },
    {
      id: 9,
      name: 'David Miller',
      mobile: '6667778888',
      date: '2023-12-02',
      gender: 'Male',
      note: 'Sample note 9',
    },
    {
      id: 10,
      name: 'Emma Wilson',
      mobile: '1112223333',
      date: '2023-12-03',
      gender: 'Female',
      note: 'Sample note 10',
    },
  ];
  
  // You can use this data to initialize your form
  
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  } 


  getall(){
    return this.formData
  }
}





