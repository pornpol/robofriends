import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import './App.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots : users}))
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value.toLowerCase()})
    }

    render() {
        const robotsFilter = this.state.robots.filter((robot) =>
            robot.name.toLowerCase().includes(this.state.searchField))
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={robotsFilter}/>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;