var employee  = {
  firstName:'John',lastName:'Doe',age:50
};

for(var prop in employee){
  console.log(prop + ' - '+employee[prop]);
}
