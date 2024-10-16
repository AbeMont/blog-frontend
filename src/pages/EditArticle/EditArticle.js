// import EditArticleForm from './../../components/Forms/EditArticleForm';
import ArticleForm from './../../components/Forms/ArticleForm';

function EditArticle({ match }){

    const articleId = match.params.id;

    return (
        <div className='container mt-3'>
            <h1>Edit Article</h1>
            <ArticleForm editArticleId={articleId}/>
        </div>
    )
}

export default EditArticle;