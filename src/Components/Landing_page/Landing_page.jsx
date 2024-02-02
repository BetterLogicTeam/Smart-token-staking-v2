import React, { useEffect, useState } from "react";
import "./Landing_page.css";
import Tab from "../Tab_page/Tab_page";
import Web3 from "web3";
import {
  staking_Contract_ABI,
  staking_Contract_Address,
} from "../Contract/Contract";
import { useAccount } from "wagmi";

import { FaArrowRightLong } from "react-icons/fa6";

export default function Landing_page({setRaise}) {
  const [getTokenToUSDT, setgetTokenToUSDT] = useState(0);
  const [get_tokeSold, setget_tokeSold] = useState(0);
  const [get_maxTokeninPresale, setget_maxTokeninPresale] = useState(0);
  const { address } = useAccount();
  const [phaseNewPrice, setPhasePrice] = useState(0);
  const [NextphaseNewPrice, setNextPhasePrice] = useState(0);
  const [CurrentStage, setCurrentStage] = useState(null);
  const [Rratio,setRatio]=useState(0);

  const [IsClaim, setIsClaim] = useState(false);
  const [Claimable, setClaimable] = useState(0);


  const webSupply = new Web3(
    "https://1rpc.io/bnb"

    // https://bsc-testnet.publicnode.com

    // https://1rpc.io/bnb
  );

  const getValue = async () => {
    try {
      let ContractOf = new webSupply.eth.Contract(
        staking_Contract_ABI,
        staking_Contract_Address
      );
      let tokenToUSDT = await ContractOf.methods.TokenPricePerUsdt().call();
      tokenToUSDT = webSupply.utils.fromWei(tokenToUSDT.toString());
      setgetTokenToUSDT(tokenToUSDT);

      let TokenSold = await ContractOf.methods.TokenSold().call();
      TokenSold = webSupply.utils.fromWei(TokenSold.toString());
      // i m chaing this

      // TokenSold = Number(71458.127) + Number(TokenSold);

      // To this
      TokenSold = Number(TokenSold);


      setRaise( Intl.NumberFormat().format(Number(TokenSold)*Number(0.2)) )



      // TokenSold = Intl.NumberFormat().format(TokenSold);
      setget_tokeSold(TokenSold);

      let maxTokeninPresale = await ContractOf.methods
        .maxTokeninPresale()
        .call();
      maxTokeninPresale = webSupply.utils.fromWei(maxTokeninPresale.toString());
      // console.log("maxToken",maxTokeninPresale);


      // console.log("width",parseInt(Number(TokenSold) / Number(maxTokeninPresale) / 100,));

      let CurrentStage = await ContractOf.methods.currentPhase().call();
      // currentPhasePricee = currentPhasePricee.price;
      // console.log("CurrentStage",CurrentStage);
      setCurrentStage(CurrentStage);
      // getCurrentPhasePrice

      // Get Current Stage Price
      let phases = await ContractOf.methods.phases(CurrentStage).call();
      // console.log(phases);
      let phasePrice= phases.price / 1e18;
      let newPhase = (1/phasePrice).toFixed(2);
      setPhasePrice(newPhase);
      // console.log("Current phase price",newPhase);

      // 1$ = 5 token
      //  1 token = 1/5

      // setRaise( Intl.NumberFormat().format(Number(TokenSold)*Number(phasePrice)) )



      //Get Next Stage Price
      let SCurrentStage = Number(CurrentStage) + 1;
      // console.log("S current",SCurrentStage);
      let Nextphases = await ContractOf.methods.phases(SCurrentStage).call();
      // console.log(Nextphases);
      let NextphasePrice= Nextphases.price  / 1e18;
      let TNextPhasePrice = (1 / NextphasePrice).toFixed(2);
      setNextPhasePrice(TNextPhasePrice);
      // console.log("Next phase price",TNextPhasePrice);


      //





      // Remaining token
      maxTokeninPresale = Number(maxTokeninPresale) - Number(TokenSold);
      // console.log("Remaining token in preslse",maxTokeninPresale);
      setget_maxTokeninPresale(maxTokeninPresale);
    } catch (error) {
      console.log(error);
    }
  };


  //  function getCurrentPhasePrice() internal view returns (uint256) {
    // return phases[currentPhase].price;
  // }



  const Claim_status = async () => {
    let contractOf = new webSupply.eth.Contract(
      staking_Contract_ABI,
      staking_Contract_Address
    );
    let CanClaim = await contractOf.methods.CanClaim().call();
    // console.log("CanClaim", CanClaim);
    setIsClaim(CanClaim);
    if (address) {
    //  let address = "0x7f269c43BA2BFC891602fc3222c60b2D5c807d56"
      let Claimable = await contractOf.methods.Claimable(address).call();
      Claimable = webSupply.utils.fromWei(Claimable.toString());
      // console.log("Claimable",Claimable);

      if (Claimable > 0) {
        setClaimable(Claimable);
      } else {
        setClaimable(0);
      }
    }
  };

  useEffect(() => {
    Claim_status();
  }, []);







  useEffect(() => {
    getValue();
  }, [address]);

  // Set get_maxTokeninPresale to 6,000,000
  let Gget_maxTokeninPresale = 6000000; //MaxToken in presale
  if (get_maxTokeninPresale !== 0) {
    const ratio = (get_tokeSold / Gget_maxTokeninPresale)*100;
    // setRatio(ratio);
  } else {
    // console.log("Cannot calculate ratio, getMaxTokeninPresale is zero");
  }


  // Raised

  const formattedValue = Intl.NumberFormat().format(get_tokeSold * 0.2);





  return (
    <div className="main_div_landing">
      <h1 className="main_heading_landing" style={{color:"#1199FA"}}>Participate $MART Presale</h1>
      <div className="main_landing">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 this_ha">
              <div className="landing_box">
                <div className="row">
                  <div className="col-6">
                    <div className="info_pre">
                      <h6>Current stage </h6>
                      <h2>Stage {Number(CurrentStage) + 1}</h2>
                    </div>
                  </div>
                  <div className="col-6 text-end">
                    <div className="info_pre">
                      <h6>Remaining Tokens </h6>
                      <h2>{Intl.NumberFormat().format(get_maxTokeninPresale)} $mart</h2>
                    </div>
                  </div>
                </div>
                <div className="progress_bar">
                <div
                className="inner_pro"
                style={{
                  width: `${(get_tokeSold / get_maxTokeninPresale) * 100}%`,
                }}
              ></div>
                  {/* <div className="inner_pro" style={{
                    width: parseInt(Number(get_tokeSold) /
                    Number(get_maxTokeninPresale) /
                    100,)
                  }}></div> */}
                </div>
                <div className="row mt-3">
                  <div className="col-6">
                    <div className="info_pre">
                      <h6>Next stage price </h6>
                      <h2>{NextphaseNewPrice}</h2>
                    </div>
                  </div>
                  <div className="col-6 text-end">
                    <div className="info_pre">
                      <h6>Total Token Sold </h6>
                      <h2>{Intl.NumberFormat().format(get_tokeSold)}</h2>
                    </div>
                  </div>
                </div>
                <div className="buy_br">
                  <h5>Buy before price increase!</h5>
                </div>
                <div className="rate mt-4">
                  <h4>$ {phaseNewPrice}= 1 $mart</h4>

                  {/* <h4>$1= {getTokenToUSDT} $mart</h4> */}


                </div>

                <div className="text-center text-white" style={{fontFamily:"'Inter', sans-serif;"}} >
                   <h6 className="span-text"  style={{fontSize:"20px",fontFamily:"'Inter', sans-serif;"}}>Your Purchased $mart : {Claimable} </h6>
                </div>








                <div className="buy_chain_box">
                  <Tab />
                </div>
                {/* <div className='bg_landing'></div> */}
              </div>


            </div>

            <div className="row justify-content-center mt-4">
          <div className="col-md-5 ">
            <div className="white_paper_box">
              <div className="row">
                <div className="col-10">
                  <div>
                    <h4 className="names_re">White paper</h4>
                    <p>
                    Download our whitepaper to get a detailed
                  understanding of smartstaking
                    </p>
                  </div>
                </div>
                <div className="col-2 circle_box">
                  <div className="cir">
                    <a href="https://smartstaking.io/whitepaper.pdf" target="_blank">
                    <FaArrowRightLong style={{ color: "white" }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5 mt-5 mt-md-0 " style={{marginTop:"30px !important"}}>
            <div className="white_paper_box">
              <div className="row">
                <div className="col-10">
                  <div>
                    <h4 className="names_re">AUDIT report </h4>
                    <p>
                    The smart contract has been audited by blockchain security specialist Solid Proof.
                    </p>
                  </div>
                </div>
                <div className="col-2 circle_box">
                  <div className="cir">
                    <a href="https://app.solidproof.io/projects/smart-staking?audit_id=942" target="_blank">
                         <FaArrowRightLong style={{ color: "white" }} />
                    </a>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>

          </div>

          <div className="row mt-5">
          <div className="col-md-4">
            <div className="black_box">
              <h1>6</h1>
              <p>Total Stages</p>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="black_box resvers">
              <h1>${Intl.NumberFormat().format(get_tokeSold * 0.2)}</h1>
              <p>Amount Raised</p>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="black_box">
              <h1>6,000,000</h1>
              <p>Total token availible for sale</p>
            </div>
          </div>
        </div>





          </div>
        </div>
      </div>
    </div>
  );
}
