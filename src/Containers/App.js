import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Button from '../Components/Button';
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
			this.fetchData(url, dataArray); // Recursive call
			})
		}
	}

	componentDidMount() {
		/* fetchdata call for initial load of website */
		let nextURL = "https://swapi.co/api/people/";
		let peopleResults = [];
		this.fetchData(nextURL, peopleResults);
	}

	/* Main button click event function */
	onButtonClick = (url) => {
		this.setState({ retrievedData: [] })
		let nextURL = url;
		let peopleResults = [];

		this.fetchData(nextURL, peopleResults);
	}
	
	peopleButtonClick = () => {
		this.onButtonClick("https://swapi.co/api/people/");
	}

	speciesButtonClick = () => {
		this.onButtonClick("https://swapi.co/api/species/");
	}

	planetsButtonClick = () => {
		this.onButtonClick("https://swapi.co/api/planets/");
	}

	starshipsButtonClick = () => {
		this.onButtonClick("https://swapi.co/api/starships/");
	}

	vehiclesButtonClick = () => {
		this.onButtonClick("https://swapi.co/api/vehicles/");
	}

	onCardClick = () => {
		console.log('clicked');
	}

	/* function that dynamically updates the searchfield variable with the Searchbox's value */
	onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

	render() {

		const filteredData = this.state.retrievedData.filter(data => {
            return data.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		
		if (this.state.retrievedData.length === 0) { // Loading displayed when waiting for response
			return (
				<div>
					<h1 className="tc">Star Wars Database</h1>
					<div className="pa3 tc">
						<Button name='People' buttonClick={ this.peopleButtonClick }/>
						<Button name='Species' buttonClick={ this.speciesButtonClick }/>
						<Button name='Planets' buttonClick={ this.planetsButtonClick }/>
						<Button name='Starships' buttonClick={ this.starshipsButtonClick }/>
						<Button name='Vehicles' buttonClick={ this.vehiclesButtonClick }/>
					</div>
					<hr />
					<SearchBox searchChange={ this.onSearchChange }/>
					<h1 className="tc">Loading...</h1>
				</div>
			)
		} else {
			return (
				<div>
					<h1 className="tc">Star Wars Database</h1>
					<div className="pa3 tc">
						<Button name='People' buttonClick={ this.peopleButtonClick }/>
						<Button name='Species' buttonClick={ this.speciesButtonClick }/>
						<Button name='Planets' buttonClick={ this.planetsButtonClick }/>
						<Button name='Starships' buttonClick={ this.starshipsButtonClick }/>
						<Button name='Vehicles' buttonClick={ this.vehiclesButtonClick }/>
					</div>
					<hr />
					<SearchBox searchChange={ this.onSearchChange }/>
					<CardList presentedData={ filteredData } cardClick={ this.onCardClick }/>
				</div>	
			);
		}

	}
}

export default App;
