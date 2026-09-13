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
function calculateWeight(position, PortfolioVal) {
    return marketVal(position) / PortfolioVal;
}
;
const PNL = portfolio.map(calculatePNL);
const weights = portfolio.map((position) => calculateWeight(position, totalVal));
console.log(weights);
console.log(PNL);
;
function positionAnalysis(position) {
    return { ticker: position.ticker, marketValue: marketVal(position),
        pnl: calculatePNL(position), weight: calculateWeight(position, totalVal) };
}
;
const positionReport = portfolio.map(positionAnalysis);
console.table(positionReport);
const largestPosition = positionReport.reduce((largest, current) => {
    if (current.marketValue > largest.marketValue) {
        return current;
    }
    return largest;
});
console.log("Largest position:", largestPosition.ticker);
console.log("Market value:", largestPosition.marketValue);
//total unrealized PNL
const totalPNL = positionReport.reduce((sum, current) => {
    return sum + current.pnl;
}, 0);
console.log("Total unrealized PNL:", totalPNL);
//calculate total initial portfolio investment 
const costBasis = portfolio.reduce((sum, current) => {
    return sum + current.shares * current.averagePurchasePrice;
}, 0);
console.log("Initial Investment:", costBasis);
//calculate total percentage return 
const totalYield = (totalPNL / costBasis) * 100;
console.log("Portfolio return:", `${totalYield.toFixed(2)}%`);
//# sourceMappingURL=index.js.map