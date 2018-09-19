import React from 'react';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            displayname: '',
            text: '',
            upvote: '',
            downvote: ''
        }
    }
    render() {
        return(
            <div className="Opinion">
            </div>
        )
    }
}

export default List;