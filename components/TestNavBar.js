import Link from 'next/link';
import BootstrapHead from './BootstrapHead';
import Modal from "react-modal";
import React, { useState } from "react";

function Navbar (){
    const HandlelogoClick = () => {
        window.scrollTo({ top : 0, behavior: 'smooth'});
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const HandleAddBoxClick = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };

  return (
    <>
    <BootstrapHead/>
    <nav>
      <div className="left" onClick={HandlelogoClick}> {/* 왼쪽 요소 */}
        <Link legacyBehavior href="/">
          <a><img src="/images/rolling.png" alt="Logo" /></a>
        </Link>
      </div>
      <div className="center"> {/* 가운데 요소 */}
        <div className="search-box">
          <input
            className="search-input"
            type="search"
            placeholder="검색"
            aria-label="Search"
          />
        </div>
      </div>
      <div className="right"> {/* 오른쪽 요소 */}
        <div className="box">
          <img 
            className="material_icons_feed" 
            src="navbar/addbox.svg" 
            onClick={HandleAddBoxClick}/>
        </div>
      </div>
     <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="modal_overlay">
          <div className="modal_window">
            <button onClick={closeModal}>Close</button>
            {/* 모달창 안에 들어갈 내용을 작성하세요. */}
          </div>
        </div>
      </Modal>
      <style jsx>{`
        nav {
            background-color: #fafafa;
            height: 80px;
            width: 100vw;
            display: flex;
            align-items: left;
            padding: 13px; 
            position: fixed;
            z-index: 100;
            top: 0px;
            right: 0px; 
            left: 0px;
            width: 100%;
            height: 50px;
            position: fixed;
        }
        .left {
          flex-basis: 0%;
        }
        .center {
          flex-basis: 100%;
          display: flex;
          justify-content: center;
        }
        .search-box {
          background-color: white;
          width: 300px;
          border-radius: 30px;
        }
        .search-input {
          border: none;
          background-color: #f2f2f2;
          padding: 5px 10px;
          width: 300px;
          margin-left: auto;
        }
        .right {
          flex-basis: 0%;
          width : 100px;
          height : 50px;
        }
        nav img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        .box {
          
          padding: 0px 0px;
          border-radius: 5px;
          height : 50px;
          width : 100px;        
        }
        .material_icons_feed {
          width: 36px;
          height: 36px;
        }
        .modal_overlay {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 9999;
          left: 0;
          top: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(1.5px);
          -webkit-backdrop-filter: blur(1.5px);
        }
        .modal_window {
          background: white;
          backdrop-filter: blur(13.5px);
          -webkit-backdrop-filter: blur(13.5px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          width: 800px;
          height: 600px;
          position: relative;
          padding: 10px;
        }
      `}</style>
    </nav>  
    </>
  );
};
export default Navbar;