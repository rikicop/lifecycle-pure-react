import React, { Component } from 'react'
/* import './index.css' */

export class counter extends Component {
    constructor(props){
        super(props)
        this.state ={
            counter: 0
        }
        this.increment = () => this.setState({counter: this.state.counter+1})
        this.decrement = () => this.setState({counter: this.state.counter-1})
    }

    

    componentDidMount(){
        console.log('Component Did Mount')
        console.log('--------------------')
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.ignoreProp && this.props.ignore !== nextProps.ignoreProp){
                console.log('Should Component Update - DO NOT RENDER')
                return false
            }
        console.log('Should Component Update - RENDER')
        return true
    }
 
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Get Snapshot Before Update')
        return null
    }


    render() {
        console.log('Render')

        return (
            <div>

                <button className="buttons" onClick={this.increment}>Incremento</button>
                <button className="buttons" onClick={this.decrement}>Decremento</button>

                <div className="counter">
                    <h2 style={{ fontSize: '3rem' }}>
                        Counter:{this.state.counter}
                    </h2>
                </div>
                
            </div>
        )
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Component Did Update')
        console.log('--------------------')
    }

    componentWillUnmount(){
        console.log('Component Will Unmount')
        console.log('--------------------')
    }
    componentDidCatch(error, info){
        console.log('Component Did Catch')
    }
}

export default counter
