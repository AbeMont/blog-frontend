function Reducer(state, action){

    switch( action.type ){

        case "CREATE":
        return {
            ...state,
            articles: [...state.articles, action.payload]
        }

        case "UPDATE":
        return {
            ...state,
            articles: state.articles.map((article)=>{

                if(article._id == action.payload._id){
                    article = action.payload
                }

                return article;

            })
        }

        case "FETCH_ALL":
        return {
            ...state,
            articles: action.payload
        }

        case "DELETE":
        return {
            ...state,
            articles: state.articles.filter(article => article._id != action.payload._id)
        }

    }

    return state;
}

export default Reducer;