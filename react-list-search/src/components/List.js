import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.items.length > 0) {
            return (
                <ul>
                    {
                        this.props.items.map((item) => {
                            return <li>{ item }</li>
                        })
                    }
                </ul>
            );
        }
        {
            return (<h4>No Matching Items!</h4>);
        }
    }
}

export default List;