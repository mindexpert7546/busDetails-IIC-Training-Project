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
    def busNumber = params.busNumber

    def buses 

    // Which location to which location bus is going 
    if(!(busFrom.equals(null) || busTo.equals(null))){
          println(busFrom + busTo?.length())
           buses = BusDetails.createCriteria().list {
            eq('busFrom', busFrom)
            eq('busTo',busTo)
      }
    }

   // Bus From only 
    else if(!(busFrom.equals(null))){
      println(busFrom)
      buses = BusDetails.createCriteria().list(){
        eq('busFrom',busFrom)
      }
    }

    // Bus To only 
     else if(!(busTo.equals(null))){
      println(busTo)
      buses = BusDetails.createCriteria().list(){
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
    // grater than or equal to 
    else if(!minPrice.equals(null)){
    buses = BusDetails.createCriteria().list{
      println(minPrice)
      ge("busPrice", minPrice as Double)
      
    }
    }
     
    //  less than or equal to 
    else if(!maxPrice.equals(null)){
    buses = BusDetails.createCriteria().list{
      le("busPrice", maxPrice as Double)
      
    }
    }

    // Bus Number 
    else if(!busNumber.equals(null)){
    buses = BusDetails.createCriteria().list{
      eq("busNumber", busNumber as Integer)
      
    }
    }
    else{
      buses = BusDetails.list()
    }
    respond buses
}
}