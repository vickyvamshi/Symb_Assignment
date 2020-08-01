import React,{Component} from 'react';

class button extends Component{
    render(){
        return(
            <div>
                <button>{this.props.name}</button>
            </div>
        );
    }
}
export default button;