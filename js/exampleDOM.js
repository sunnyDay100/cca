function highlight()
{
    // highlight all paragraphs in the document
    var paraElements = document.querySelectorAll("h2");

    for (var i = 0; i < paraElements.length; i++) {
    paraElements[i].style.backgroundColor = "yellow";
    paraElements[i].style.color ="blue";
   /*  paraElements[i].style.fontSize="small"; */
    }

    var para1 = document.querySelector("h2");
    para1.style.color="red";
}
function mouseOver(obj)
{
    obj.style.fontSize="xx-large"
    obj.style.color="red";
}
function mouseOut(obj)
{
    obj.style.fontSize="small"
    obj.style.color="green";
}

function click(obj)
{
    obj.style.fontSize="normal"
    obj.style.color="yellow";
}