# scrape-it on ASW Lambda
This is a serverless application that runs [scrape-it](https://github.com/IonicaBizau/scrape-it) on AWS Lambda.

## Install

```
git clone git@github.com:remoteteamcom/scrape-it-serverless.git
cd scrape-it-serverless
yarn
serverless deploy
```

## Usage

```
curl -X POST -H 'Content-type: application/json' --data '{"url": "https://github.com/muhammet", "parser": { "name": ".vcard-names .p-name" , "bio": ".user-profile-bio div" , "avatar": { "selector": ".u-photo img" , "attr": "src" } }}' https://CHANNGE-ME.execute-api.us-east-1.amazonaws.com/prod/scraper/scrapeit
```

## NOTES

* Big thanks to [Ionică Bizău (Johnny B.)](https://github.com/IonicaBizau) for creation amazing packge [scrape-it](https://github.com/IonicaBizau/scrape-it)