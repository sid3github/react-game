import React, {Component} from 'react';

class GameList extends Component {
    createTasks(item) {
        return <div className="ui card">
            <div className="image">
                <img alt='' src={item.img}/>
            </div>
            <div className="content">
                <a className="header">{item.name}</a>

                <div className="price">
                    {item.price}
                </div>
            </div>

        </div>
    }

    render() {
        let newList = this.props.list;
        let newItems = newList.map(this.createTasks);

        return(
            <div className='ui four cards'>
                {newItems}
            </div>
        )
    }
}

export default GameList;