import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { BusDetails } from '../bus-details';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'] 
})
export class EditComponent implements OnInit {
  editBusDetails: BusDetails = {
    id: '',
    busNumber: 0,
    busName: '',
    busFrom: '',
    busTo: '',
    busSeats: 0,
    coachType: '',
    date: new Date(),
    busPrice: 0,
    ownerName: '',
    ownerContact: ''
  };

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadBusDetails(id);
      }
    });
  }

  loadBusDetails(id: string) {
    this.apiService.getBusbyId(id).subscribe({
      next: (details) => {
        this.editBusDetails = details;
      },
      error: (err) => {
        console.error('Error fetching bus details', err);
      }
    });
  }

  updateBusDetails() {
    const conf =  confirm('Are you sure you want to edit this bus?');
    console.log(this.editBusDetails)
    if(conf){
    if (this.editBusDetails.id) {
      this.apiService.updateBusDetails(this.editBusDetails.id, this.editBusDetails).subscribe({
        next: () => {
          this.router.navigate(['/blist']);
        },
        error: (err) => {
          console.error('Error updating bus details', err);
        }
      });
    }
  }
  }

  backToBusList(){
    this.router.navigate(['/blist']);
  }

  // deleteBusDetails(id:string)
  // {
  //   this.apiService.deleteBus(id)
  //   .subscribe({
  //     next:(response)=>
  //     {
  //       this.router.navigate(['blist']);
  //     },
  //     error:(response)=>
  //     {
  //       console.log(response);
  //     }
  //   });
  // }
}
