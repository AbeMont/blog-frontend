
function Modal({  modalId, btnText, btnClass, modalDesc, actionCb, modalTitle }){

    function actionHandler(){
        actionCb();
    }

    return(
        <>
            <button type="button" className={`btn btn-${btnClass}`}  data-bs-toggle="modal" data-bs-target={`#modal-${modalId}`}>
            { btnText || <i className="bi bi-trash"></i> }
            </button>

            <div className="modal fade" id={`modal-${modalId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{modalTitle}</h5>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete "{modalDesc}"?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button className="btn btn-danger" onClick={actionHandler} data-bs-dismiss="modal">Delete</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;