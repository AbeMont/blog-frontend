import { useContext } from 'react';
import { GlobalContext } from './../../GlobalStore/GlobalStore';
import Modal from './../../components/Modal/Modal';
import { Link } from 'react-router-dom';

import './Card.css';

function Card({ cardImg, cardTitle, cardDesc, cardLinkID }){

    const { deleteArticle } = useContext( GlobalContext );

    const styles = {
        height: "200px",
        background: `url(${cardImg}) no-repeat center center / cover`
    }

    return (
        <div className="card">
            <div className="img-block" 
            style={styles}></div>
            <div className='card-action-btns'>
                <Link to={`/edit-article/${cardLinkID}`} className="btn btn-warning"><i className="bi bi-pencil-square"></i></Link>
                <Modal modalTitle="Delete Article" modalId={cardLinkID} modalDesc={cardTitle} btnClass="danger" actionCb={()=>deleteArticle(cardLinkID)} />
            </div>
            <div className="card-body bg-light">
                <h5 className="card-title">{ cardTitle }</h5>
                <p className="card-text">{cardDesc}</p>
                <Link to={`/article/${cardLinkID}`} className="btn btn-primary">View Article</Link>         
            </div>
        </div>
    )
}

export default Card;