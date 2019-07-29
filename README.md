# lunarcrush-widget-example

This repository contains example code demonstrating how to use LunarCRUSH embeddable widgets.

### Running the example
```
$ python -m SimpleHTTPServer 5000
Open http://localhost:5000 in a browser
```

### How To Embed Widgets

Widgets can be embedded using a standard iframe tag with a src endpoint of: https://lunarcrush-widgets.firebaseapp.com. Specific widgets can be rendered using one of the following url paths:
- /galaxy
- /news
- /social
- /metrics

You will need to sign up for a LunarCRUSH free or PRO account and create an API key [here](https://lunarcrush.com/settings/api) to be able to render the widgets. 

#### Basic example:

```<iframe name="Galaxy Score" id="galaxy-score-widget" src="https://lunarcrush-widgets.firebaseapp.com/galaxy?key={API_KEY_HERE}&symbol=BTC&interval=1%20Week" frameborder="0" border="0" cellspacing="0" scrolling="no"></iframe>```

#### For more examples how to embed multiple charts see: 
- https://github.com/levid/lunarcrush-widget-example/blob/master/index.html
- https://github.com/levid/lunarcrush-widget-example/blob/master/widgets.html

### Configuration Options

It is possible to configure the widgets using url params appended to the iFrame src url. For example:
  
  * ?key={API_KEY_HERE} - Required to render the widgets.
  * ?symbol=BTC - Change the symbol that is displayed in the widgets.
  * ?interval=1 Week - Change the time interval being displayed in the charts (default is 1 Week).
  * ?price_correlation=true|false - Show a price line in addition to the selected metric
  * ?metric=galaxy_score - Change the timeseries metric being displayed (Metric widget only).
  * ?theme={See themes section for instructions}

### Themes

Theming is very basic at this point but it is possible to configure primary and secondary colors used throughout the widgets as well as line colors in the Metrics widget.

Dark theme example: https://lunar-widget-test.firebaseapp.com/widgets.html

Light theme example: https://lunar-widget-test.firebaseapp.com/widgets-light.html

#### Creating a custom theme

```
var theme = {
  type: 'dark',
  common: { black: 'rgba(0, 0, 0, 1)', white: 'rgba(255, 255, 255, 1)' },
  background: { paper: '#202327', default: '#0e1722' },
  primary: {
    light: 'rgba(126,211,32, 1)',
    main: 'rgba(126,211,32, 1)',
    dark: 'rgba(126,211,32, 1)'
  },
  secondary: {
    light: 'rgba(255,39,0, 1)',
    main: 'rgba(255,39,0, 1)',
    dark: 'rgba(255,39,0, 1)'
  },
  error: {
    light: 'rgba(229, 115, 115, 1)',
    main: 'rgba(244, 67, 54, 1)',
    dark: 'rgba(211, 47, 47, 1)'
  },
  text: {
    primary: 'rgba(255, 255, 255, 0.87)',
    secondary: 'rgba(209, 209, 209, 0.54)',
    disabled: 'rgba(134, 134, 134, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  typography: {
    fontFamily: "'Uniform', sans-serif",
    fontWeight: 300
  },
  poweredByTextColor: '#69d8ee',
  loadingIndicatorColor: 'rgba(133, 139, 146, 1)',
  metricsWidget: {
    yAxisTitleColor: '#fff',
    yAxisLabelColor: 'rgba(255,255,255,0.5)',
    xAxisLineColor: '#3c3f42',
    xAxisTickColor: '#3c3f42',
    xAxisLabelColor: 'rgba(255,255,255,0.5)',
    pointLabelColor: '#fff',
    gridLineColor: '#3c3f42',
    tooltipBackgroundColor: '#000',
    tooltipTextColor: 'rgba(255,255,255,0.8)',
    priceCorrelationLineColor: '#69d8ee',
    positiveAreaChartColor: 'rgba(126,211,32, 0.2)',
    positiveLineColor: 'rgba(126,211,32, 1)',
    negativeAreaChartColor: 'rgba(255,39,0, 0.2)',
    negativeLineColor: 'rgba(255,39,0, 1)',
  },
  galaxyScoreWidget: {
    titleColor: '#fff',
    trackBackgroundColor: 'rgba(255,255,255,0.1)',
    bullishBarColor: '#7ed31f',
    neutralBarColor: 'rgba(133, 139, 146, 0.5)',
    bearishBarColor: 'rgba(244, 67, 54, 1)',
    bullishTextColor: '#7ed31f',
    neutralTextColor: 'rgba(133, 139, 146, 1)',
    bearishTextColor: 'rgba(244, 67, 54, 1)',
    separatorColor: '#fff',
    scoreTextColor: '#fff',
    infoIconColor: 'rgba(133, 139, 146, 1)',
    tooltipBackgroundColor: '#000',
    tooltipTextColor: '#fff'
  }
}

var serializedTheme = window.btoa(JSON.stringify(theme));

// Example of passing the serialized theme as a query param into a widget.
<iframe name="Galaxy Score" id="galaxy-score-widget" src=`https://lunarcrush-widgets.firebaseapp.com/galaxy?key=${API_KEY_HERE}&theme=${serializedTheme}` frameborder="0" border="0" cellspacing="0" scrolling="no"></iframe>
```

#### Using a custom CSS stylesheet

It is also possible to pass in your own custom stylesheet file to override page and component styles inside the widget iframe. This will need to be hosted on a public domain to make it accessible to the widget.

```
/* styles.css */
/* Include custom fonts */
@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);

/* Override global body styles */
html,
body {
	margin: 0;
	padding: 0;
	overflow: hidden;
	background-color: #0e1722;
	color: #fff;
	font-family: 'Roboto', sans-serif;
}

/* Override link colors */
a {
	color: #69d8ee;
	text-decoration: none;
}

/* Override specific UI element styles */
.loading-container {
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	height: 100vh;
  background-color: #fff
}

// Example of passing the custom stylesheet as a query param into a widget.
<iframe name="Galaxy Score" id="galaxy-score-widget" src=`https://lunarcrush-widgets.firebaseapp.com/galaxy?key=${API_KEY_HERE}&stylesheet=https://yourdomain.com/styles.css` frameborder="0" border="0" cellspacing="0" scrolling="no"></iframe>

```

### Communicating Between Widgets

Coming soon...

### Current Widgets

* Galaxy Score Widget
* News Article Widget
* Feed Widget
  - News articles
  - Tweets
  - Reddit Posts
* Metrics Widget
  - Supported Metrics:
    - average_sentiment
    - correlation_rank (Correlation Rank)
    - galaxy_score (Galaxy Score)
    - market_cap (Market Cap)
    - market_cap_rank (Market Cap Rank)
    - news_articles (News Volume)
    - popular_tweet (Popular Tweets)
    - price_btc (Price BTC)
    - price_score (Price Score)
    - priceclose (Price Close)
    - pricehigh (Price High)
    - pricelow (Price Low)
    - priceopen (Price Open)
    - reddit_comment (Reddit Comments)
    - reddit_post (Reddit Posts)
    - reddit_post_reddit_comment (Reddit Volume)
    - search_average (Search Volume)
    - social_impact_score (Social Impact Score)
    - social_score (Social Volume)
    - tweet (Twitter Volume)
    - tweet_sentiment1 (Very Bearish Sentiment)
    - tweet_sentiment2 (Bearish Sentiment)
    - tweet_sentiment2_tweet_sentiment (Negative Sentiment)
    - tweet_sentiment3 (Neutral Sentiment)
    - tweet_sentiment4 (Bullish Sentiment)
    - tweet_sentiment5 (Very Bullish Sentiment)
    - tweet_sentiment4_sentiment5 (Positive Sentiment)
    - tweet_sentiment_impact1 (Very Bearish Sentiment Impact)
    - tweet_sentiment_impact2 (Bearish Sentiment Impact)
    - tweet_sentiment_impact3 (Neutral Sentiment Impact)
    - tweet_sentiment_impact4 (Bullish Sentiment Impact)
    - tweet_sentiment_impact5 (Very Bullish Sentiment Impact)
    - tweet_spam (Spam Volume)
    - volatility (Volatility)
    - volumefrom (Market Volume Open)
    - volumeto (Market Volume Close)
