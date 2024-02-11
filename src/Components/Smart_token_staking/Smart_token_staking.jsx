import React, { useEffect, useState } from "react";
import "./Smart_token_staking.css";
import logo from "../Assets/logoicon.svg";
import bg from "../Assets/bg5.png";
import Stake from "../Stake/Stake";
import { useAccount } from "wagmi";
import Web3 from "web3";
import {
  Token_staking_Contract_ABI,
  Token_staking_Contract_Address,
  Token_staking_Token_Contract_ABI,
  Token_staking_Token_Contract_Address,
} from "../Contract/Contract";
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from "@wagmi/core";
import toast from "react-hot-toast";

export default function Smart_token_staking() {
  const [getInput, setgetInput] = useState("");
  const [plan, setplan] = useState(30);
  const { address } = useAccount();
  const [spinner, setspinner] = useState(false);
  const [tokenBalance, settokenBalance] = useState(0);
  const [claimSpinner, setclaimSpinner] = useState(false);
  const [totalTokenStake, settotalTokenStake] = useState(0);
  const [numberOfTotalStakers, setNumberOfTotalStakers] = useState(0);
  const [Claimable, setClaimable] = useState(0);
  const [checkAPY, setcheckAPY] = useState('92 %');
  const [yourStake, setyourStake] = useState(0);

  const webSupply = new Web3("https://bsc-testnet.public.blastapi.io");

  const Stake_Token = async () => {
    try {
      if (!address) {
        toast.error("Connect Wallet First");
      } else {
        let stakingContractOf = new webSupply.eth.Contract(
          Token_staking_Contract_ABI,
          Token_staking_Contract_Address
        );

        console.log("minimumDeposit");
        let minimumDeposit = await stakingContractOf.methods
          .minimumDeposit()
          .call();
        
        minimumDeposit = webSupply.utils.fromWei(minimumDeposit.toString());

        if (getInput == 0 || getInput < minimumDeposit) {
          toast.error(
            getInput == 0
              ? "Please Enter Token Value"
              : getInput < minimumDeposit
              ? `Please Enter Token Value Greater than ${minimumDeposit}`
              : ""
          );
        } else {
          setspinner(true);
          let values = webSupply.utils.toWei(getInput);
          const { request } = await prepareWriteContract({
            address: Token_staking_Token_Contract_Address,
            abi: Token_staking_Token_Contract_ABI,
            functionName: "approve",
            args: [Token_staking_Contract_Address, values],
            account: address,
          });
          const { hash } = await writeContract(request);
          const data = await waitForTransaction({
            hash,
          });
          setTimeout(() => {
            setspinner(false);
            toast.success("Approve SuccessFully");
            Staking_Fuc(values);
          }, 2000);
        }
      }
    } catch (error) {
      setspinner(false);
      console.log(error);
    }
  };

  const Staking_Fuc = async (value) => {
    try {
      setspinner(true);

      const { request } = await prepareWriteContract({
        address: Token_staking_Contract_Address,
        abi: Token_staking_Contract_ABI,
        functionName: "farm",
        args: [value, plan],
        account: address,
      });
      const { hash } = await writeContract(request);
      const data = await waitForTransaction({
        hash,
      });

      setTimeout(() => {
        setspinner(false);
        toast.success("Transaction Completed");
      }, 4000);
    } catch (error) {
      console.log(error);
      setspinner(false);
    }
  };
  const balanceOf = async () => {
    try {
      let ContractOfToken = new webSupply.eth.Contract(
        Token_staking_Token_Contract_ABI,
        Token_staking_Token_Contract_Address
      );
      let ContractOf = new webSupply.eth.Contract(
        Token_staking_Contract_ABI,
        Token_staking_Contract_Address
      );
      let APY = await ContractOf.methods
      .checkAPY()
      .call();
     console.log("APY",APY); 
      setcheckAPY(APY)   
      if (address) {
        let tokenBalace = await ContractOfToken.methods
          .balanceOf(address)
          .call();
        tokenBalace = webSupply.utils.fromWei(tokenBalace.toString());
        settokenBalance(tokenBalace);

        let userinformation = await ContractOf.methods
          .userInformation(address)
          .call();
        userinformation = userinformation[0].reduce(
          (items, curr) => items + parseInt(curr),
          0
        );
        // userinformation = webSupply.utils.fromWei(userinformation.toString());
        userinformation =Number(userinformation)/Number(1000000000000000000)

        console.log("userinformation", userinformation);
        setyourStake(userinformation);
      }
      let totalStaked = await ContractOf.methods.totalStaked().call();
      totalStaked = webSupply.utils.fromWei(totalStaked.toString());
      settotalTokenStake(totalStaked);

      let totalStakers = await ContractOf.methods.totalStakers().call();
      setNumberOfTotalStakers(totalStakers);
      console.log("totalStakers",totalStakers);
    } catch (error) {
      console.log(error);
    }
  };

  const ClaimToken = async (value) => {
    try {
      setclaimSpinner(true);

      const { request } = await prepareWriteContract({
        address: Token_staking_Contract_Address,
        abi: Token_staking_Contract_ABI,
        functionName: "claim",
        args: [],
        account: address,
      });
      const { hash } = await writeContract(request);
      const data = await waitForTransaction({
        hash,
      });

      setTimeout(() => {
        setclaimSpinner(false);
        toast.success("Transaction Completed");
      }, 4000);
    } catch (error) {
      console.log(error);
      setclaimSpinner(false);
    }
  };

  const getclaimReward = async () => {
    try {
      let ContractOf = new webSupply.eth.Contract(
        Token_staking_Contract_ABI,
        Token_staking_Contract_Address
      );
      if (address) {
        let claimable = await ContractOf.methods.pendindRewards(address).call();
        claimable = webSupply.utils.fromWei(claimable.toString());
        // console.log("claimable",claimable);
        setClaimable(claimable);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    balanceOf();
    let interval = setInterval(() => {
      getclaimReward();
    }, 1000);
    return () => clearInterval(interval);
  }, [address, spinner, claimSpinner]);
  return (
    <div className="main_token_staking_page">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="black_box">
              <h1>{totalTokenStake}</h1>
              <p>Total value locked</p>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="black_box resvers">
              <h1>{checkAPY}</h1>
              <p>Apy</p>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="black_box">
              <h1>{numberOfTotalStakers}</h1>
              <p>Number of stakers</p>
            </div>
          </div>
        </div>
        <div className="row  mt-5 justify-content-center">
          <div className="col-md-8">
            <div className="token_staking_box">
              <div className="row align-items-center ">
                <div className="col-md-7">
                  <div className="lef_token_stk_co">
                    <h1>Participate $MART Stake</h1>

                    <div className="toatal_Stack mt-4">
                      <p>Total Stake</p>
                      <h1>{totalTokenStake} $MART</h1>
                    </div>
                    <div className="plans_box">
                      <div
                        className="inner_days_"
                        style={{ background: plan == 30 ? "#002F61" : "" }}
                        onClick={() => setplan(30)}
                      >
                        30 days
                      </div>
                      <div
                        className="inner_days_"
                        style={{ background: plan == 90 ? "#002F61" : "" }}
                        onClick={() => setplan(90)}
                      >
                        90 days
                      </div>
                      <div
                        className="inner_days_"
                        style={{ background: plan == 180 ? "#002F61" : "" }}
                        onClick={() => setplan(180)}
                      >
                        180 days
                      </div>
                      <div
                        className="inner_days_"
                        style={{ background: plan == 365 ? "#002F61" : "" }}
                        onClick={() => setplan(365)}
                      >
                        365 days
                      </div>
                    </div>
                    <div className="row  mt-4 align-items-end">
                      <div className="col-md-7">
                        <div className="d-flex justify-content-between">
                          <p className="plan_eng">Lock period</p>
                          <p className="plan_text">{plan} days</p>
                        </div>
                        {/* <div className="d-flex mt-2 justify-content-between">
                          <p className="plan_eng">Re-locks on registration</p>
                          <p className="plan_text">Yes</p>
                        </div> */}
                        <div className="d-flex mt-2 justify-content-between">
                          <p className="plan_eng">Early unstake fee</p>
                          <p className="plan_text">10%</p>
                        </div>
                        {/* <div className="d-flex mt-2 justify-content-between">
                          <p className="plan_eng">Status</p>
                          <p className="plan_text">unlocked</p>
                        </div> */}
                      </div>
                      <div className="col-md-5">
                        <div className="apy_rates text-center">
                          <p>Apy Rate</p>
                          <h1>{checkAPY}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="token_mart_sawap">
                    <div className="mart_logo_wap d-flex gap-3 align-items-center">
                      <img src={logo} className="w-25" alt="" />
                      $MART SWAP
                    </div>
                    <div className="mt-3 mt-2">
                      <p className="mb-0">
                        Balance: {parseFloat(tokenBalance).toFixed(3)} $MART
                      </p>
                      <div className="d-flex ">
                        <div className="swap_input_b d-flex ">
                          <input
                            type="text"
                            className="wap_iiinnn"
                            placeholder="0.00"
                            value={getInput}
                            onChange={(e) => setgetInput(e.target.value)}
                          />
                          <button
                            onClick={() =>
                              setgetInput(
                                tokenBalance > 0
                                  ? Number(tokenBalance) - 0.001
                                  : 0
                              )
                            }
                          >
                            Max
                          </button>
                        </div>
                        <button className="swap_clr_btn" onClick={Stake_Token}>
                          {spinner ? "Loading.." : "Stake"}{" "}
                        </button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="mb-0">Your Stake: {parseFloat(yourStake).toFixed(3)} $MART </p>
                      <div className="d-flex ">
                        <div
                          className="swap_input_b w-100 d-flex p-2 "
                          style={{ cursor: "no-drop" }}
                        >
                          <p className="mb-0">
                            {" "}
                            {parseFloat(Claimable).toFixed(6)}{" "}
                          </p>

                          {/* <button disabled="true" style={{ cursor: "no-drop" }}>
                            Max
                          </button> */}
                        </div>
                        <button className="swap_clr_btn" onClick={ClaimToken}>
                          {claimSpinner ? "Loading.." : "Claim"}{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src={bg} className="token_ts d-none d-md-block" alt="" />
          </div>
        </div>

        <div className="row">
          <Stake />
        </div>
      </div>
    </div>
  );
}
