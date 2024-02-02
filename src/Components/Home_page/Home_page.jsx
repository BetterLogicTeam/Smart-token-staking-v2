import React from 'react'
import { useState } from 'react'
import Landing_page from '../Landing_page/Landing_page'
import Secure_page from '../Secure_page/Secure_page'
import P2p from '../P2p/P2p'
import Transcation from '../Transcation/Transcation'
import Video_part from '../Video_part/Video_part'
import Tokennomics from '../Tokennomics/Tokennomics'
import FAQ from '../FAQ/FAQ'
import BuyETH from "../Buy_eth/Buy_eth"


// import { FaQ } from 'react-icons/fa6'

export default function Home_page() {
  const [raise, setRaise] = useState(0)

  return (
    <div>
    <Landing_page setRaise={setRaise} />
    <BuyETH></BuyETH>
    <Secure_page raise={raise} />
    <P2p />
    <Transcation />
    <Video_part />
    {/* <BuyETH></BuyETH> */}
    <Tokennomics />
    <FAQ></FAQ>

    </div>
  )
}
