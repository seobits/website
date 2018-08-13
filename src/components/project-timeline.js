import React from "react";
import style from "./project-timeline.module.css"

const Timeline = (props) => {
    return (
        <div className={style.projectTimeline}>
            <div className={style.timelineLine}>
                <div className={style.dotHeader}>
                    <span>2015</span>
                    <div className={style.timelineDot}></div>
                </div>
                <div className={style.dotHeader}>
                    <span>2016</span>
                    <div className={style.timelineDot}></div>
                </div>
                <div className={style.dotHeader}>
                    <span>2017</span>
                    <div className={style.timelineDot}></div>
                </div>
                <div className={style.dotHeader}>
                    <span>2018</span>
                    <div className={style.timelineDot}></div>
                </div>
            </div>
        </div>
    )
}

const ProjectTimeline = (props) => {
    let years = [1, 2, 3, 4];
    return (
        <Timeline></Timeline>
    )
}

export default ProjectTimeline;