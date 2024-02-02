import React from "react";
import "./Tokennomics.css";
import { FaArrowRightLong } from "react-icons/fa6";
import circule from "../Assets/circle.svg";

export default function Tokennomics() {
  const handleCopyAddress = () => {
    // Find the text element
    const addressText = document.querySelector(".tokn_add");

    // Create a textarea element to copy the text
    const textarea = document.createElement("textarea");
    textarea.value = addressText.innerText;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    document.execCommand("copy");

    // Remove the textarea from the document
    document.body.removeChild(textarea);

    // Optionally, provide user feedback (e.g., alert or tooltip)
    alert("Address copied to clipboard!");
  };

  return (
    <div className="token_nomics_main">
      <div className="container">
        <h6 className="upper_tkn">Tokenomics</h6>
        <h1 className="lower_tkn">Token information</h1>

        {/* <div className="row justify-content-center ">
          <div className="col-md-8">
           <div className="bout_tokn">
              <p className="text-truncate tokn_add mb-0">
                Token Contract Will Be Avaialble After Launch
              </p>
              <button className="clr_box" onClick={handleCopyAddress}>
                Copy
              </button>
            </div>
          </div>
        </div> */}

        <div className="row justify-content-center mt-4 new_posiss">
          <div className="col-md-10">
            <div className="box_token_info">
              <div className="row justify-content-between">
                <div className="col-md-6">
                  <div className="text_info">
                    <h5>presale allocation</h5>
                    <p>
                      Facilitates a decentralized distribution during the public
                      launch.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mt-3 mt-md-0 ">
                  <div className="proggress_box">
                    <h1 className="pro_head text-end">
                      6,000,000/{" "}
                      <span style={{ fontSize: "16px" }}>Tokens 60%</span>
                    </h1>
                    <div className="progress_bar">
                      <div className="inner_pro"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-10 mt-3">
            <div className="box_token_info">
              <div className="row justify-content-between">
                <div className="col-md-6">
                  <div className="text_info">
                    <h5>Liquidity</h5>
                    <p>To Fortify trading </p>
                  </div>
                </div>
                <div className="col-md-6 mt-3 mt-md-0 ">
                  <div className="proggress_box">
                    <h1 className="pro_head text-end">
                      1,000,000/{" "}
                      <span style={{ fontSize: "16px" }}>Tokens 10%</span>
                    </h1>
                    <div className="progress_bar">
                      <div className="inner_pro" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 mt-3">
            <div className="box_token_info">
              <div className="row justify-content-between">
                <div className="col-md-6  ">
                  <div className="text_info">
                    <h5>Staking Reward</h5>
                    <p>For incentivizing staking and liquidity provision.</p>
                  </div>
                </div>
                <div className="col-md-6  mt-3 mt-md-0 ">
                  <div className="proggress_box">
                    <h1 className="pro_head text-end">
                      1,500,000/{" "}
                      <span style={{ fontSize: "16px" }}>Tokens 15%</span>
                    </h1>
                    <div className="progress_bar">
                      <div className="inner_pro" style={{ width: "15%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 mt-3">
            <div className="box_token_info">
              <div className="row justify-content-between">
                <div className="col-md-6">
                  <div className="text_info">
                    <h5>Partnerships and intrations</h5>
                    <p>
                      For potential partnerships, collaborations, and
                      integrations
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mt-3 mt-md-0 ">
                  <div className="proggress_box">
                    <h1 className="pro_head text-end">
                      300,000/{" "}
                      <span style={{ fontSize: "16px" }}>Tokens 3%</span>
                    </h1>
                    <div className="progress_bar">
                      <div className="inner_pro" style={{ width: "3%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 mt-3">
            <div className="box_token_info">
              <div className="row justify-content-between">
                <div className="col-md-6">
                  <div className="text_info">
                    <h5>Marketing and Community Engagement</h5>
                    <p>Funds marketing campaigns, partnerships, events, etc.</p>
                  </div>
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                  <div className="proggress_box">
                    <h1 className="pro_head text-end">
                      500,000/{" "}
                      <span style={{ fontSize: "16px" }}>Tokens 5%</span>
                    </h1>
                    <div className="progress_bar">
                      <div className="inner_pro" style={{ width: "5%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 mt-3">
            <div className="box_token_info">
              <div className="row justify-content-between">
                <div className="col-md-6">
                  <div className="text_info">
                    <h5>Incentive Programs</h5>
                    <p>
                      Allocate 2% for periodic incentive programs or events.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                  <div className="proggress_box">
                    <h1 className="pro_head text-end">
                      200,000/{" "}
                      <span style={{ fontSize: "16px" }}>Tokens 2%</span>
                    </h1>
                    <div className="progress_bar">
                      <div className="inner_pro" style={{ width: "2%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 mt-3">
            <div className="box_token_info">
              <div className="row justify-content-between">
                <div className="col-md-6">
                  <div className="text_info">
                    <h5>Team and Product developments</h5>
                    <p>
                      Rewards the core team and supports ongoing development,
                      enhancements, and security.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mt-3 mt-md-0 ">
                  <div className="proggress_box">
                    <h1 className="pro_head text-end">
                      500,000/{" "}
                      <span style={{ fontSize: "16px" }}>Tokens 5%</span>
                    </h1>
                    <div className="progress_bar">
                      <div className="inner_pro" style={{ width: "5%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <img className='cir_pic' src={circule} alt="" /> */}

        <div className="row justify-content-center mt-4">
          {/* <div className="col-md-5 ">
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
          </div> */}

          {/* <div className="col-md-5 mt-4 mt-md-0 ">
            <div className="white_paper_box">
              <div className="row">
                <div className="col-10">
                  <div>
                    <h4 className="names_re">AUDIT report </h4>
                    <p>
                    The smart contract has been audited by blockchain security specialist Solid Proof - Coming soon
                    </p>
                  </div>
                </div>
                <div className="col-2 circle_box">
                  <div className="cir">
                    <FaArrowRightLong style={{ color: "white" }} />
                  </div>
                </div>
              </div>
            </div>
          </div> */}





          {/* <div className="col-md-5 mt-3 mt-md-0 ">
            <div className="white_paper_box">
              <div>
                <h4 className="names_re">AUDIT report</h4>
                <p>
                  The smart contract has been audited by blockchain security
                  specialist Solid Proof
                </p>
              </div>
              <div className="cir">
                {" "}
                <FaArrowRightLong style={{ color: "white" }} />
              </div>
            </div>
          </div> */}


        </div>
      </div>
    </div>
  );
}
