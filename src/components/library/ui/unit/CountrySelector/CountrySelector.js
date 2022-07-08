import './CountrySelector.css';

export default function CountrySelector(props) {
    if (props.isKorea) {
        return (
            <div className='country-selector'>
                <button className='country-button on'>
                    <h3 className='country-button-text on'>국내</h3>
                </button>
                <button className='country-button' onClick={props.changeCountry}>
                    <h3 className='country-button-text'>미국</h3>
                </button>
            </div>
        )
    } else {
        return (
            <div className='country-selector'>
                <button className='country-button'>
                    <h3 className='country-button-text' onClick={props.changeCountry}>국내</h3>
                </button>
                <button className='country-button on'>
                    <h3 className='country-button-text on'>미국</h3>
                </button>
            </div>
        )
    }
    
}