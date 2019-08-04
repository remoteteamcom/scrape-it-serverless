'use strict';

const safeJsonStringify = require('safe-json-stringify');
const scrapeIt = require("scrape-it");

module.exports.scrapeit = async (event, context) => {
  console.log(event.body)

  let body = JSON.parse(event.body);

  let data = await scrapeIt(body.url, body.parser);

  return {
    statusCode: 200,
    body: safeJsonStringify(data.data),
  };
};
