import './SubHome.css';

import { useSelector } from "react-redux";

export default function SubHome() {
    const {name, totalAsset, totalAssetChange, totalAssetChangePercentage} = useSelector(state => state.user);

    let AssetChange;

    if (totalAssetChange >= 0) {
        AssetChange = <span className='subhome-total-asset-change plus'>+{totalAssetChange.toLocaleString()} ({totalAssetChangePercentage}%)</span>
    } else {
        AssetChange = <span className='subhome-total-asset-change minus'>{totalAssetChange.toLocaleString()} ({Math.abs(totalAssetChangePercentage)}%)</span>
    }

    return (
        <div>
            <div style={{height: '20px'}}></div>
            <div className='container-center-align'>
                <img className='subcontents-profile-image'
                     src={require('../../images/image_profile.png')}></img>
            </div>
            <div style={{height: '10px'}}></div>
            <div className='container-center-align'>
                <h3 className='subcontents-profile-name'>{name}</h3>
            </div>
            <div style={{height: '10px'}}></div>
            <div className='container-center-align'>
                <span className='subhome-asset-title'>총 자산</span>
            </div>
            <div className='container-center-align'>
                <h2 className='subhome-total-asset'>{totalAsset.toLocaleString()}원</h2>
            </div>
            <div className='container-center-align'>
                {AssetChange}
            </div>
        </div>
    )
}