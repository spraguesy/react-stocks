## Flatiron Stock Exchange

Welcome to the Flatiron Stock Exchange!
Today, you are a broker who is trying to better organize the stocks available on the Flatiron Stock Market.
The database of stocks can be found in a JSON-server, so before you start your React server, make sure to start your JSON-server on `http://localhost:3000/stocks`.

```
TO INSTALL: npm install -g json-server
TO START: json-server --watch db.json
```

After the stocks are fetched, your job is to:
* Render all the stocks onto the page. The styling of how a Stock should look like is already in the `Stock.js` component.
* allow a user to buy a stock and when it is bought, it should be added to `My Portfolio`.
* allow a user to search for/filter out a stock, by both the name of the company and the ticker name.
* allow a user to sort the list of stocks alphabetically by the ticker name as well as by ascending price.
* allow a user to filter stocks based on the type of the stock.

Best of luck!
