import React from 'react';
import '../components/backprop.css';
import { CSSTransitionGroup } from 'react-transition-group';



export default class BackProp extends React.Component{
inital= () => {
    this.setState({open: true })
}

    render(){
        return(
            <>
            <CSSTransitionGroup
            transitionName="shaded"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
            >
            <div className ="BackProp">
        <input className="TakeIt"></input>
         <br />
        <button className="ReactButton"></button>
        </div>

        </CSSTransitionGroup>
        </>

        )}
}
