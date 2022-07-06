import './SearchInput.css';

export default function SearchInput(props) {
    return (
        <button className='search-input-container' onClick={props.clickEvent}>
            <img className='search-input-icon' src={require('../../icons/icon_search_dark_grey.png')}></img>
            <input type='text' className='search-input' placeholder={props.placeholder}></input>
        </button>
    )
}