console.log("my document");
const mainDiv=document.querySelector(".container");
let api="https://holidayapi.com/v1/countries?pretty&key=400ddbde-0e6e-4ab5-af41-523ea1a93970";

    fetch(api,{
        method:"GET",   
    })
    .then((response) => response.json())
  .then((data) => {
    console.log(data.countries);
     data.countries.forEach((state) => {
      const countiesObject = {
              flag:state.flag?state.flag:"No Flags Suport",
             name:state.name,
             subdivisions: state.subdivisions ? state.subdivisions.length: "no divosions",
             code:state.code,

    
    };
    console.log(state.subdivisions.length);
    console.log(countiesObject);
    CountryCard(countiesObject);
   //subDivisions(state.subdivisions);
   
    });
   })
   .catch((err) => console.log("error : ", err));
   

 
function CountryCard(state)
{
  const subDiv = document.createElement("div");
  subDiv.innerHTML +=`<div class="card sub">
  <p class="card-body"><span class="text">Country: </span><span class="name"> ${state.name} </span><br>
  <span class="text">Code : </span><span class="name">${state.code}</span>
  <img class="card-img" src="${state.flag}" >
  <p class="card-text">
  <span class="text" >No of subDivisions :</span><span  class="name">${state.subdivisions}</span> </p>
  </p>
  </div>
`;
mainDiv.append(subDiv);

//  mySubDiv(state.subdivisions)
}
// function mySubDiv(sub){
//   sub.forEach((division)=>{
//         const subDivisions={
//           name:division.name,
//         };
//         console.log(subDivisions.name);

       

        
      
//    })
  //  }

//  divisionButton.addEventListener("click",subDivisions => {
//   // const divisionData = state.subDivisions;
//   console.log("Division data:",subDivisions );
//   divisionDisplay.innerHTML = subDivisions;
// if (subDivisions) {
//     const divisionInfo = `
//       <p><span class="card-text">Sub-Divisions</span> ${divisionData}</p>
//     `;
//     divisionDisplay.innerHTML = divisionInfo;
//     divisionDisplay.style.display = "block";
//   }
//  });









 