import Banner from './../../components/Banner/Banner';

function Home(){
    return (
        <>
        <Banner 
        title="Mern Blog App"
        text="An excercise to implement backend and frontend concepts from previously learned apps."
        imgPath="./images/mern.png"/>

        <section className='pt-4 pb-4 bg-dark text-white'>
            <div className='container'>
                <h2>Objective</h2>
                <h5>Create a SPA with a website look and feel to include multiple routes and pages to handle different views.</h5>
            </div>
        </section>

        <div className='container'>
            <section className='pt-5 pb-5'>
                <h2>Challenges</h2>
                <div className='row'>
                    <div className='col-12 col-md-8'>
                        <ul className="list-group">
                            <li className="list-group-item">On the backend, create a RESTful API and HTTP request methods <b>POST</b>, <b>GET</b>, <b>PUT</b>, & <b>DELETE</b> for database interactions. </li>
                            <li className="list-group-item">On the frontend, properly render reusable components using React Hooks.</li>
                            <li className="list-group-item">Have capability to upload images to the database.</li>
                            <li className="list-group-item">Create 404 functionality when error in finding or editing pages that do not exist.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>

        </>
    )
}

export default Home;