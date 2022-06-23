import './HeaderSearchInput.css';

export default function HeaderSearchInput() {
    return (
        <button className="header-search-input-container">
            <img className='header-search-input-icon' src={require('../../images/Icon/icon_search_dark_grey.png')}></img>
            <input className='header-search-input' placeholder='종목을 검색하세요!'>
            </input>
        </button>
    )
}