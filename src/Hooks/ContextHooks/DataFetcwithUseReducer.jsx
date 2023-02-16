import React, {useReducer, useEffect} from 'react'
import axios from 'axios';



const initialState = {
    loading:true,
    error: '',
    post: {}
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return  {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post:{},
                error:'Something went wrong'
            }
        default:
            return state


    }
}

const DataFetcwithUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/').then(response => {
            dispatch({type:'FETCH_STATUS', payload:response.data})
        }).catch(error => {
           dispatch({type:'FETCH_ERROR'})  
        })
       })



  return (
    <div>
        {state.loading? 'Loading': state.post.title}
        {state.error? error :null}      
    </div>
  )
}

export default DataFetcwithUseReducer
