import './CountrySelector.css';

export default function CountrySelector(props) {
    if (props.isKorea) {
        return (
            <div>
                <div className="country-selector-buttons-container">
                    <button className="country-selector-button on">
                        <h3 className="country-selector-button-text on">국내</h3>
                    </button>
                    <button className="country-selector-button off">
                        <h3 className="country-selector-button-text off">미국</h3>
                    </button>
                </div>
                <div style={{width:'90%',marginLeft:'5%',marginRight:'5%',height:'1px',background:'#DCDCDC'}}></div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="country-selector-buttons-container">
                    <button className="country-selector-button off">
                        <h3 className="country-selector-button-text off">국내</h3>
                    </button>
                    <button className="country-selector-button on">
                        <h3 className="country-selector-button-text on">미국</h3>
                    </button>
                </div>
                <div style={{width:'90%',marginLeft:'5%',marginRight:'5%',height:'1px',background:'#DCDCDC'}}></div>
            </div>
        )
    }
}