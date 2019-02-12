import React from 'react';
import '../components/backprop.css';
import { CSSTransitionGroup } from 'react-transition-group';



class BackProp extends React.Component{
    render(){
        return(
            <CSSTransitionGroup
            transitionName="shaded"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
            >
            <div className ="BackProp">
        <input className="TakeIt"></input>
        </div>
        </CSSTransitionGroup>
        )}
}
export default BackProp