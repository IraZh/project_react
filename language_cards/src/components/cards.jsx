import './cards.css';

function Card(props) {
    return (
        <div className="container_card">
            <div className="title">{props.title}</div>
            <div className="word">{props.word}</div>
        </div>
    );
}

export default Card;