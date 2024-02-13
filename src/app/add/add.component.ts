import { Component, OnInit } from '@angular/core';
import { BusDetails } from '../bus-details';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{

  addBushRequest:BusDetails={
    id:'',
    busNumber: 0,
    busName: '',
    busFrom: '',
    busTo: '',
    busSeats: 0,
    coachType: '',
    date: new Date,
    busPrice: 0,
    ownerName: '',
    ownerContact: ''
  };

  constructor(private apiService:ApiService,private router:Router){

  }
  ngOnInit(): void {
    this.addBusDetails();
   
  }

  addBusDetails(){
   
    this.apiService.addBusDetails(this.addBushRequest).subscribe({
      next:(busDetails)=>{
          this.router.navigate(['/blist']);
          console.log(busDetails);
      },
      error:(response)=>
      {
        console.log(response);
      }
    })
  }

  backToBusList(){
    this.router.navigate(['/blist']);
  }
}
