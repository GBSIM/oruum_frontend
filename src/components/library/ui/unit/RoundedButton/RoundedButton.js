import './RoundedButton.css';

export default function RoundedButton(props) {
    return (
        <button className='rounded-button' onClick={props.clickEvent}>
            <span className='rounded-button-text'>{props.text}</span>
        </button>
    )
}