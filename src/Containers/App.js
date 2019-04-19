import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';

class App extends Component {

	constructor() {
		super();
		this.state = {
			retrievedData: [],
			searchfield: ''
		}
	}

	fetchData = (url, dataArray) => {
		if (url !== null) {
			fetch(url)
			.then(response => response.json())
			.then(data => {
			dataArray = dataArray.concat(data.results);
			this.setState({ retrievedData: dataArray });
			url = data.next;
			this.fetchData(url, dataArray);
			})
		}
	}

	componentDidMount() {
		let nextURL = "https://swapi.co/api/people/";
		let peopleResults = [];

		this.fetchData(nextURL, peopleResults);
    }

	onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

	render() {

		const filteredData = this.state.retrievedData.filter(data => {
            return data.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		
		if (this.state.retrievedData.length === 0) {
			return <h1 className="tc">Loading...</h1>
		} else {
			return (
				<div>
					<h1 className="tc">Star Wars Database</h1>
					<SearchBox searchChange={ this.onSearchChange }/>
					<hr />
						<CardList presentedData={ filteredData }/>
				</div>	
			);
		}

	}
}

export default App;
