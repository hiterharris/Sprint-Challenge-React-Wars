import React, {useState, useEffect} from 'react';
import {
    CardBody,
    CardTitle,
    CardText,
} from 'reactstrap';
import axios from 'axios';
import '../App.css';

const Characters = () => {
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
        {characters.map( (character) => {
            return (
                <CardBody className='card'>
                    <CardTitle className='name'>{character.name}</CardTitle>
                    <CardText className='text'>Height: {character.height} cm</CardText>
                    <CardText className='text'>Weight: {character.mass} kg</CardText>
                    <CardText className='text'>Number of Starships: {character.starships.length}</CardText>
                    <CardText className='text'>Number of Vehicles: {character.vehicles.length}</CardText>
                    <CardText className='text'>Number of Films: {character.films.length}</CardText>
                </CardBody>
            );
        })}
      </section>
  );
};

export default Characters;
