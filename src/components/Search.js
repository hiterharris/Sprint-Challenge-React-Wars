import React, {useState, useEffect} from 'react';
import {
    CardBody,
    CardTitle,
    CardText,
} from 'reactstrap';
import axios from 'axios';
import '../App.css';

const Search = (props) => {
    const [characters, setCharacters] = useState([]);

    useEffect( () => {
        axios.get('https://swapi.co/api/people')
            .then(response => {
                setCharacters(response.data.results);
            })
            .catch(error => {
                console.log('Data Not Returned', error)
            })
    }, []);


  return (
    <section className='card-container'>
    {characters.map( (filteredCharacters) => {
        let filteredCharacters = characters.filter( (character) => {
            return character.name.indexOf(props.search) !== -1;;
        })
        return (
            <CardBody className='card'>
                <CardTitle className='name'>{filteredCharacters.name}</CardTitle>
                <CardText className='text'>Height: {filteredCharacters.height} cm</CardText>
                <CardText className='text'>Weight: {filteredCharacters.mass} kg</CardText>
                <CardText className='text'>Number of Starships: {filteredCharacters.starships.length}</CardText>
                <CardText className='text'>Number of Vehicles: {filteredCharacters.vehicles.length}</CardText>
                <CardText className='text'>Number of Films: {filteredCharacters.films.length}</CardText>
            </CardBody>
        );
    })}
  </section>
  );
};

export default Search;
