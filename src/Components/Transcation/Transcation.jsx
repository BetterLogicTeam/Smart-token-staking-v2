import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import {} from "swiper/modules";
import "./Transcation.css";
import img1 from "../Assets/lqfirspeak-1.svg";
import img2 from "../Assets/rt2.svg";
import img3 from "../Assets/lqfirspeak-3.svg";
import img4 from "../Assets/lqfirspeak-2.svg";
import img5 from "../Assets/Group-46-1.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Transcation() {
  const swiperRef = useRef();

  return (
    <div className="main_transcaion_page">
      <div className="container">
        <div className="row trans_sc pt-5">
          <div className="col-md-5">
            <div className="trans_conent">
              <h6>Core features and Visions</h6>
              <h1>Transacational Dynamics Of the $MART token</h1>
            </div>
            <div className="arrow_group">
              <div className="box_arrow me-3">
                <FaArrowLeftLong
                  style={{ fontSize: "1.3rem" }}
                  onClick={() => swiperRef.current.slidePrev()}
                />
              </div>
              <div
                className="box_arrow"
                onClick={() => swiperRef.current.slideNext()}
              >
                <FaArrowRightLong style={{ fontSize: "1.3rem" }} />
              </div>
            </div>
          </div>
          <div className="col-md-7 mt-3 mt-md-0 bg_card">
            <>
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                }}
                // loop={true}
                modules={[]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="trns_box_content text-start">
                    <div className="card_first_img">
                      <img src={img5} alt="" />
                    </div>
                    <h2>4%</h2>
                    <h6>Redistribution in BNB</h6>
                    <p>
                    This portion is designed to consistently reward holders.
The choice of BNB, a cryptocurrency known for its stability and utility in the Binance ecosystem.

                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="trns_box_content text-start">
                    <div className="card_first_img">
                      <img src={img2} alt="" />
                    </div>
                    <h2>2%</h2>
                    <h6>Project development</h6>
                    <p>
                      A project's success is contingent upon continuous
                      evolution and betterment. This allocation is earmarked for
                      research, technological
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="trns_box_content text-start">
                    <div className="card_first_img">
                      <img src={img3} alt="" />
                    </div>
                    <h2>1%</h2>
                    <h6>Liquidity Addition</h6>
                    <p>
                      A healthy trading environment demands liquidity. By
                      channeling a part of the fee to the liquidity pool, we
                      ensure seamless trades, minimal slippage, and an overall
                      enhanced trading experience.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="trns_box_content text-start">
                    <div className="card_first_img">
                      <img src={img4} alt="" />
                    </div>
                    <h2>1%</h2>
                    <h6>Token Burn</h6>
                    <p>
                      To instill scarcity and potentially augment token value,
                      this portion is perpetually removed from circulation. Over
                      time, as the supply diminishes, each $MART token could
                      inherently become more valuable, making the project
                      deflationary by design.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="trns_box_content text-start">
                    <div className="card_first_img">
                      <img src={img1} alt="" />
                    </div>
                    <h2>2%</h2>
                    <h6>For Marketing</h6>
                    <p>
                      Awareness and community engagement are indispensable, This
                      allocation fuels marketing initiatives, brand
                      partnerships, and outreach efforts,
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </>
          </div>



       



          <div className="clr_bg"></div>
        </div>
      </div>
    </div>
  );
}
