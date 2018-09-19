import React from 'react';

class Opinion extends React.Component{
    constructor() {
        super();
        this.state = {
            title: '',
            text: '',
            posted: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    post() {
        this.setState({
             
        }) 
    }
    handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
        });
    }
    render() {
        return(
            <div className="Post">
                <form>
                    <label>Title/Opinion</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}></input>

                    <label>Text</label>
                    <input type="text" name="text" value={this.state.text} onChange={this.handleChange}></input>

                    <button onClick={() => this.post()}>Post</button>
                </form>
            </div>
        )
    }
}

export default Opinion;