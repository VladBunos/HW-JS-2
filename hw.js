const data = [
    {
      firstName: "Ashton",
      lastName: "Kutcher",
      age: 40,
    },
    {
      firstName: "Bradley",
      lastName: "Pitt",
      age: 54,
    },
    {
      firstName: "Hannah",
      lastName: "Dakota",
      age: 24,
    },
];


let flag = true;
let searchRequest = prompt("Last Name ?").toLowerCase();
for (counter = 0; counter < data.length; counter++){
    if (searchRequest === data[counter].lastName.toLowerCase()){
        console.log(data[counter]);
        flag = !flag;
        
    } 
}
if (flag){
    console.log("No results for such search request are found !")
}
