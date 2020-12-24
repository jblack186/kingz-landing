import React, {useState} from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import { Modal } from '../components/Modal';

const PopButton = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: orange;
  cursor: pointer;
  color: white;
  font-size: 1rem;
`


export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev)
  }



  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.topBar}>
        <p>FREE CONSULTING FOR BUSINESS OWNERS</p>
      </section>
      <section className={styles.top_section}>
        <div className={styles.top_text}>
          <p>RECEIVE QUALITY CUSTOM PROMOTIONAL MERCHANDISE FOR YOUR BRAND!</p>
        </div>
        <video controls className={styles.video_src}>
        <source src="./video.mp4" type="video/mp4"/>
      </video>
        <div className={styles.top_button}>
          <PopButton onClick={openModal}>
            Strengthen Brand
          </PopButton>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
      </section>
      <section className={styles.top_mid_section}>
        <div className={styles.top_mid_header}>
          <h3>
          If you landed on this page, chances are, you take pride in your business  and you are looking to increase your brand's awareness ! 
          </h3>
        </div>
        <div className={styles.top_mid_bottom_container}>
          <img src="" />
          <div className={styles.top_mid_text_box}>
            <p>We help advertise  and promote  brands, messages and businesses through custom printing on promotional products and merchandise. </p>
            <p>We want to help you! Speak to printing expert now !</p>
          </div>
        </div>
      </section>
    </div>
  )
}
