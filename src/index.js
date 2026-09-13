"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const portfolio = [{ ticker: 'AAPL', shares: 10, currentPrice: 230,
        averagePurchasePrice: 190 }, { ticker: 'NVDA', shares: 5, currentPrice: 180, averagePurchasePrice: 140 },
    { ticker: 'GOOGL', shares: 8, currentPrice: 240, averagePurchasePrice: 200 }];
function marketVal(position) {
    return position.shares * position.currentPrice;
}
;
const marketValue = portfolio.map(marketVal);
const totalVal = marketValue.reduce((sum, val) => sum + val, 0);
console.log(marketValue);
console.log(totalVal);
function calculatePNL(position) {
    return (position.currentPrice - position.averagePurchasePrice) * position.shares;
}
;
function calculateWeight(position) {
    return marketVal(position) / totalVal;
}
;
const PNL = portfolio.map(calculateWeight);
const Weights = portfolio.map(calculateWeight);
console.log(Weights);
console.log(PNL);
//# sourceMappingURL=index.js.map