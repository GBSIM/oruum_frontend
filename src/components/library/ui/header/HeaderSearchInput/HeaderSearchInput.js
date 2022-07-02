import './HeaderSearchInput.css';
import { useSelector,useDispatch } from "react-redux";
import { activateStockSearch } from '../../../../../_reducers/header';

export default function HeaderSearchInput() {
    const dispatch = useDispatch();
    const stockSearchActivation = () => {
        dispatch(activateStockSearch());
    }
    const {isStockSearchActivated} = useSelector(state => state.header);

    if (isStockSearchActivated) {
        return (
            <button className="header-search-input-container on" onClick={stockSearchActivation}>
                <img className='header-search-input-icon' src={require('../../images/Icon/icon_search_dark_grey.png')}></img>
                <input className='header-search-input on' placeholder='종목을 검색하세요!'></input>
            </button>
        )
    } else {
        return (
            <button className="header-search-input-container off" onClick={stockSearchActivation}>
                <img className='header-search-input-icon' src={require('../../images/Icon/icon_search_dark_grey.png')}></img>
                <input className='header-search-input off' placeholder='종목을 검색하세요!'></input>
            </button>
        )
    }
}

export function SearchScreen() {
    const {isStockSearchActivated, stockSearchCandidates} = useSelector(state => state.header);

    const searchCandidateRows = stockSearchCandidates.map((stockSearchCandidate,index) => (
        <SearchCandidateRow
            koreanName={stockSearchCandidate["koreanName"]}
            ticker={stockSearchCandidate["ticker"]}
            englishName={stockSearchCandidate["englishName"]}
            key={index}></SearchCandidateRow>
    ))

    if (isStockSearchActivated) {
        return (
            <div className='search-screen'>
                {searchCandidateRows}
            </div>
        )
    }
}

function SearchCandidateRow(props) {
    return (
        <button className='search-candidate-row'>
            <div className='search-candidate-image-container'>
                <img src={require('../../images/Icon/icon_search_white.png')} className='search-candidate-image'></img>
            </div>
            <span className='search-candidate-korean-name'>{props.koreanName}</span>
            <div style={{background: '#696969',width:'1px',height:'16px'}}></div>
            <span className='search-candidate-ticker'>{props.ticker}</span>
            <div style={{background: '#696969',width:'1px',height:'16px'}}></div>
            <span className='search-candidate-english-name'>{props.englishName}</span>
        </button>
    )
}