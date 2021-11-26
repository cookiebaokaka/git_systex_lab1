const request = require("request");
const URL = "https://www.uuu.com.tw";
request(URL, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  } else {
    console.log(error);
  }
});