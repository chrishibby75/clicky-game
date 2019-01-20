import React, { Component } from "react";
import FadeIn from "../transitions/fade-in";
import CharacterBox from "./characterBox";
import ScoreDisplay from "./scoredisplay";

const shuffleArray = arr => (
    arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1])
);

const initialChars = [
    {
        name: "Beagle",
        img: "img/250x180/beagle",
        clicked: false
    },
    {
        name: "Black and Tan",
        img: "img/250x180/black-and-tan",
        clicked: false
    },
    {
        name: "Bluetick Coonhound",
        img: "img/250x180/bluetick-coonhound",
        clicked: false
    },
    {
        name: "Bull Terrier",
        img: "img/250x180/bull-terrier",
        clicked: false
    },
    {
        name: "Chinese Sharpei",
        img: "img/250x180/chinese-sharpei",
        clicked: false
    },
    {
        name: "Chow Chow",
        img: "img/250x180/chow-chow",
        clicked: false
    },
    {
        name: "Collie",
        img: "img/250x180/collie",
        clicked: false
    },
    {
        name: "German Shepherd",
        img: "img/250x180/german-shepherd",
        clicked: false
    },
    {
        name: "Doberman",
        img: "img/250x180/doberman",
        clicked: false
    },
    {
        name: "German Wirehair Pointer",
        img: "img/250x180/german-wirehair-pointer",
        clicked: false
    },
    {
        name: "Golden Retriever",
        img: "img/250x180/golden",
        clicked: false
    },
    {
        name: "Great Dane",
        img: "img/250x180/great-dane",
        clicked: false
    },
    {
        name: "Irish Wolfhound",
        img: "img/250x180/irish-wolfhound",
        clicked: false
    },
    {
        name: "Jack Russell Terrier",
        img: "img/250x180/jack-russell-terrier",
        clicked: false
    },
    {
        name: "Labrador Retriever",
        img: "img/250x180/labrador-retriever",
        clicked: false
    },
    {
        name: "Pharaoh Hound",
        img: "img/250x180/pharaoh-hound",
        clicked: false
    },
    {
        name: "Rottweiler",
        img: "img/250x180/rottweiler",
        clicked: false
    },
    {
        name: "Saint Bernard",
        img: "img/250x180/saint-bernard",
        clicked: false
    },
    {
        name: "Saluki",
        img: "img/250x180/saluki",
        clicked: false
    },
    {
        name: "Siberian Husky",
        img: "img/250x180/siberian-husky",
        clicked: false
    },
    {
        name: "Staffordshire Bull Terrier",
        img: "img/250x180/staffordshire-bull-terrier",
        clicked: false
    },
    {
        name: "Tibetan Mastiff",
        img: "img/250x180/tibetan-mastiff",
        clicked: false
    },
    {
        name: "Tree Walking Coonhound",
        img: "img/250x180/tree-walking-coonhound",
        clicked: false
    },
    {
        name: "Wirehaired Vizsla",
        img: "img/250x180/wirehaired-vizsla",
        clicked: false
    }

]

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                score: 0
            },
            character: shuffleArray(initialChars)
        };
    }

    onCharacterClick = (index) => {
        if (!this.state.characters[index].clicked) {
            this.setState({
                characters: shuffleArray(this.state.characters.map((character, current) => {
                    return (current === index) ? { ...character, clicked: true } : character
                })),
                user: {
                    ...this.state.user.score + 1
                }
            });
        }
        else {
            this.setState({
                Characters: shuffleArray(this.state.characters.map(character => { return { ...character, clicked: false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
        }
    }

    render() {
        return (
            <div className="Board">
                <FadeIn
                    in={true}
                    duration={450}
                    length={"30px"}
                    direction={"bottom"}
                    delay={"1s"}>
                    <h4>Try to click on every Dog once. Once you click a dog the grid will shuffle<br />Try not to click the same dog twice or the game will start over.</h4>
                </FadeIn>
                <FadeIn
                    in={true}
                    duration={500}
                    direction={"bottom"}
                    delay={"1.5s"}>
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