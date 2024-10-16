import FileBase64 from 'react-file-base64';

function FileUpload({ submitCb }){

    return (
        <>
        <FileBase64 multiple={ false }
        onDone={ submitCb } required={true}/>
        </>
    )
}

export default FileUpload;