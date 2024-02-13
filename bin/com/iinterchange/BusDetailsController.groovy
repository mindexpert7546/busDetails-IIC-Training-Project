package com.iinterchange
import com.iinterchange.BusDetails


import grails.rest.*
import grails.converters.*

class BusDetailsController extends RestfulController {
    static responseFormats = ['json', 'xml']
    BusDetailsController() {
        super(BusDetails)
    }
   
   def index(){
    def busFrom=params.busFrom 
    def busTo =params.busTo 
    def busName = params.busName
    def busPrice = params.busPrice 
    def minPrice = params.minPrice 
    def maxPrice = params.maxPrice 

    def buses 

    // Which location to which location bus is going 
    if(!(busFrom.equals(null) || busTo.equals(null))){
          // println(busFrom + busTo?.length())
           buses = BusDetails.createCriteria().list {
            eq('busFrom', busFrom)
            eq('busTo',busTo)
      }
    }
    //searching by bus name 
    else if(!busName.equals(null)){
        // println("Hello")
      buses = BusDetails.createCriteria().list {
      eq('busName',busName)   
    }
   }

   //exect bus price if user entered 
   else if(!busPrice.equals(null)){
    buses = BusDetails.createCriteria().list{
      eq('busPrice',busPrice as Double)
      
    }
   }
   //filter the min price between max price (range of price )
    else if(!(minPrice.equals(null) || maxPrice.equals(null))){
       buses = BusDetails.createCriteria().list {
       between("busPrice", minPrice as Double, maxPrice as Double)
    }
    }
 respond buses

//  this is search by location 
//     def searchByLocation(){
//         def busFrom=params.busFrom 
//         def busTo = params.busTo 
//         def buses = BusDetails.createCriteria().list {
//             eq('busFrom', busFrom)
//             eq('busTo',busTo)
//     }
//     respond buses
//    }

}
}