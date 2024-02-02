import React, { useEffect, useState } from "react";
import "./Tab_page.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import busd from "../Assets/busd.png";
import bnb from "../Assets/binance.png";
import Web3 from "web3";
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from "@wagmi/core";
import { useAccount } from "wagmi";
import {
  staking_Contract_ABI,
  staking_Contract_Address,
} from "../Contract/Contract";
import toast from "react-hot-toast";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Tab_page() {
  const [value, setValue] = React.useState(1);
  const { address } = useAccount();
  const [getBalance, setgetBalance] = useState(0);
  const [getBNB_value, setgetBNB_value] = useState("");
  const [showToken, setshowToken] = useState(0);
  const [spinner, setspinner] = useState(false);
  const webSupply = new Web3(
    "https://1rpc.io/bnb"

    // https://bsc-testnet.publicnode.com
    // https://1rpc.io/bnb
  );
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange_value = (e) => {
    setgetBNB_value(e.target.value);
  };

  const balanceOf = async () => {
    try {
      let bnb_Balance = await webSupply.eth.getBalance(address);
      // console.log("bnb_Balance", bnb_Balance);
      bnb_Balance = webSupply.utils.fromWei(bnb_Balance.toString());
      setgetBalance(bnb_Balance.toString());

      let ContractOf = new webSupply.eth.Contract(
        staking_Contract_ABI,
        staking_Contract_Address
      );
      let value_BNB = webSupply.utils.toWei(getBNB_value.toString());
      let get_BNBTO_Token = await ContractOf.methods
        .BNBToToken(value_BNB)
        .call();
      console.log("get_BNBTO_Token", get_BNBTO_Token);
      get_BNBTO_Token = webSupply.utils.fromWei(get_BNBTO_Token.toString());
      setshowToken(get_BNBTO_Token);
    } catch (error) {
      console.log(error);
    }
  };

  const staking_Amount = async () => {
    try {
      if (getBNB_value == "") {
        toast.error("Please Enter Amount First!");
        setspinner(false);
      } else {
        if (getBNB_value > getBalance) {
          toast.error("Insufficient Balance");
          setspinner(false);
        } else {
          if (!address) {
            toast.error("Please Connect Metamaske First!");
          } else {
            setspinner(true);
            let stakingValue;
            stakingValue = webSupply.utils.toWei(getBNB_value.toString());
            const { request } = await prepareWriteContract({
              address: staking_Contract_Address,
              abi: staking_Contract_ABI,
              functionName: "BuyWithBNB",
              args: [],
              value: stakingValue.toString(),
              account: address,
            });
            const { hash } = await writeContract(request);
            const data = await waitForTransaction({
              hash,
            });
            setspinner(false);
            toast.success("Purchase Successful");
          }
        }
      }
    } catch (e) {
      console.log("Error", e);
      setspinner(false);
    }
  };

  useEffect(() => {
    balanceOf();
  }, [getBNB_value,address]);

  return (
    <div className="ab_main">
      <div className="first_Box_stking">
        <span className=" bnb_Text text-white">
          <img src={bnb} className=" tab_imgss me-2" alt="" /> <span>BNB</span>
        </span>
        <div className="balnce_text"> Your wallet  : { parseFloat(getBalance.toString()).toFixed(3)} BNB</div>
      </div>
    
      <div className="box_busd ">
        <div className="d-flex justify-content-between">
        <p>Amount in BNB </p>
        <p style={{cursor:"pointer"}} onClick={()=>setgetBNB_value(getBalance !=="0" ? (Number(getBalance) - Number(0.0001)) : 0)}>
            MAX
        </p>


        </div>

        <input
          type="number"
          placeholder="0"
          value={getBNB_value}
          onChange={handleChange_value}
        />





      </div>

      <div className="box_busd mt-2">
        <p>Tokens</p>
        <input type="text" disabled placeholder="0" value={showToken} />
      </div>
      <div>
        <button className="buy_BTN" onClick={staking_Amount}>
          {spinner ? "Loading..." : "Buy $mart"}
        </button>
      </div>
    </div>




  );
}
