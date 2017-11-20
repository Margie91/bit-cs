import React from "react";


export default class ComposeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { title: "", body: "" };

        this.handleBind();
    
    }

    handleBind(){
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.saveHandler = this.saveHandler.bind(this);
    }


    handleTitleChange(event) {
        let value = event.target.value;

        this.setState({
            title: value
        });

    }

    handleBodyChange(event){
        let bodyValue = event.target.value;
        
        this.setState({
            body: bodyValue
        });
    }

    saveHandler(){
        this.props.onSave({
            title: this.state.title,
            body: this.state.body
        });
    }

    render() {
        return (
            <div>
                <label htmlFor="title">Title</label>
                <br />
                <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} />
                <br />
                <label htmlFor="body">Text</label>
                <br />
                <textarea name="text" value={this.state.body} onChange={this.handleBodyChange}/>
                <br />
                <button onClick={this.saveHandler}>Save</button>
            </div>
        )
    }
}
