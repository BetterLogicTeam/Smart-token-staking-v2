import React from 'react'
import "./Smart_token_staking.css"
import logo from "../Assets/logoicon.svg"
import bg from "../Assets/bg5.png"
import Stake from '../Stake/Stake'
export default function Smart_token_staking() {
  return (
    <div className='main_token_staking_page'> 
    <div className="container">
    <div className="row mt-5">
          <div className="col-md-4">
            <div className="black_box">
              <h1>$643</h1>
              <p>Total value locked</p>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="black_box resvers">
              <h1>136.99%</h1>
              <p>Apy</p>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="black_box">
              <h1>68,899</h1>
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
                    <h1>Participate $MART stack</h1>

                    <div className='toatal_Stack mt-4'>
                        <p>Total stack</p>
                        <h1>350.70 MART</h1>
                    </div>
                    <div className="plans_box">
                    <div className="inner_days_" style={{background:"#002F61"}}>
                        30 days 
                    </div>
                    <div className="inner_days_">
                        90 days 
                    </div>
                    <div className="inner_days_">
                        180 days 
                    </div>
                    <div className="inner_days_">
                        365 days 
                    </div>

                    </div>
                    <div className='row  mt-4 align-items-end'>
                    <div className="col-md-7">
                        <div className='d-flex justify-content-between'>
                        <p className='plan_eng'>Lock period</p>
                        <p className='plan_text'>30 days</p>

                        </div>
                        <div className='d-flex mt-2 justify-content-between'>
                        <p className='plan_eng'>Re-locks on registration</p>
                        <p className='plan_text'>Yes</p>

                        </div>
                        <div className='d-flex mt-2 justify-content-between'>
                        <p className='plan_eng'>Early unstake fee</p>
                        <p className='plan_text'>10%</p>

                        </div>
                        <div className='d-flex mt-2 justify-content-between'>
                        <p className='plan_eng'>Status</p>
                        <p className='plan_text'>unlocked</p>

                        </div>
                    </div>
                      <div className="col-md-5">
                        <div className="apy_rates text-center">
                            <p>Apy Rate</p>
                            <h1>10%</h1>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="token_mart_sawap">
                <div className='mart_logo_wap d-flex gap-3 align-items-center'>

                <img src={logo} className='w-25' alt="" />
                $MART SWAP
                </div>
                <div className='mt-3 mt-2'>

               
                <p className='mb-0'>Balacne:342.54 MART</p>
                <div className='d-flex '>
                    <div className="swap_input_b d-flex ">
                    <input type="text" className='wap_iiinnn' placeholder='0.00' />
                    <button>Max</button>

                    </div>
                    <button className='swap_clr_btn'>Stake </button>
                </div>
                </div>
                <div className='mt-4'>

               
                <p className='mb-0'>Staked:342.54 MART</p>
                <div className='d-flex '>
                    <div className="swap_input_b d-flex ">
                    <input type="text" className='wap_iiinnn' placeholder='0.00' />
                    <button>Max</button>

                    </div>
                    <button className='swap_clr_btn'>Claim </button>
                </div>
                </div>

                    
                </div>
                
            </div>
            </div>
          

            </div>
            <img src={bg} className='token_ts d-none d-md-block' alt="" />
    
            </div>
        </div>

        <div className="row">
          <Stake/>
        </div>
    </div>
    </div>
  )
}
