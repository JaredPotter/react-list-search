import React from 'react';

import List from './List';
import Search from './Search';

class ListSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            originalList: ['Apples', 'Bananas', 'Blueberries', 'Oranges', 'Grapes', 'Watermelon'],
            list: []
        };

        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    componentDidMount() {
        const list = [...this.state.originalList];

        this.setState({
            list: list
        });
    }

    handleSearchChange(value) {
        const newList = this.state.originalList.filter((item) => {
            const itemLowercase = item.toLowerCase();
            const valueLowercase = value.toLowerCase();

            // debugger;

            if(itemLowercase.includes(valueLowercase)) {
                return true;
            }
        });

        this.setState({
            list: newList
        });
    }

    render() {
        return (
            <div>
                <Search 
                    placeholder="Fruit search..." 
                    handleChange={ this.handleSearchChange }
                />
                <List items={ this.state.list } />
            </div>
        );
    }
}

export default ListSearch;