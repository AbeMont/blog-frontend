import ArticleForm from './../../components/Forms/ArticleForm';

function CreateArticle(){
    return(
        <div className='container mt-3'>
            <h1>Create New Article</h1>
            <ArticleForm/>
        </div>
    )
}

export default CreateArticle;