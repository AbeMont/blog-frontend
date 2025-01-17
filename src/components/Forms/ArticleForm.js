import { useState, useContext, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { GlobalContext } from './../../GlobalStore/GlobalStore';

import { Editor } from '@tinymce/tinymce-react';
import FileUpload from './../FileUpload/FileUpload';

function ArticleForm({ editArticleId }){

    const { createArticle, editArticle, getArticle } = useContext( GlobalContext );

    const initialState = {
        title: "",
        description: "",
        markdown: "<h1>Title</h1>",
        image: "https://via.placeholder.com/350x200",
        success: false
    };

    const [ article, setArticle ] = useState(initialState);
    const [ formSubmitted, setformSubmitted ] = useState(false);
    const [ redirectID, setredirectID ] = useState( editArticleId );
    const [ showWidget, setShowWidget] = useState(false);

    useEffect(()=>{

      // If the editArticleId prop id passed from the Edit Article Page, we fetch the existing data from that article to populate the form with its data
      if( editArticleId ){

        getArticle(`${redirectID}`).then(res =>{

          setArticle({...res.data.data, success:true});
          setShowWidget(true);

        }).catch( error => error.response && setArticle(error.response.data) )

      } else {
        setArticle({...initialState, success: true});
        setShowWidget(true);
      }

    },[]);

    function articleTitleHandler(e){
      setArticle({
        ...article,
        title: e.currentTarget.value
      });
    }

    function articleDescHandler(e){
      setArticle({
        ...article,
        description: e.currentTarget.value
      });
    }

    function articleMarkdownHandler(e){
      setArticle({
        ...article,
        markdown: e.target.getContent()
      });
    }

    function getImgData( file ){
      setArticle({
        ...article,
        image: file.base64
      });
    }

    function saveArticleHandler(e){
      e.preventDefault();

      if( editArticleId ){

        editArticle(article).then(res => {
          setformSubmitted(true);
        });
        
      } else {

        createArticle(article).then(res => {
          setredirectID(res._id);
          setformSubmitted(true);
        });
        
      }
      
    }

    //console.log(redirectID);
    console.log(article);
    //console.log(article.markdown)

  if(article.success === false){
    return <h1>{article.message}</h1>
  }


  if(formSubmitted){

    return <Redirect to={`/article/${redirectID}`} />

  } else {
    return (
      <form onSubmit={saveArticleHandler} className='pt-4 pb-5'>

        <div className="form-group">
          <label htmlFor="inputTitle">Title</label>
          <input type="text" 
          name="title" 
          className="form-control" 
          id="inputTitle" 
          placeholder="Enter title"
          onChange={(e)=>articleTitleHandler(e)} 
          value={article.title} required/>
        </div>

        <div className="form-group">
          <label htmlFor="inputDesc">Description</label>
          <input type="text" 
          name="description" 
          className="form-control" 
          id="inputDesc" 
          placeholder="Description"
          onChange={(e)=>articleDescHandler(e)}
          value={article.description} required/>
        </div>

        <div className="form-group">
          <label>Article Image</label>
          <br/>
          <img src={article.image} className="img-fluid d-block"/>
          <br/>
          <FileUpload submitCb={ getImgData } />
        </div>

        { showWidget &&  <Editor
          onSetContent={()=>`${article.markdown}`}
          initialValue={`${article.markdown}`}
          apiKey="79h2v0550s32x5d172tfrp605aiu77g57p82p649jtjg2x6p"
          init={{
            height: 350,
            menubar: false,
            plugins: [
               // Core editing features
              'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
              // Your account includes a free trial of TinyMCE premium features
              // Try the most popular premium features until Oct 30, 2024:
              'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown'
            ],
            tinycomments_mode: 'embedded',
            toolbar:
              'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
              ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
          }}
          onChange={(e)=>articleMarkdownHandler(e)}
        />}

        <button type="submit" className='btn btn-primary mt-3'>Submit</button>

      </form>
    )

  }
   
}

export default ArticleForm;