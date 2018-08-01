import React from 'react';
import Link from 'gatsby-link';
import InfoCard from '../components/infocard';
import data from '../data';
import pageStyles from "../styles/index.module.css";
import "../styles/global.module.css";

const {cardList} = data;

function createCardContainer(){
  const infoCards = cardList.map((val, index) => {
    return (
      <Link key={index} to={val.link}>
        <InfoCard
          imagePath = {val.imagePath}
          title = {val.title}
          description = {val.description}
        />
      </Link>
    );
  })
  return (<div className={pageStyles.landingCardContainer}>{infoCards}</div>);
}

const IndexPage = () => {
  return (
    <div style={{
      display: "inline-block",
      position: "absolute",
      transform: "translate(-50%, -50%)",
      top: "45%",
      left: "50%",
      overflow: "hidden"
    }}>
      <div className={pageStyles.landingHeaderMenu}>
        {/* {createSocialIcons()} */}
        <p style={{fontSize: "9vh"}}>Jonatan Santos</p>
        <p>Software Engineer / Front end / Game Developer</p></div>
        {createCardContainer()}
    </div>
  )
}

export default IndexPage;