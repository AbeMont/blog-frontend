import { useContext } from 'react';
import { GlobalContext } from './../../GlobalStore/GlobalStore';
import Card from './../../components/Card/Card';
import Banner from './../../components/Banner/Banner';

function Articles(){

    const { articles } = useContext( GlobalContext );

    return(
        <>
        <Banner 
        title="Articles" 
        text="Create your own article detailing your interest on a certain topic. After submission, you can view, edit, or delete it."
        imgPath = "./images/blog.png"/>
        
        <div className='container'>
            <div className='pb-5'>
                <div className="row">
                    {articles.articles.map((card,i)=>{

                        return(
                            <div className="col-lg-4 col-md-6" key={i}>
                                <Card
                                cardImg={card.image}
                                cardTitle={card.title} 
                                cardDesc={card.description}
                                cardLinkID={card._id}
                                />
                            </div>
                        )

                    })}
                </div>
            </div>
        </div>
        </>
    )
}

export default Articles;