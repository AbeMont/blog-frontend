import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from './../../GlobalStore/GlobalStore';
import ReactHtmlParser from 'react-html-parser';

function Article({ match }){

    const { getArticle } = useContext( GlobalContext );

    const [ state, setState ] = useState({});

    const articleId = match.params.id;

    useEffect(()=>{

        getArticle( articleId ).then(res => {
            console.log( res );
            setState(res.data.data);
        }).catch(error => error.response && setState(error.response.data));

    },[]);

    return(
        <>
        <div className='container'>
            { state.success === false && (<h2>{state.message}</h2>) }
        </div>

        <div className='pt-4 pb-4 bg-light'>
            <div className='container'>
                <h2>{state.title}</h2>
                <h6>{state.description}</h6>
            </div>
        </div>

        <div style={{
            height: '350px',
            background: state.image ? `url(${ state.image }) no-repeat center center / cover` : '#000'
            }}>
        </div>

        <div className='container'>
            <div className='pt-5'>
                <div className='row'>
                    <div className="col-sm-12">
                        {ReactHtmlParser(state.markdown)}
                    </div>
                </div>
            </div>
        </div>

        </>
       
    )
}

export default Article;