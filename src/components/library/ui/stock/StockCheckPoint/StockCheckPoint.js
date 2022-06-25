import './StockCheckPoint.css';

export default function StockCheckPoint() {
    return (
        <div>
            <div className="stock-check-point-title-container">
                <h2 className="stock-check-point-title">{'테슬라'}, 사야할까말아야할까?</h2>
            </div>
            <div style={{height:'30px'}}></div>
            <CheckPoints
                title={'테슬라, 매수하자!'}
                titleImage={require('../../images/Icon/icon_add_light_black.png')}
                textImage={require('../../images/Icon/icon_check_box_oruum_green.png')}
                checkPoints={['전세계 자동차 제조사들보다 훨씬 높은 수익성!',
                              '매년 엄청 나게 가파르게 성장해온 테슬라의 전기차 판매, 앞으로도 매년 50% 이상 성장 예상!',
                              '전기차뿐만 아니라 스페이스X, 스타링크, 휴머노이드 로봇 등 시너지를 일으킬 수 있는 다양한 사업']}></CheckPoints>
            <div style={{height:'30px'}}></div>
            <CheckPoints
                title={'테슬라, 좀 더 생각해봐야...?!'}
                titleImage={require('../../images/Icon/icon_minus_light_black.png')}
                textImage={require('../../images/Icon/icon_danger_yellow.png')}
                checkPoints={['과도하게 높은 이익 대비 주가',
                              '테슬라의 CEO 일런 머스크의 기행들!',
                              '테슬라 혁신성의 일런 머스크 의존도, 머스크 없이도 잘 클 수 있을까?']}></CheckPoints>
        </div>
    )
}

function CheckPoints(props) {
    const CheckPointList = props.checkPoints.map((checkPoint,index) => (
        <CheckPoint
            image={props.textImage}
            text={checkPoint}></CheckPoint>
    ))

    return (
        <div>
            <div className='check-points-title-container'>
                <img className='check-points-title-icon' src={props.titleImage}></img>
                <h3 className='check-points-title'>{props.title}</h3>
            </div>
            <div style={{height:'15px'}}></div>
            <div className='check-points-container'>
                {CheckPointList}
            </div>
        </div>
    )
}

function CheckPoint(props) {
    return (
        <div className='check-point-container'>
            <img className='check-point-icon' src={props.image}></img>
            <span className='check-point-text'>{props.text}</span>
        </div>
    )
}