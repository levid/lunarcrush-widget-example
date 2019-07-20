# lunarcrush-widget-example

This repository contains example code demonstrating how to use LunarCRUSH embeddable widgets.
  
### How To Embed Widgets

Widgets can be embedded using a standard iframe tag with a src endpoint of: https://lunarcrush-widgets.firebaseapp.com. Specific widgets can be rendered using one of the following url paths:
- https://lunarcrush-widgets.firebaseapp.com/galaxy
- https://lunarcrush-widgets.firebaseapp.com/news
- https://lunarcrush-widgets.firebaseapp.com/social
- https://lunarcrush-widgets.firebaseapp.com/metrics

You will need to sign up for a LunarCRUSH free or PRO account and create an API key [here](https://lunarcrush.com/settings/api) to be able to render the widgets. 

#### Basic example:

```<iframe name="Galaxy Score" id="galaxy-score-widget" src="https://lunarcrush-widgets.firebaseapp.com/galaxy?key={API_KEY_HERE}&symbol=BTC&interval=1%20Week" frameborder="0" border="0" cellspacing="0" scrolling="no"></iframe>```

#### For more examples how to embed multiple charts see: 
- [index.html](https://github.com/levid/lunarcrush-widget-example/blob/master/public/index.html)
- [widgets.html](https://github.com/levid/lunarcrush-widget-example/blob/master/public/widgets.html)

### Configuration Options

It is possible to configure the widgets using url params appended to the iFrame src url. For example:
  
  * ?key={API_KEY_HERE} - Required to render the widgets.
  * ?symbol=BTC - Change the symbol that is displayed in the widgets.
  * ?interval=1 Week - Change the time interval being displayed in the charts (default is 1 Week).
  * ?price_correlation=true|false - Show a price line in addition to the selected metric
  * ?metric=galaxy_score - Change the timeseries metric being displayed (Metric widget only).
  * ?theme={See themes section for instructions}

### Themes

Coming soon...

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