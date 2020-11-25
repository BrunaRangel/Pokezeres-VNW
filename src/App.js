import React, {Component} from 'react';
import "./styles.css"
import axios from 'axios'
import pokeball from './img/pokeball.png'
import PokeImages from './PokeImages'
import Ash from './img/ashPikachu.png'
import trioPoke from './img/trio-poke.png'
import logo from './img/logo.png'
import abertura from './music/abertura.mp3'

const apiPokemon = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=30"
});

class Pokedex extends Component{
  state ={
    pokeList: []
  }

  async componentDidMount() {
    const response = await apiPokemon.get()
    console.log(response.data.results)
  
    this.setState({
      pokeList: response.data.results
    });
  }

  render(){
    return(
      <div className="container">
        <div className="box_header">
          <img className="img_pokeball" src={pokeball} alt="Imagem de uma Pokébola" />
          <p className="title">POKEZERES</p>
        </div>
        <div className="box_map">
          {this.state.pokeList.map((item, index) =>(
          <div key={index} className="box_map_return">
            <PokeImages url={item.url} />
            <div className="box_description">
              <h2 className="name">{item.name}</h2>
              <p className="paragrafo">Pokémon é a contração de duas palavras em inglês: pocket, 
                que significa bolso; e monster, que significa monstro. 
                Assim, um pokémon é um "monstro de bolso". </p>
              <p className="year">Ano de criação:<span className="number-year">1995</span></p>
            </div>
          </div>
          ))}
        </div>
        <div className="box_music">
          <audio className="music" src={abertura} controls="controls" autoplay="autoplay" loop ></audio>
        </div>
        <div className="footer">
            <div className="box_ash">
              <img className="ash" src={Ash} alt="Imagem do Ash com o Pikachu" />
            </div>
            <div className="description">
              <p className="creator"><span className="span_creator">Criador:</span> Satoshi Tajiri</p>
              <p className="owner"><span className="span_owner">Proprietário:</span>Nitendo</p>
            </div>
            <div className="box_trio_poke">
              <img className="logo" src={logo} alt="Imagem Logo Pokémon" />
              <img className="trio_poke" src={trioPoke} alt="" />
            </div>
        </div>
      </div>
    );
  }
}

export default Pokedex;