import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    placeholder={ this.props.placeholder }
                    onChange={ (e) => this.props.handleChange(e.target.value) }
                />
            </div>
        );
    }
}

export default Search;