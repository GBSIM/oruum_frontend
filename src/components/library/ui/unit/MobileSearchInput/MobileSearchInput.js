import './MobileSearchInput.css';

export default function MobileSearchInput(props) {
    return (
        <div className='mobile-search-input-container'>
            <input type='text' className='mobile-search-input' placeholder={props.placeholder}></input>
        </div>
    )
}