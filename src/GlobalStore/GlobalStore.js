import { createContext, useReducer, useEffect } from 'react';
import Reducer from './../Reducer/Reducer';
import axios from 'axios';

const initialState = {
    articles: []
};

// const API_URL = 'https://blog-app-2021.herokuapp.com';
// const API_URL = 'http://localhost:5000';
const API_URL = 'https://blog-backend-ml8x.onrender.com';

export const GlobalContext = createContext( initialState );

export function GlobalStore({ children }){

    const [ state, dispatch ] = useReducer( Reducer, initialState );

    useEffect(()=>{

        fetch(`${API_URL}/api/articles`)
        .then(response => response.json())
        .then(data => {

            dispatch({
                type:"FETCH_ALL",
                payload: data.data
            });

        });

    },[]);

    async function createArticle( article ){

        const response = await axios.post(`${API_URL}/api/createarticle`, article).then((res)=>{

            dispatch({
                type: "CREATE",
                payload: res.data.data
            });

            // This is the entire response and meta data from axios and the server. It has status,headers,request & data.
            return res;

        });

        // In the end, we only need to return the data that only contains the object of the newly created article. 
        return response.data.data;

    }

    async function getArticle( id ){

        const result = await axios.get(`${API_URL}/api/article/${id}`);
        console.log(result);
        return result;

    }

    async function editArticle( article ){

        await axios.put(`${API_URL}/api/updatearticle/${article._id}`, article).then(res => {

            dispatch({
                type: "UPDATE",
                payload: res.data.data
            });

        });
    }

    async function deleteArticle( id ){

        await axios.delete(`${API_URL}/api/deletearticle/${id}`).then(res => {

            dispatch({
                type: "DELETE",
                payload: res.data.data
            })

        });

    }

    return (
        <GlobalContext.Provider value={
            { 
                articles: state, 
                createArticle, 
                editArticle, 
                getArticle, 
                deleteArticle 
            }
            }>

            { children }

        </GlobalContext.Provider>
    )
}