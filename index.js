class Vehicle {
    constructor(model){
      this.model = model
    }
    drive(){
      return `${this.model} drives`
    }
  }
            
  class Sedan extends Vehicle {
    constructor(model, backUpCamera){
      super(model)
      this.model = model 
      this.backUpCamera = backUpCamera
    }
     drive(){
        return `${this.model} drives`    }
  }   

  class SUV extends Vehicle {
    constructor(model,offroadPackage){
      super(model)
      this.model = model 
      this.offroadPackage = offroadPackage
    }
     drive(){
        return `${this.model} drive`    }
  }   

  class Truck extends Vehicle {
    constructor(model, towingCapacity){
      super(model)
      this.model = model 
      this.towingCapacity = towingCapacity
    }
     drive(){
        return `${this.model} drive`    }
  }   

  class EVSedan extends Vehicle {
    constructor(model){
      super(model)
      this.model = model 
    }
  
     drive(){
        return `${this.model} drive`    
    }  

    recharge(){
        return `${this.model} recharges`
    }
}