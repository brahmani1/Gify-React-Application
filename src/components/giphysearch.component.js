import React, { Component } from 'react';
import axios from 'axios';


const GIPHY_API_URL = `https://api.giphy.com`;
const GIPHY_PUB_KEY = `dc6zaTOxFJmzC`;

class GiphySearchComponent extends Component {
    state = {
        searchTerm: '',
        searchData: []
    }

    handleChange = (evt) => {
        const term = evt.target.value;
        this.setState({ searchTerm: term });

        if (term.length > 2) {
            this.getSearchResult(term);
        }
    }

    handleKeyUp = (evt) => {
        if (evt.keyCode === 13) this.getSearchResult(this.state.searchTerm);
    }

    getSearchResult = (tagName) => {
        const url = `${GIPHY_API_URL}/v1/gifs/search?api_key=${GIPHY_PUB_KEY}&q=${tagName}`;
        let me = this;
        axios.get(url)
            .then((response) => {
                // axios wraps the response in a 'data' key, and so does the giphy response
                debugger
                const data = response.data.data;
                me.setState({ searchData: data });
                // resolve({
                //     url: data.fixed_width_downsampled_url,
                //     width: data.fixed_width_downsampled_width,
                //     sourceUrl: data.url
                // })
            }, err => {

            });
    }

    animateWithGif = (e, x) => {
        e.target.src=x;
    };
    stopAnimation = (e, x) => { 
        e.target.src=x;
    };

    render() {
        const GIPHY_LOADING_URL = `https://giphy.com/gifs/loop-loading-loader-xTk9ZvMnbIiIew7IpW`;

        const giphySourceUrl = () => {
            return this.props.sourceUrl || GIPHY_LOADING_URL;
        }

        const renderItems = this.state.searchData.map(x =>
            <div key={x.embed_url} className="col-md-3 mb-3">
                <a title='view this on giphy' target='new'>
                    <img src={x.images['480w_still'].url} onMouseOver={(e) => this.animateWithGif(e, x.images.downsized_medium.url)} onMouseOut={(e) => this.stopAnimation(e, x.images['480w_still'].url)} style={{ width: '100%', maxWidth: '350px', height: '200px' }} />
                </a>
            </div>
        );

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4" ></div>
                    <div className="col-md-4 text-center ">
                        <input
                            type="text"
                            onChange={this.handleChange}
                            onKeyUp={this.handleKeyUp}
                            placeholder="Search gif here"
                            className="form-control mt-3 mb-4"
                            value={this.state.searchTerm}
                        />
                    </div>
                </div>
                <div className="row" >
                    {renderItems}
                    {renderItems.length === 0 && <div className="col-md-12 text-center">Search to get results</div>}
                </div>
            </div>
        );
    }
}

export default GiphySearchComponent;
