import * as api from '../services/index'

export default {
  namespace:'globalStore',
  state:{
    name:'oil sole',
    asyncname:'big feet',
    message:'I love long toes'
  },
  reducers:{
    setName(state,payLoad){   
      // console.log(payLoad);    
      let _state = JSON.parse(JSON.stringify(state))     
      _state.name = payLoad.data.name
      state.name = payLoad.data.name
      console.log(state);
      console.log(_state);
      return _state      
    },
    setMsg(state,payLoad){
      let _state = JSON.parse(JSON.stringify(state)) 
      _state.message = payLoad.data.message
      return _state
    }    
  },
  effects:{
    *setNameAsync({payLoad},{put,call}){
      yield console.log(payLoad);
      yield put({
        type:'setName',
        data:{
          name:payLoad.data.name
        }       
      })
    },
    *getTest({payLoad},{put,call}){      
      let res = yield call(api.getTest)      
      if(res) {
        yield put({
          type:'setMsg',
          data:{
            message:res.message
          }
        })
      }
    },
    *getAuthInfo({payLoad},{put,call}){      
      let res = yield call(api.getAuthInfo)      
      if(res) {
        // yield put({
        //   type:'setMsg',
        //   data:{
        //     message:res.message
        //   }
        // })
        yield console.log(res);
      }
    }
  }
}