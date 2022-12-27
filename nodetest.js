const https = require("https");

function runTest(supstr) {
  const titles = [];
  https
    .get(
      `https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=${supstr}`,
      (resp) => {
        let data = "";

        // A chunk of data has been received.
        resp.on("data", (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          jsonData = JSON.parse(data);
          jsonData.data.map((movie) => {
            console.log(movie);
            titles.push(movie.Title);
          });

          console.log(titles);
        });
      }
    )
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
}

runTest("spiderman");
