import React from 'react';
import MenuHeader from "../components/menu-header";
import ProjectTimeline from "../components/project-timeline";
import style from "../styles/portfolio.module.css";

const Content = () => {
  return(
    <div style={{position: "relative"}}>
      <div className={style.projectSelector}>
          <div className={style.projectThumbnail}>
          </div>
          <div className={style.projectThumbnail}>
          </div>
          <div className={style.projectThumbnail}>
          </div>
      </div>
      <div className={style.portfolioContent}>
        <div className={style.contentHeader}>
          <div>
            <h1>Project Name</h1>
            <p>Lead Software Engineer</p>
            <p>Yogome, inc</p>
          </div>
          <div>
            <p className={style.platformDesc}>Platform: iOS</p>
          </div>
        </div>
        <div className={style.contentContainer}>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec turpis urna. Suspendisse potenti. Ut egestas hendrerit eros, ornare congue mauris tristique id. Donec sed massa dictum, ullamcorper nunc vel, tristique nibh. Praesent viverra libero a sapien interdum, id venenatis lacus bibendum. Maecenas lorem ante, vehicula nec nisl ac, convallis posuere erat. Nulla faucibus ultricies nulla nec pharetra. Curabitur dignissim arcu leo, a volutpat sapien sollicitudin at. Maecenas congue iaculis erat ullamcorper commodo. Nullam vel molestie libero. Cras condimentum convallis rhoncus. Integer faucibus consequat pretium. Nunc bibendum, nunc at tempus lacinia, metus lacus maximus justo, id aliquet enim nisl eu enim. Suspendisse tempor bibendum nisl, non elementum mi consequat at. Donec semper augue et velit pharetra faucibus.

Suspendisse consectetur venenatis cursus. Aenean accumsan diam lectus, sed pharetra dolor sagittis eu. Nam sed leo aliquet, malesuada nulla vel, bibendum dui. Curabitur elementum augue augue, ac venenatis est gravida nec. Sed vestibulum molestie eros eu facilisis. Etiam maximus pulvinar mauris interdum tincidunt. Morbi tincidunt dapibus congue. Sed metus nisi, venenatis ac enim sed, mollis feugiat ligula.

Ut condimentum maximus tempus. Nulla cursus in tortor nec varius. Nunc interdum elementum ultrices. Nullam sagittis et urna et ultrices. Maecenas tincidunt ultricies dolor, quis ornare risus condimentum eget. Quisque eleifend sit amet felis ac blandit. Donec tempor porttitor nibh non congue. Integer commodo porttitor pulvinar. Donec eu aliquam velit. Ut non massa finibus, auctor sapien vel, aliquam augue.

Nulla facilisi. Donec euismod commodo diam, ac suscipit ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae accumsan felis. Vivamus venenatis nisi a lorem condimentum porta. Suspendisse a dictum dui. Donec vitae elit ullamcorper, dapibus sapien in, posuere nulla.

Sed id turpis vestibulum, fermentum ligula iaculis, cursus magna. Ut semper, tortor non tristique vulputate, magna ante susci
          </p>
        </div>
      </div>  
    </div>
  )
}

const IndexPage = () => {
  return (
    <div>
      <MenuHeader></MenuHeader>
      <ProjectTimeline></ProjectTimeline>
      <Content></Content>
    </div>
  )
}

export default IndexPage;