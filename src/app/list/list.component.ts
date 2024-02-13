import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { BusDetails } from '../bus-details';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  busList:BusDetails[] = [];

  searchBusRequest = {
    busFrom: '',
    busTo: '',
    minPrice:'',
    maxPrice:'',
    busName:'',
    busNumber:''

  };

 constructor(private busApi:ApiService, private router:Router){}

  ngOnInit(): void {
    // this.getBusList();
  }

  // getBusList(){
  //   this.busApi.getAllBus().subscribe(res =>{
  //     this.busList = res;
  //     console.log(res)
  //   })
   
  // }

  deleteBusDetails(id:string)
  {
    const isConfirmed = confirm('Are you sure you want to delete this bus?');

    if(isConfirmed){
    this.busApi.deleteBus(id)
    .subscribe({
      next:(response)=>
      {
        // this.getBusList();
        this.searchBusDetails()
      },
      error:(response)=>
      {
        console.log(response);
      }
    });
  }

}

searchBusDetails(): void {
  this.busApi.searchBusDetails(this.searchBusRequest).subscribe(res =>{
    this.busList=res;
    console.log(res)
  }) 
}

logout(): void {
  localStorage.removeItem('user');
  this.router.navigateByUrl('/login');
}

}
