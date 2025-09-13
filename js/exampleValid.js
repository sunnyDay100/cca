// validate Student Name with only Upper/ lower alphabet letters and apostrophe and white space 
function valid()
{
    var inputName= document.register.name.value;
    for (let ch of inputName)
    {
        if (!(ch>='a')&&(ch<='z') ||(ch>='A')&&(ch<='Z') || ch=="'" || ch==' ')
        {
            let errMsg = "Valid characters for Name only include: alphabet uppercase, lowercase, apostrope('), and white space";
            displayError("name","errName", errMsg)
            return false;
        }
    }
    clearErr("name", "errName");
    return true;
}

/* highlight the error field, display error message */
function displayError(fieldId,errId, errMsg)
{
    /* get the field object with invalid input */
    var fieldObj = document.getElementById(fieldId);
    /* error field gets focus and selected, ready to reinput */
    /* fieldObj.focus();
    fieldObj.select();
     */
        /* hightlight the error field with red border */
        fieldObj.style.border="solid 3px red";

    /* display error message beside the error field in red */
    var errObj = document.getElementById(errId);
    errObj.innerHTML = errMsg;
    errObj.style.fontSize = "1em"; // 16px
    errObj.style.color="red";
    //  css: scalable 1em =16px, width: 60%// 667px
}
/* if valid, clear Error message, reset the focused field border */
function clearErr(fieldId, errId)
{
   var fieldObj = document.getElementById(fieldId);
    fieldObj.style.border="";  // back to original setting
    
   var errObj = document.getElementById(errId);
   errObj.innerHTML = "";  // empty the error message
}
