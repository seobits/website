import porfolioPng from "./images/portfolio.png";
import articlesPng from "./images/articles.png";
import experimentsPng from "./images/experiments.gif";
import aboutPng from "./images/about.png";
import twitterIconPng from "./images/twitter.png";
import linkedInIconPng from "./images/linkedin.png";

export default {
    cardList:  [
        {
            imagePath: porfolioPng,
            title: "Portfolio",
            description: "List of my relevant projects",
            link: "/portfolio/",
        },
        {
            imagePath: articlesPng,
            title: "Articles",
            description: "Some of my discoveries",
            link: "/articles/",
        },
        {
            imagePath: experimentsPng,
            title: "Experiments",
            description: "Current projects",
            link: "/experiments/",
        },
        {
            imagePath: aboutPng,
            title: "About me",
            description: "Discover who i am!",
            link: "/about/",
        },
    ],
    socialIconsList: [
        {
            name: "Twitter",
            imagePath: twitterIconPng,
            link: "https://twitter.com/seobitsdev",
        },
        {
            name: "LinkedIn",
            imagePath: linkedInIconPng,
            link: "https://www.linkedin.com/in/seobits/",
        }
    ],
    projectList:[
        {
            name: "Heroes Saludables",
            date: "2015-01-06",
            company: "Yogome",
            markdown: "/somemd.md",
        },
        {
            name: "Heroes Level Editor",
            date: "2015-01-06",
            company: "Independent Project",
            markdown: "/somemd.md",
        },
        {
            name: "Knowledge Battle",
            date: "2016-01-06",
            company: "Yogome",
            markdown: "/somemd.md",
        },
        {
            name: "Thinker Town",
            date: "2016-01-06",
            company: "Yogome",
            markdown: "/somemd.md",
        },
        {
            name: "Epic Heroes",
            date: "2017-01-06",
            company: "Yogome",
            markdown: "/somemd.md",
        },
        {
            name: "Appboy Plugin for Corona SDK",
            date: "2017-01-06",
            company: "Independent Project",
            markdown: "/somemd.md",
        },
    ]
};