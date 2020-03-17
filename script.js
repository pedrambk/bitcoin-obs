// Show the current Bictoin price updating every 3 seconds
setInterval(() => {
  $.getJSON('https://api.coindesk.com/v1/bpi/currentprice.json').
  done(data => {
    // console.log(data.bpi.USD);
    $('#btcPrice').html(data.bpi.USD.rate);
  }).

  fail((jqxhr, textStatus, error) => {
    const err = `${textStatus}, ${error}`;
    console.error(`Request Failed: ${err}`);
  });

}, 3000);