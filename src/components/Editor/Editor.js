import { Editor } from '@tinymce/tinymce-react'; 

function EditorComponent(){

    function handleEditorChange(e){
        console.log('Content was updated:',
        e.target.getContent());
    }

    return(
        <Editor
        initialValue="<h1>The Test</h1><p>Initial content</p>"
        apiKey="osvlx9krhqwagmuy22fxeeoadh5ysqey3cow2ua3ysgkcs3q"
        init={{
          height: 350,
          menubar: false,
          plugins: [
            'advlist autolink lists link image', 
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help'
        }}
        onChange={handleEditorChange}
      />
    )
}

export default EditorComponent;