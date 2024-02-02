import React, { useState } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Assets/Logo2.png";
import { FaWallet } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { Link } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(false);
  const { chain } = useNetwork();
  const { chains, switchNetwork } = useSwitchNetwork();
  const { address } = useAccount();
  const { open } = useWeb3Modal();

  const handleClose = () => setShow(false);
  return (
    <div className="main_header_here">
      <Navbar collapseOnSelect expand="lg" className="main_headre">
        <Container>
          <Navbar.Brand href="#home" className="main_logo">
        <Link to="/">    <img src={logo} alt="" width="100%" /></Link>
          </Navbar.Brand>
          <div className="in_resonsive">
            <button
              onClick={() =>
                address
                  ? chain?.id == chains[0]?.id
                    ? open()
                    : switchNetwork?.(chains[0]?.id)
                  : open()
              }
              className="wallet_button2 "
            >
              {address ? (
                chain?.id == chains[0]?.id || chain?.id == chains[1]?.id ? (
                  address ? (
                    <>
                      <FaWallet style={{fontSize:"1.2rem"}} />
                    </>
                  ) : (
                    <>
                      <FaWallet style={{fontSize:"1.2rem"}} />
                    </>
                  )
                ) : (
                  "Switch"
                )
              ) : (
                <>
                  <FaWallet style={{fontSize:"1.2rem"}} />
                </>
              )}
            </button>
            <span className="d-block d-lg-none " onClick={() => setShow(!show)}>
              {show ? (
                <>
                  <RxCross2 className="text-white fs-1" />{" "}
                </>
              ) : (
                <>
                  <AiOutlineMenu className="text-white fs-1" />
                </>
              )}
            </span>
          </div>

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={show ? "show" : ""}
          >
            <Nav className="ms-auto">
            <Link to="/" className="text-decoration-none">
              <Nav.Link
                onClick={handleClose}
                href="#features"
                className="header_links"
              >
                Home
              </Nav.Link>
              </Link>
              {/* <Nav.Link
                onClick={handleClose}
                className="header_links"
                href="#pricing"
              >
                Staking
              </Nav.Link> */}
              {/* <Nav.Link
                onClick={handleClose}
                className="header_links"
                href="#pricing"
              >
                Contract
              </Nav.Link> */}
              <Link to="/staking" className="text-decoration-none">
              <Nav.Link
                onClick={handleClose}
                className="header_links text-decoration-none"
                href="#pricing"
               
              >
                Staking 
              </Nav.Link>
              </Link>
              <Link to="/contact_us" className="text-decoration-none">
              <Nav.Link
                onClick={handleClose}
                className="header_links text-decoration-none"
                href="#pricing"
               
              >
                Contact 
              </Nav.Link>
              </Link>

              {/* <Link to="/About" className="text-decoration-none">
              <Nav.Link
                onClick={handleClose}
                className="header_links text-decoration-none"
                href="#pricing"
               
              >
                About 
              </Nav.Link>
              </Link> */}

              {/* <Link to="/OurStory" className="text-decoration-none">
              <Nav.Link
                onClick={handleClose}
                className="header_links text-decoration-none"
                href="#pricing"
               
              >
                Our Story 
              </Nav.Link>
              </Link> */}




            </Nav>
            <Nav>
              <button
                onClick={() =>
                  address
                    ? chain?.id == chains[0]?.id
                      ? open()
                      : switchNetwork?.(chains[0]?.id)
                    : open()
                }
                className="wallet_button "
              >
                {address ? (
                  chain?.id == chains[0]?.id || chain?.id == chains[1]?.id ? (
                    address ? (
                      <>
                        {`${address.substring(0, 6)}...${address.substring(
                          address.length - 4
                        )}`}
                      </>
                    ) : (
                      <>
                        Connect <FaWallet />
                      </>
                    )
                  ) : (
                    "Switch Network"
                  )
                ) : (
                  <>
                    Connect <FaWallet />
                  </>
                )}
              </button>
              <div className="bg_blue"></div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
