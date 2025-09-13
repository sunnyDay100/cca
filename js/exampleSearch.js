var bookList=[
    {bookTitle:"A Brief History of Time", authorName:"Steve Hawking", description:"It addresses big yet basic questions, such as 'what do we really know about the universe.'"},
    {bookTitle:"Homo Deus - A Brief History of Tomorrow", authorName:"Yuval Noah Harari", description:"It shows us where we are going."},
    {bookTitle:"Sapiens - A Brief History of Humankind", authorName:"Yuval Noah Harari", description:"It shows us where we came from."},
    {bookTitle:"You Can Heal Your Life", authorName:"Louise Hay",  description:"The thougts we think and the words we speak create our experiences."}
];
function search()
{
    var result=false;
    //var key=document.register.key.value;  // ok
    var key = document.getElementById('key').value;
    var keyReg = new RegExp(key,'i');
    var resultObj = document.querySelector("#result");
    clearResult();
    var tableObj = document.createElement("table");
    /* tableObj.innerHTML = ""; */
    // create Table Header
    var trObj = document.createElement("tr");
    var headerArr = ["Book Title", "Author Name", "Description"];
    for (let i=0; i<headerArr.length; i++)
    {
        var thObj = document.createElement("th");
        var thText = document.createTextNode(headerArr[i]);
        thObj.appendChild(thText);
        thObj.style.border="solid 2px black";
        trObj.appendChild(thObj);
    }
    tableObj.appendChild(trObj);
    /*  for (c of bookList)  //ok
    {
        //console.log(c);
        if (c.bookTitle.search(keyReg)>=0)
        {
            console.log("yes");
           
        }  else console.log("N");
    } */
    // filter the search results
    bookList.forEach((book)=>{
        /* if (book.bookTitle.search(keyReg)>=0) // ok */
        /* if (book.bookTitle.match(keyReg)) // ok */
        if (keyReg.test(book.bookTitle) || keyReg.test(book.authorName) || keyReg.test(book.description)) 
        {
            // if match, result is set to true. if never matches, result stays false, means no result
            result=true; 
            // create a row
            trObj = document.createElement("tr");
            for (let prop in book)
            {
                var tdObj = document.createElement("td");
                var tdText = document.createTextNode(book[prop]);
                tdObj.appendChild(tdText);
                tdObj.style.border="solid 2px black";
                trObj.appendChild(tdObj);
            }
            tableObj.style.borderCollapse = "collapse";
            tableObj.appendChild(trObj);
           
        }  
    }); 
    if (result)
    {
        tableObj.style.border="solid 2px black";
        resultObj.appendChild(tableObj);
    }else{
        tableObj.innerHTML = "No result.";
        tableObj.style.color="crimson";
        resultObj.appendChild(tableObj);
    } 
};

function clearResult()
{
    var resultObj = document.querySelector("#result");
    resultObj.innerHTML = "";
}


window.onload=function()
{
    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", search);

    var clearResultButton = document.getElementById("clearResult");
    clearResultButton.addEventListener("click", clearResult);
}