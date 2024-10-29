// function Chintu(props){
//     return (
//         <>
//         <h1>I am child </h1>
//         {props.children}
//         </>

//     )
// }
// export default Chintu;

import {component} from "react";
import Hii from "./akshaya"
function Hello extends component{
    render(){
        return(
<>
<h1>hi this is a girl</h1>
<akshaya></akshaya>
</>
        )
    }
}
export default Hello;