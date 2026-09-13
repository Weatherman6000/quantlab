interface Position { 
    ticker: string,
    shares: number,
    currentPrice: number,
    averagePurchasePrice: number,
};

const portfolio: Position[] = [{ticker: 'AAPL', shares: 10, currentPrice: 230,
     averagePurchasePrice: 190}, {ticker: 'NVDA', shares: 5, currentPrice: 180, averagePurchasePrice: 140}, 
    {ticker: 'GOOGL', shares: 8, currentPrice: 240, averagePurchasePrice: 200}];

function marketVal(position: Position) { 
    return position.shares * position.currentPrice 
};

const marketValue = portfolio.map(marketVal);
const totalVal = marketValue.reduce((sum , val) =>  sum + val, 0);

console.log(marketValue) ;
console.log(totalVal);

