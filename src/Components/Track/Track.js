import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);  // bind to current value of constructor method!
    }
    
    renderAction() {
        if (this.props.isRemoval) {
            return <a className="Track-action" onClick={this.removeTrack}>-</a>
        } else {
            return <a className="Track-action" onClick={this.addTrack}>+</a>
        }
    }

    renderPreview(previewUrl){
        if(previewUrl){
          console.log(previewUrl);
          return <audio src= {previewUrl} controls> </audio>;
        }
     };

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }
 
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.Name}</h3>
                    <p>{this.props.track.Artist} | {this.props.track.Album}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
    
}

export default Track;