import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {searchString: ""}

        this.inputHandler = this.inputHandler.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    inputHandler(event){
        let searchTerm = event.target.value;

        this.setState({
            searchString: searchTerm
        });

        if (this.props.instant){
            this.props.requestedSearch(searchTerm);
        }

    }

    handleSearch(){
        let searchTerm = this.state.searchString;
        this.props.requestedSearch(searchTerm);
    }


    render() {
        return (
        <div>
            <input type='text' value={this.state.searchString} onChange={this.inputHandler} />
            {!this.props.instant ? <button onClick={this.handleSearch}>Search</button> : "instant search is on"} 
        </div>
        );
    }
}

export default Search;