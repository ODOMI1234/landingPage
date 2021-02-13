//Declare const
const FIRST_NAME = document.querySelector("#firstName");
const LAST_NAME = document.querySelector("secondName");
const CLIENT_WEIGHT = document.querySelector("#weight");
const CLIENT_HEIGHT = document.querySelector("#height");
const CLIENT_RESULT = document.querySelector(".Result");
const CALC_BTM_BTN =  document.querySelector(".btn");

//Add an event listener to the button
CALC_BTM_BTN.addEventListener("click", () =>{
     const FIRST_NAME = document.querySelector("#firstName");
     const LAST_NAME = document.querySelector("secondName");
     const CLIENT_WEIGHT = document.querySelector("#weight");
     const CLIENT_HEIGHT = document.querySelector("#height");
     const CLIENT_RESULT = document.querySelector(".Result");

//ARITHMETIC OPERATION
let BMI = (CLIENT_WEIGHT.value) / (CLIENT_HEIGHT.value**2);

//Let us set the BMI value to two decimal place.
  BMI = BMI.toFixed(2);

//Let us set the BMI value to two decimal place.
    BMI = BMI.toFixed(2);

  //Form Validation
     if (FIRST_NAME.value=="" || LAST_NAME.value=="" || CLIENT_HEIGHT.value=="" || CLIENT_WEIGHT.value=="") {
         setTimeout(() => { 
              CLIENT_RESULT.textContent = "Please fill all fields correctly";
              CLIENT_RESULT.style.color = "red";
              CLIENT_RESULT.style.fontStyle = "italic";  
              setTimeout(() => {
               CLIENT_RESULT.textContent = ""; 
              }, 1500);              
          }, 100);
     } else {
      CLIENT_RESULT.textContent = `${FIRST_NAME.value} ${LAST_NAME.value} your BMI value is ${BMI}kg/m. Thank for using this app.`;
      CLIENT_RESULT.style.color = "black";
      CLIENT_RESULT.style.fontStyle = "normal"; 
     }
});


function init () {
     FIRST_NAME.value=="";
     LAST_NAME.value=="";
     CLIENT_HEIGHT.value=="";
     CLIENT_WEIGHT.value=="";
}