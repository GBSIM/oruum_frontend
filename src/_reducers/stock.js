import axios from "axios";

export const GET_CURRENT_PRICE = "STOCK/GET_CURRENT_PRICE";
export const CHANGE_PLOT_PERIOD = "STOCK/CHANGE_PLOT_PERIOD";

export const changePricePlotPeriod = (period) => ({ type: CHANGE_PLOT_PERIOD, period });

const initialState = {
    // Stock profile
    ticker: 'AAPL',
    koreanName: '애플',
    englishName: 'Apple Inc.',

    //Price
    currency: '$',
    currentPrice: 132.12,
    plotPeriod: '1년',
    lastDailyChange: -2.69,
    lastDailyChangeRate: -1.66,

    //Income
    incomeYearArray: [2018,2019,2020,2021,2022],
    revenueArray: [265595000000,260174000000,274515000000,365817000000,0],
    operatingIncomeArray: [70898000000,63930000000,66288000000,108949000000,0],
    netIncomeArray: [59531000000,55256000000,57411000000,94680000000,0],
    operatingMargin: 29.8,
    netMargin: 25.9,

    //ORUUM contents
    tagList: ['스마트폰','전자','가상현실','플랫폼','IT'],
    buyPoints: ['아이폰이 스마트폰 시장에서 매우 독점적 위치를 차지하고 있어요!',
               '아이패드도 태블릿 시장에서 매우 강력한 독점적 위치!',
               '수익성이 정말 좋아요! 순이익률 27%로 동종업계 1위'],
    sellPoints: ['가격이 너무 비싸! 애플의 순이익 대비 주가는 지난 10년 중 최고!',
                 '애플이 이야기한 자동차 산업, 잘 되고 있는 걸까?',
                 '아이폰의 성장세 계속 이어질까?'],
    
    //Products
    prouductList: ['아이폰','웨어러블,홈,액세서리','아이패드','서비스','맥'],
    salesRatioList: [34.2,21.5,18.2,17.6,12.1],
    growthRateList: [19.8,38.2,12.6,8.9,20.5],
    productDetailList:[['애플 매출의 핵심!','전세계 450B $의 스마트폰 시장에서 애플은 무려 196B $ 차지! (43.6%)','2021년 4분기 스마트폰 출하량 22%로 1위!'],
                       ['에어팟, 애플티비, 애플워치, 비츠, 홈팟미니, 아이팟 터치 등을 포함하는 제품군이에요.'],
                       ['아이패드 프로, 아이패드 에어, 아이패드 미니 등을 포함하는 제품군이에요.','전체 태블릿 시장에서 애플은 출하량으로만 연간 30~40%를 차지해요!','높은 애플의 아이패드 가격을 고려하였을 때 매출로 따진 시장 비율은 60%'],
                       ['애플케어, 클라우드,애플페이와 디지털 서비스 등을 포함하는 제품군이에요.'],
                       ['데스크탑 맥 제품과,노트북인 맥북 프로, 맥북 에어 등을 포함하는 제품군이에요.']],

    //News
    newsImageList: ['https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2022%2F06%2FMost-profit-made-companey-in-the-world-info-00.jpeg?q=90&w=1400&cbr=1&fit=max',
                   'https://img.hankyung.com/photo/202206/01.30396377.1.jpg'],
    newsLinkList: ['https://hypebeast.kr/2022/6/most-profit-made-companey-in-the-world-info',
                   'https://www.hankyung.com/finance/article/202206227299i'],
    newsTitleList: [' 애플도 구글도 아니다, 전 세계에서 가장 많은 순익을 올린 기업은 어디? ',
                    '중국에서 날아온 낭보…활짝 웃은 애플'],
    newsContentsList: ['2022년 들어 전 세계에서 가장 많은 순이익을 올린 기업은 어디일까?',
                       'UBS가 애플(AAPL)에 대해 ‘매수’ 의견을 유지했습니다'],
    newsDateList: ['2022-06-22',
                   '2022-06-22'],
    newsJournalList: ['한경글로벌마켓',
                      '하이프비스트'],

    //Expert
    expertStrongSell: 0,
    expertSell: 0,
    expertHold: 6,
    expertBuy: 21,
    expertStrongBuy: 11,
    targetPriceLow: 160,
    targetPriceAvg: 193.5,
    targetPriceHigh:225,
};

export async function getCurrentPrice(tickerInput) {
  const request = await axios.get('http://3.38.30.153/api/stockpricehistory/'+tickerInput)
    .then(response => response.data)
  
  if (request.count > 0) {
    return {
      type: GET_CURRENT_PRICE,
      response: request,
      status: "success",
      ticker: tickerInput
    }
  }
}

const stock = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_PRICE:
      return {
        ...state,
        currentPrice: action.response.results[0].price_close,
      };
    case CHANGE_PLOT_PERIOD:
      return {
        ...state,
        plotPeriod: action.period,
      }
    default:
      return state;
  }
};

export default stock;