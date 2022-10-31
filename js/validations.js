// REGISTER FORM VALIDATIONS
var business = document.getElementById("business-type"); 

var form = document.getElementById("food-business");
var message = document.getElementById("not-food");


function businessType() {
    if (business.value == "1") {
        form.classList.replace("hide", "show");
        if (message.classList.contains("show")) {
            message.classList.replace("show", "hide");
        }
      } else if (business.value == "2") {
        message.classList.replace("hide", "show");
        if (form.classList.contains("show")) {
            form.classList.replace("show", "hide");
        }
      } else {}
}


//AREA CODE PLACEHOLDER MODIFY
var code = document.getElementById("area-code");
var phone = document.getElementById("customer-phone");

function phonePlace() {
    switch (code.value) {
        case "arg":
            phone.placeholder="11 5959 5959"
            break;
        case "uy":
            phone.placeholder="59 595 959"
            break;
        case "py":
            phone.placeholder="5959 5959595"
            break;
    
        default:
            break;
    }
}