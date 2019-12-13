import React, {useState, useEffect} from 'react';
import {
    CardBody,
    CardTitle,
    CardText,
} from 'reactstrap';
import axios from 'axios';
import '../App.css';

const Characters = (props) => {
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

    let filteredCharacters = characters.filter( (character) => {
        return character.name.indexOf(props.search) !== -1;;
    })

  console.log(filteredCharacters);
  console.log(props.search);

  if(props.search.length > 0) {
      return(
        <section className='card-container'>
        {filteredCharacters.map( (filteredCharacters) => {
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
      )
  } else {
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
  }
};

export default Characters;
