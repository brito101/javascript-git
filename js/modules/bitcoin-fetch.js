export default function bitcoinFetch() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPrice = document.querySelector(".btc-price");
      btcPrice.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((error) => {
      console.log(error);
    });
}
