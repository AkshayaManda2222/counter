import { Component } from "react";


class Increments extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
        this.incrementt=this.incrementt.bind(this)
        this.decrementt=this.decrementt.bind(this)

    }
    incrementt(){
        this.setState({
        count:this.state.count+1
        })
    }
    decrementt(){
        this.setState({
        count:this.state.count-1
        })
    }
    
    render(){
        var a;
        if(this.state.count>5){
            a=<h1 style={{color:"red"}}>{this.state.count}</h1>;
        }else if (this.state.count<=5  && this.state.count>=0){
            a=<h1 style={{color:"green"}}>{this.state.count}</h1>;
         }
         else{
            a=<h1 style={{color:"blue"}}>{this.state.count}</h1>;
         }
        return(
            <>
            <h1>hello i am doing counter</h1>
            <h1>{a}</h1>
            <button onClick={this.incrementt}>increment</button>
            <button onClick={this.decrementt}>decrement</button>
</>
        )
    }
    }
export default Increments;