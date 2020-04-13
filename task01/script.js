/*Craig Bergmeyer
Script.js
INFO 2134
Thoendel
April 12, 2020*/

// Soooo... I did the error display this way to work on try/catch and just a different
// way of doing things.  I left the original error statements on the bottom 
// but since there was no CSS for errors, I figured it wasn't a big deal 
// whether I displayed it on the page or not.     


// Calls checkInput Function 
document.addEventListener('submit', checkInput);
        
    


function checkInput(e){
    //e.preventDefault();
    // create new variable to use for function testing.
    let fName = document.getElementById('firstName');
    let lName = document.getElementById('lastName');
    let telephone = document.getElementById('telephoneNumber');
    //create regExp. 
    let regExpTele = /^(?:\([2-9]\d{2}\)\ ?|[2-9]\d{2}(?:\-?|\ ?))[2-9]\d{2}[- ]?\d{4}$/;
    
    
    try{
        //Check firstName for not blank prevent default if blank and displays error message
        if (fName.value == '') throw new Error('***First name cannot be blank***');
        //then check lastName for not blank prevent default if blank and displays error message
        if (lName.value == '')throw new Error('***Last name cannot be blank***');
        //finally check to make sure telephone number fits rules  prevent default if it doesn't and displays error message
        if (!regExpTele.test(telephone.value)) throw new Error ('***Telephone number must be entered as 402-123-4567 or (402) 123-4567 or 4021234567 ***');
         //if error display in console and prevent default
    } catch (error) {
        console.log(error);
        e.preventDefault();
}

        //(old)
        // if (fName.value == ''){
        //     let errorCode = document.createTextNode('***First name cannot be blank***');
        //     let fNameError = document.createElement('p');
        //     fNameError.appendChild(errorCode);
        //     document.getElementById('myForm').appendChild(fNameError);
        //     e.preventDefault();
        // //then check lastName for not blank prevent default if blank and displays error message
        // }else if (lName.value == ''){
        //     let errorCode = document.createTextNode('***Last name cannot be blank***');
        //     let fNameError = document.createElement('p');
        //     fNameError.appendChild(errorCode);
        //     document.getElementById('myForm').appendChild(fNameError);
        //     e.preventDefault();
        // //finally check to make sure telephone number fits rules  prevent default if it doesn't and displays error message
        // } else if (!regExpTele.test(telephone.value)){
        //     let errorCode = document.createTextNode('***Telephone number must be entered as 402-123-4567 or (402) 123-4567 or 4021234567 ***');
        //     let fNameError = document.createElement('p');
        //     fNameError.appendChild(errorCode);
        //     document.getElementById('myForm').appendChild(fNameError);
        //     e.preventDefault();
        // }

    }



