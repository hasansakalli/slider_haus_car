
  var car = document.getElementById("car_container");
  var haus = document.getElementById("haus_container");
    
  function showCar() {
   
    car.style.top = "4rem";  
    car.style.opacity = 1; 
    haus.style.bottom = "-500px" 
    haus.style.opacity = 0; 
     
  }
  
  function showHaus() {
    
    haus.style.bottom = "3rem";
    haus.style.opacity = 1;
    car.style.top = "-500px" 
    car.style.opacity = 0; 
  }
  