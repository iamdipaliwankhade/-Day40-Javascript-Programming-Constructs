console.log("Welcome To PinCode Validation");

const pincodeRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");

function validatePincode(pincode){
    if(pincodeRegex.test(pincode))
        console.log(pincode + " : Valid PIN Code !!");
    else
        console.log(pincode + " : PINCODE is Invalid !");
}

validatePincode("841301");
validatePincode("A841301");
validatePincode("841301B");
validatePincode("841 301");
