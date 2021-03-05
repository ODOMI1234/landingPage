//Declare const
const FIRST_NAME = document.querySelector("#firstName");
const LAST_NAME = document.querySelector("#secondName");
const CLIENT_WEIGHT = document.querySelector("#weight");
const CLIENT_HEIGHT = document.querySelector("#height");
const CLIENT_RESULT = document.querySelector(".Result");
const CALC_BTM_BTN =  document.querySelector(".btn");

//Add an event listener to the button
CALC_BTM_BTN.addEventListener("click", () =>{
     const FIRST_NAME = document.querySelector("#firstName");
     const LAST_NAME = document.querySelector("#secondName");
     const CLIENT_WEIGHT = document.querySelector("#weight");
     const CLIENT_HEIGHT = document.querySelector("#height");
     const CLIENT_RESULT = document.querySelector(".Result");

//ARITHMETIC OPERATION
let BMI = (CLIENT_WEIGHT.value) / (CLIENT_HEIGHT.value**2);

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

    if(BMI > 0 && BMI < 18) {
            CLIENT_RESULT.textContent = `${FIRST_NAME.value} ${LAST_NAME.value} your BMI value is ${BMI}kg/m. You are UNDERWEIGHT. You may want to see a doctor. Thank you for using Kelly's BMI Calculator`;
            CLIENT_RESULT.style.color = "blue";
            CLIENT_RESULT.style.fontStyle = "normal";
            CLIENT_RESULT.style.fontWeight = "bold";
            init();

        } else if (BMI > 18 && BMI < 25) {
            CLIENT_RESULT.textContent = `${FIRST_NAME.value} ${LAST_NAME.value} your BMI value is ${BMI}kg/m. You are NORMAL. Cheers! Thank you for using Kelly's BMI Calculator`;
            CLIENT_RESULT.style.color = "green";
            CLIENT_RESULT.style.fontStyle = "normal";
            CLIENT_RESULT.style.fontWeight = "bold";
            init();

        } else if (BMI > 25 && BMI < 30) {
            CLIENT_RESULT.textContent = `${FIRST_NAME.value} ${LAST_NAME.value} your BMI value is ${BMI}kg/m. You are OVERWEIGHT. You need to see a medical doctor. Thank you for using Kelly's BMI Calculator`;
            CLIENT_RESULT.style.color = "orange";
            CLIENT_RESULT.style.fontStyle = "normal";
            CLIENT_RESULT.style.fontWeight = "bold";
            init();

        } else {
            CLIENT_RESULT.textContent = `${FIRST_NAME.value} ${LAST_NAME.value} your BMI value is ${BMI}kg/m. You are OBESE. You need to see a medical doctor URGENTLY. Thank you for using Kelly's BMI Calculator`;
            CLIENT_RESULT.style.color = "red";
            CLIENT_RESULT.style.fontStyle = "normal";
            CLIENT_RESULT.style.fontWeight = "bold";
            init();
            }
     }
});


function init () {
     FIRST_NAME.value="";
     LAST_NAME.value="";
     CLIENT_HEIGHT.value="";
     CLIENT_WEIGHT.value="";
}