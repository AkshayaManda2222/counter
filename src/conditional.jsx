var age=prompt("enter your age:");
function  Age(){
     return(
        <>
        {
            (age>18)?<Adults/>:<Minors/>
        }
        </>
     )
}