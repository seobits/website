import React from 'react';
import Link from 'gatsby-link';
import InfoCard from '../components/infocard';
import data from '../data';
import globalStyles from "../styles/global.module.css";

const {cardList} = data;

function createCards(){
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
  return (<div className={globalStyles.landingCardContainer}>{infoCards}</div>);
}

const IndexPage = () => {
  return (
    <div style={{
      display: "inline-block",
      position: "absolute",
      transform: "translate(-50%, -50%)",
      top: "45%",
      left: "50%",
    }}>
      <div className={globalStyles.landingHeaderMenu}>
        {/* {createSocialIcons()} */}
        <p style={{fontSize: "9vh"}}>Jonatan Santos</p>
        <p>Software Engineer / Front end / Game Developer</p></div>
      {createCards()}
    </div>
  )
}

export default IndexPage;
