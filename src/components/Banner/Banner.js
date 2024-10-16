function Banner ({ title, text, imgPath }){
    return (
        <>
        <div className='container'>
            <section className='pt-5 pb-5'>
                <div className='row'>
                    <div className='col-sm-5 col-md-5'>
                        <div className='d-flex h-100'>
                            <div className='d-flex flex-column justify-content-center h-100'>
                                <h2>{ title }</h2>
                                <p>{ text }</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-7 col-md-5 offset-md-2'>
                        <img src={ imgPath } className="img-fluid"/>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default Banner;