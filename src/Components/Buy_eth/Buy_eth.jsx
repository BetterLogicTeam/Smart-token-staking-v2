import React from "react";
import "./Buy_eth.css";

export default function Buy_eth() {
  return (
    <div className="main_buy_eth" id="how_to_buy" style={{marginTop:"25px"}}>
      <div className="container">
        <h2 className="main_heading_buy lower_tkn">
          How To Buy $MART ? <span className="outline_eth"></span>
        </h2>

        <div className="text-center">
        <p>If you missed out on previous presale, you could join our presale and buy 1 $MART token from a price ranging from 0.20$ to 0.30$. You don't want to miss out again, so take this chance and don't let the past repeat itself. Follow the steps below to make a purchase. </p>

        </div>

        

        <div className="row mt-5">
          <div className="col-md-4">
            <div className="buy_main_box_here">
              <h4>01. CONNECT </h4><br></br>
              <ul className=" buy_ul">
                <li>
                You'll need a wallet to participate; you can download MetaMask or Trust wallet. Open this page in the wallet's Dapp browser, then tap on the connect button and tap MetaMask. If you prefer using other wallet apps, mobile phone wallets or browsers, you’re equally covered! Just connect via the Wallet Connect option. 
                </li><br></br>
                {/* <li>
                  Using the BNB in your MetaMask or Trust Wallet, it’s an easy
                  token swap
                </li><br></br>
                <li>
                  Keep a small amount of BNB in your wallet to cover the minimal
                  gas fee.
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-md-4  mt-3 mt-md-0">
            <div className="buy_main_box_here">
              <h4>02. PURCHASE </h4><br></br>
              <ul className=" buy_ul">
                <li>
                Buy with BNB on the Binance Smart Chain. Enter the quantity of BNB tokens to buy and click the purchase button. A quick reminder to keep enough BNB in your wallet to pay gas charges. Your wallet reserves 0.0026BNB (~$1) for GAS expenses to prevent transaction failures. 
                </li><br></br>
                {/* <li>
                Connect your wallet to the BSC network to pay with USDT
                </li><br></br>
                <li>
                Have enough BNB left over to pay the gas fee.
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-md-4  mt-3 mt-md-0">
            <div className="buy_main_box_here">
              <h4>03. CLAIM  </h4><br></br>
              <ul className=" buy_ul">
                <li>
                After the final presale round, you'll have the exclusive chance to claim your tokens before we launch on Pancake swap and other centralized exchanges. We'll notify you of claiming and launch dates. Please note that note that claiming and trading $MART is possible ONLY via Binance network. 
              Let’s moon together!
                </li><br></br>
                {/* <li>
                Connect your wallet to BSC chain and select USDC as a payment option
                </li><br></br>
                <li>
                Make sure you have BNB  to pay the gas fee.
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="d-flex justify-content-center mt-5">

                <button onClick={() => window.location.href = "#BuyNow"} className="button-24">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
}
