import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter'
import './index.css'

class App extends React.Component{
    constructor(props){
        super(props)

        this.state={
            mount: true,
            ignoreProp: 0
        }

        this.mountCounter = () => this.setState({mount:true})
        this.unmountCounter = () => this.setState({mount:false})
 
        this.ignoreProp = () => this.setState({ignoreProp: Math.random()})
    }
    
    render(){
        return(
        <div>
            <button className="buttons"
                    onClick={this.mountCounter} 
                    disabled={this.state.mount}
            >
                Mount Counter
            </button>

            <button className="buttons"
                    onClick={this.unmountCounter} 
                    disabled={!this.state.mount}
            >
                Unmount Counter
            </button>

            <button onClick={this.ignoreProp}>Ignore Prop</button>
              {this.state.mount ? <Counter ignoreProp={this.state.ignoreProp} /> : null}
        </div>
      ) 
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))