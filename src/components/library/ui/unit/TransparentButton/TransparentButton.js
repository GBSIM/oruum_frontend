import './TransparentButton.css';

export default function TransparentButton(props) {
    return (
        <button className='transparent-button' onClick={props.clickEvent}>
            <img className='transparent-button-icon' src={props.image}></img>
        </button>
    )
}