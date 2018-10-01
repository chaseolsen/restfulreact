import React from 'react';

export default class StockChart extends React.Component {

constructor(){
  super();
  this.state = {
  }
}

componentWillMount(){
  console.log('Component will mount.');
}

componentDidMount(){
  console.log('Component mounted!');
    // var headElem = document.getElementsByClassName('something')[0];
    //
    // var tradingWidgetSource = document.createElement('script');
    // tradingWidgetSource.type = "text/javascript";
    // tradingWidgetSource.src = "https://d33t3vvu2t2yu5.cloudfront.net/tv.js";
    // headElem.appendChild(tradingWidgetSource);
    //
    // var tradingWidgetInitCode = document.createElement('script');
    // tradingWidgetInitCode.type = "text/javascript";
    // tradingWidgetInitCode.innerHTML = 'new TradingView.widget({"autosize": true,"symbol": "BITFINEX:BTCUSD","interval": "D","timezone": "America/New_York","theme": "White","style": "1","locale": "en","toolbar_bg": "#f1f3f6","enable_publishing": false,"hide_top_toolbar": true,"save_image": false,"hideideas": true});';
    // headElem.appendChild(tradingWidgetInitCode);

}

componentWillUnmount(){
  console.log('UNMOUNTED!');
}

  render() {
    return (
      <div>
      <h1>StockChart Here</h1>
      <h2 className="Chart Component"></h2>
      </div>
    );
  }
}
