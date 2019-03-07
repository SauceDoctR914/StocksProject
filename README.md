## 2Stoc
2Stoc is a note Stock Information App. On the homepage the user can view general world news and the headlining news story, stock prices, stock ticker symbols, percent change, and the current time and date. Individual stock pages show specific information, charts, and news pertaining to that particular stock.

<img width="996" alt="screen shot 2019-03-06 at 7 20 30 pm" src="https://user-images.githubusercontent.com/32119313/53923099-f8584900-4044-11e9-820e-ce36a46f3898.png">

# Available Scripts

Frontend built with React.Js and Redux for state management. User Interface designed with custom CSS styling.

The main stock data and information comes directly from the IEX trading API. Date on the homepage created using Moment.js. Front page news from  https://newsapi.org/ API. Individual company/stock news from aThe Multi-page and dynamic links created using React Router and WithRouter. Stock charts built using react-stockcharts integrated with D3.js. Algorithm for determining buy recommendation for stocks created using data from https://www.alphavantage.co/ API. 


# To install frontend dependencies run
npm install

# To open in browser run
npm start

# Usage Example

A user can click anywhere on the news boxes on the front page and will be redirected to the financial times news website. On the top of the front page the current time and date is displayed along with the app title. On the right of the page are the stock ticker symbols, along with their current prices and change percentages. The percentage change is listed in green if it is positive, and red for negative. At the top of the column of stock tickers, you can search for a particular stock/company by its symbol. 

<img width="914" alt="screen shot 2019-03-06 at 7 13 17 pm" src="https://user-images.githubusercontent.com/32119313/53922993-8da70d80-4044-11e9-90e2-8702e3f021c5.png">

After clicking on a stock, the user is then redirected to that stock's company page. At the top is the name of the company, the current stock price (updated every second), and the buy recommendation indicator. The company page has two main graphs, the first of which is a candlestick chart, which can be zoomed in using the mouse's scroll from single month intervals to daily intervals. The second graph contains information on the stock's volume, the MACD indicator, and exponential moving averages. 



<img width="649" alt="screen shot 2019-03-06 at 7 15 11 pm" src="https://user-images.githubusercontent.com/32119313/53923015-a4e5fb00-4044-11e9-8902-89964020fdcf.png">
Below the charts we have the company information and several relevant statistics. Also shown are news articles that pertain directly to that particular company, their headline, and date published. Any of the articles can be clicked on and redirected to the article's source.


# Contact
Gavin Sokolof - sokolofg@gmail.com

