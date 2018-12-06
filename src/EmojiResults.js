import React, { Component } from 'react';
import Clipboard from "clipboard";
import PropTypes from 'prop-types';
import EmojiResultsRow from './EmojiResultRow';

class EmojiResults extends Component {
    componentDidMount() {
        this.clipboard = new Clipboard(".copy-to-clipboard");
    }

    componentWillUnMount() {
        this.clipboard.destroy();
    }

    render(){
        return (
            <div className="component-emoji-results">
            {this.props.emojiData.map(emojiData => (
                <EmojiResultsRow
                   key={emojiData.title}
                   symbol={emojiData.symbol}
                   title={emojiData.title}
                />
            ))}
            </div>
        )
    }
}
EmojiResults.propTypes = {
   emojiData: PropTypes.array  
};

export default EmojiResults;