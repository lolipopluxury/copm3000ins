import React from 'react'
import styles from './index.css';
import { connect } from 'dva';

class Index extends React.Component{

  onClick = () => {
    // console.log(this.props);
    this.props.dispatch({
      type:'globalStore/setName',
      data:{
        name:'siswet',
      }
    })
  }

  onClickAsync = () => {  
    // console.log(this.props);
    this.props.dispatch({
      type:'globalStore/setNameAsync',
      payLoad:{
        data:{
          name:'123'
        }
      }
    })
  }

  apiTest = () => {  
    this.props.dispatch({
      type:'globalStore/getTest',  
    })
  }

  authTest = () => {  
    this.props.dispatch({
      type:'globalStore/getAuthInfo',  
    })
  }


  render(){    
    return(
      <div>
        <h1>This is a name: {this.props.name}</h1>
        <h2>This is a async</h2>
        <h2>{this.props.message}</h2>
        <button onClick={this.onClick}>setName</button>
        <button onClick={this.onClickAsync}>setNameAsync</button>
        <div>
          <button onClick={this.apiTest}>API Test</button>
          <button onClick={this.authTest}>Auth Test</button>
        </div>
     </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return { 
    name:state.globalStore.name,
    message:state.globalStore.message
  }
}

export default connect(mapStateToProps)(Index);