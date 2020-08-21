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
- /wordcloud
- /candlestick

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
  * ?price_correlation=true|false - Show a price line in addition to the selected metric (default = false)
  * ?metric=galaxy_score - Change the timeseries metric being displayed (Metric widget only).
  * ?animation=true|false - Show or hide component animations (default = true)
  * ?theme={See themes section for instructions}
  * ?scrolling=true|false (default = true) - Enable or disable scrolling on the widget inner content. Use this if you want to set scrolling=false on the iframe with a fixed height but still want to allow scrolling within the widget.

### Themes

Theming is very basic at this point but it is possible to configure primary and secondary colors used throughout the widgets as well as line colors in the Metrics widget.

Dark theme example: https://lunar-widget-test.firebaseapp.com/widgets.html
Light theme example: https://lunar-widget-test.firebaseapp.com/widgets-light.html

To use our default light or dark theme, simply pass "?theme=light" or "?theme=dark" in the querystring of the embed URL (light is the default theme used to render the widgets).

#### Creating a custom theme

It is also possible to pass a custom theme object into each widget. Here is an example of our default light theme setup. Simply edit any of the color values to customize the theme to your needs and then serialize the object and append it to the query string of the embed URL (example below).

```
var theme = {
  type: 'light',
	common: { black: '#000', white: '#fff' },
	background: { paper: '#fff', default: 'rgba(249, 249, 249, 1)' },
	primary: {
		light: 'rgba(69, 157, 255, 1)',
		main: 'rgba(5, 122, 255, 1)',
		dark: 'rgba(0, 78, 164, 1)',
		contrastText: '#fff'
	},
	secondary: {
		light: 'rgba(69, 118, 255, 1)',
		main: 'rgba(5, 122, 255, 1)',
		dark: 'rgba(0, 41, 151, 1)',
		contrastText: '#fff'
	},
	dark: {
		light: '#0066ff',
		main: '#0044ff',
		// dark: will be calculated from palette.secondary.main,
		contrastText: '#ffcc00'
	},
	error: {
		light: 'rgba(229, 115, 115, 1)',
		main: 'rgba(244, 67, 54, 1)',
		dark: 'rgba(211, 47, 47, 1)',
		contrastText: '#fff'
	},
	contrastThreshold: 3,
	text: {
		primary: 'rgba(0, 0, 0, 0.8)',
		secondary: 'rgba(0, 0, 0, 0.54)',
		disabled: 'rgba(0, 0, 0, 0.38)',
		hint: 'rgba(0, 0, 0, 0.38)'
	},
	backgroundColor: 'rgba(249, 249, 249, 1)',
	poweredByTextColor: '#1a87ff',
	textLinkColor: '#1a87ff',
	loadingIndicatorColor: 'rgba(133, 139, 146, 1)',
	tooltipBackgroundColor: '#000',
	tooltipTextColor: 'rgba(255,255,255,0.8)',
	infoIconColor: 'rgba(133, 139, 146, 1)',
	metricCard: {
		positiveTextColor: '#3aca60',
		neutralTextColor: 'rgba(0, 0, 0, 0.54)',
		negativeTextColor: '#f50057'
	},
	metricsWidget: {
		yAxisTitleColor: '#333333',
		yAxisLabelColor: '#333333',
		xAxisLineColor: '#e6e6e6',
		xAxisTickColor: 'rgb(204, 214, 235)',
		xAxisLabelColor: 'rgba(255,255,255,0.5)',
		pointLabelColor: '#fff',
		gridLineColor: '#e6e6e6',
		tooltipBackgroundColor: '#fff',
		tooltipTextColor: '#000',
		priceCorrelationLineColor: '#1a87ff',
		positiveAreaChartColor: 'rgba(126,211,32, 0.2)',
		positiveLineColor: 'rgba(126,211,32, 1)',
		negativeAreaChartColor: 'rgba(255,39,0, 0.2)',
		negativeLineColor: 'rgba(255,39,0, 1)'
	},
	galaxyScoreWidget: {
		titleColor: '#000',
		trackBackgroundColor: '#ececec',
		bullishBarColor: '#1a87ff',
		neutralBarColor: 'rgba(133, 139, 146, 0.5)',
		bearishBarColor: '#F50057',
		bullishTextColor: '#1a87ff',
		neutralTextColor: '#000',
		bearishTextColor: '#F50057',
		separatorColor: '#fff',
		scoreTextColor: '#000',
		infoIconColor: 'rgba(133, 139, 146, 1)',
		tooltipBackgroundColor: '#000',
		tooltipTextColor: '#000'
	},
	newsWidget: {
		titleColor: '#000',
		articleTitleColor: '#69d8ee',
		articleDescriptionColor: '#000',
		bullishTextColor: '#7ed31f',
		neutralTextColor: 'rgba(133, 139, 146, 1)',
		bearishTextColor: 'rgba(244, 67, 54, 1)',
		dateTextColor: '#ccc',
		thumbnailBackgroundColor: '#69d8ee',
		thumbnailIconColor: '#000'
	},
	socialWidget: {
		titleColor: '#000',
		postDateColor: '#6f7e82',
		postTitleColor: '#ccc',
		bullishTextColor: '#7ed31f',
		neutralTextColor: 'rgba(133, 139, 146, 1)',
		bearishTextColor: 'rgba(244, 67, 54, 1)'
	},
	wordCloudWidget: {
		minFontSize: 15,
		maxFontSize: 60,
		colors: [ '#000', 'rgba(244, 67, 54, 1)', '#7ed31f', '#aaa' ]
	},
	candlestickWidget: {
		yAxisTitleColor: '#333333',
		yAxisLabelColor: '#333333',
		xAxisLineColor: '#e6e6e6',
		xAxisTickColor: 'rgb(204, 214, 235)',
		xAxisLabelColor: 'rgba(255,255,255,0.5)',
		pointLabelColor: '#000',
		gridLineColor: '#e6e6e6',
		tooltipBackgroundColor: '#fff',
		tooltipTextColor: '#000',
		metricLineColor: '#1a87ff',
		highPriceBarColor: 'rgba(104,212, 131,0.8)',
		highPriceLineColor: 'rgba(104,212, 131,0.8)',
		lowPriceBarColor: 'rgba(243,69,80, 0.8)',
		lowPriceLineColor: 'rgba(243,69,80, 0.8)',
		volumeBarColor: 'rgba(133, 139, 146, 1)',
		legendTextColor: 'rgba(255,255,255,0.5)',
		legendTextHoverColor: '#000',
		legendTextHiddenColor: 'rgba(255,255,255,0.5)',
		metricDropdownBackgroundColor: '#000'
	}
}

var serializedTheme = window.btoa(JSON.stringify(theme));

// Example of passing the serialized custom theme as a query param into a widget.
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


### Current Widgets

* Galaxy Score Widget
* News Article Widget
* Feed Widget
  - News articles
  - Tweets
  - Reddit Posts
* Word Cloud Widget
* Candlestick Widget
  - Supported Metrics:
    - market_cap (Market Cap)
	  - galaxy_score (Galaxy Score)
	  - price_score (Price Score)
	  - average_sentiment (Average Sentiment)
	  - social_impact_score (Social Impact Score)
	  - correlation_rank (Correlation Rank)
	  - volatility (Volatility)
	  - social_score (Social Volume)
	  - social_volume (Social Volume)
	  - twitter_volume (Twitter Volume)
	  - reddit_volume (Reddit Volume)
	  - news_volume (News Volume)
	  - search_volume (Search Volume)
	  - spam_volume (Spam Volume)
	  - bullish_sentiment (Bullish Sentiment)
	  - bearish_sentiment (Bearish Sentiment)
* Metrics Widget
  - Supported Metrics:
    - average_sentiment (Average Sentiment)
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
