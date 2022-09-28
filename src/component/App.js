import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {
    
    state = { images: [] };

    // To get access to data we r retrieving we apply async

    // async onSearchSubmit(searchTerm) {... We need to re-write dis wit arrow function to clear this.setState error
    onSearchSubmit = async (searchTerm) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: searchTerm  },
        })
        // We can get an output of data by chaining .then & arrow function
        // .then((res) => {
        //     console.log(res.data.results);
        // })

        console.log(response);
        // Instead of console logging the images we can change the state 
        this.setState({ images: response.data.results });
        // console.log(searchTerm);
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onSubmit={this.onSearchSubmit} />
                < ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;