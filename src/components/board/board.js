import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: "Beagle",
        img: "img/250x180/beagle.jpg",
        clicked: false
    },
    {
        name: "Black and Tan",
        img: "img/250x180/black-and-tan.jpg",
        clicked: false
    },
    {
        name: "Bluetick Coonhound",
        img: "img/250x180/bluetick-coonhound.jpg",
        clicked: false
    },
    {
        name: "Bull Terrier",
        img: "img/250x180/bull-terrier.jpg",
        clicked: false
    },
    {
        name: "Chinese Sharpei",
        img: "img/250x180/chinese-sharpei.jpg",
        clicked: false
    },
    {
        name: "Chow Chow",
        img: "img/250x180/chow-chow.jpg",
        clicked: false
    },
    {
        name: "Collie",
        img: "img/250x180/collie.jpg",
        clicked: false
    },
    {
        name: "German Shepherd",
        img: "img/250x180/german-shepherd.jpg",
        clicked: false
    },
    {
        name: "Doberman",
        img: "img/250x180/doberman.jpg",
        clicked: false
    },
    {
        name: "German Wirehair Pointer",
        img: "img/250x180/german-wirehair-pointer.jpg",
        clicked: false
    },
    {
        name: "Golden Retriever",
        img: "img/250x180/golden.jpg",
        clicked: false
    },
    {
        name: "Great Dane",
        img: "img/250x180/great-dane.jpg",
        clicked: false
    },
    {
        name: "Irish Wolfhound",
        img: "img/250x180/irish-wolfhound.jpg",
        clicked: false
    },
    {
        name: "Jack Russell Terrier",
        img: "img/250x180/jack-russell-terrier.jpg",
        clicked: false
    },
    {
        name: "Labrador Retriever",
        img: "img/250x180/labrador-retriever.jpg",
        clicked: false
    },
    {
        name: "Pharaoh Hound",
        img: "img/250x180/pharaoh-hound.jpg",
        clicked: false
    },
    {
        name: "Rottweiler",
        img: "img/250x180/rottweiler.jpg",
        clicked: false
    },
    {
        name: "Saint Bernard",
        img: "img/250x180/saint-bernard.jpg",
        clicked: false
    },
    {
        name: "Saluki",
        img: "img/250x180/saluki.jpg",
        clicked: false
    },
    {
        name: "Siberian Husky",
        img: "img/250x180/siberian-husky.jpg",
        clicked: false
    },
    {
        name: "Staffordshire Bull Terrier",
        img: "img/250x180/staffordshire-bull-terrier.jpg",
        clicked: false
    },
    {
        name: "Tibetan Mastiff",
        img: "img/250x180/tibetan-mastiff.jpg",
        clicked: false
    },
    {
        name: "Tree Walking Coonhound",
        img: "img/250x180/tree-walking-coonhound.jpg",
        clicked: false
    },
    {
        name: "Wirehaired Vizsla",
        img: "img/250x180/wirehaired-vizsla.jpg",
        clicked: false
    }

]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <p>Click on each dog just once to increase your score! Don't click on the same dog twice!</p>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}