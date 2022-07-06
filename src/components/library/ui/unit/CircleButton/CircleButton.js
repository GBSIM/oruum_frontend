import './CircleButton.css';

export default function CircleButton(props) {
    return (
        <button className='circle-button' onClick={props.clickEvent}>
            <img className='circle-button-image' src={props.image}></img>
        </button>
    )
}