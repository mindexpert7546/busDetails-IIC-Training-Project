package com.iinterchange

class BusDetails {
    Integer busNumber
    String busName
    String ownerName
    String ownerContact
    String busFrom
    String busTo
    Double busPrice 
    Integer busSeats 
    String coachType 
    Date date 

    static constraints = {
      busNumber() 
      busName() 
      busFrom() 
      busTo() 
      busSeats() 
      coachType() 
      date()
      busPrice() 
      ownerName() 
      ownerContact()

    }
}
