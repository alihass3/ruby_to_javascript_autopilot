var get_new_car={
  city: 'Toronto',
  passengers: 0,
  gas: 100,
  };
//csn call this by get_new_car.city for example

//x=get_new_car;

//function analyze(funcToTime) {
  //console.log("\nAnalyzing...");
  //console.time(funcToTime.name);
  //funcToTime();
  //console.timeEnd(funcToTime.name);
//}
//things.push('new thing');
function add_car(cars,new_car) {
  cars.push(new_car);
  console.log("\nAdding new car to fleet. Fleet size is now ." + cars.length);
}

function pick_up_passenger(car){
  car.passengers+=1;
  car.gas-=10;
  console.log("Picked up passenger. Car now has" + car.passengers + "passengers");
}


function get_destination(car){
  if(car.city==='Toronto'){
    return("Mississauga");
  }
  else if(car.city==='Mississauga'){
    return("London");
  }
  else if(car.city==='London'){
    return("Toronto");
  }
}

function fill_up_gas(car){
  old_gas=car.gas;
  car.gas=100;
  console.log("Filled up to" + car.gas + "on gas from" + get_gas_display(old_gas));
}


function get_gas_display(gas_amount){
  return gas_amount;
}

function drive(car, city_distance){
  if(car.gas < city_distance){
     fill_up_gas(car);
  }
  car.city = get_destination(car);
  car.gas -= city_distance;
  console.log("Drove to" + car.city + "Remaining gas:" + get_gas_display(car.gas));
}

function drop_off_passengers(car){
  var previous_passengers = car.passengers;
  car.passengers = 0;
  console.log("Dropped off" + previous_passengers + "passengers.");
}

function act(car){
  var distance_between_cities = 50;
  if(car.gas < 20){
     fill_up_gas(car);
  }
  else if(car.passengers < 3){
    pick_up_passenger(car);
  }
  else {
    if(car.gas < distance_between_cities){
        return fill_up_gas(car);
    }
    var drove_to = drive(car, distance_between_cities);
    var passengers_dropped = drop_off_passengers(car);
    console.log(drove_to + passengers_dropped);

  }
}


function command_fleet(cars){
  for (var i=0; i<cars.length; i++){
    var action= act(cars[i]);
    car_number=i+1;
    console.log("Car" + car_number + action);
    console.log("---");
  }
}


function add_one_car_per_day(cars, num_days) {
  for (var i=0; i<num_days.length; i++){
    var new_car = get_new_car;
    add_car(cars, new_car);
    command_fleet (cars);
  }
}
