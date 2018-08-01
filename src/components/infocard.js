import React from 'react';
import cardStyle from './infocard.module.css';

class InfoCard extends React.Component{
    render(){
        return (
            <div className={cardStyle.infoCard}>	
                <div>
                    <img alt={this.props.description} src={this.props.imagePath} />
                </div>
                <div>
                    <span>{this.props.title}</span>
                </div>
                <div>
                    <span>{this.props.description}</span>
                </div>
            </div>
        );
    }
}

export default InfoCard;