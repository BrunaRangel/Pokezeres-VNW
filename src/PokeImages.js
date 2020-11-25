import React, {Component} from 'react'
import axios from 'axios'

class PokeImages extends Component{

    state = {
        images:[]
    }

    async componentDidMount(){
        const response = await axios.get(this.props.url)
        console.log(response.data.sprites.other.dream_world.front_default)

        this.setState({
            images: response.data.sprites.other.dream_world.front_default
          });
    }

    render(){
        return(
            <div>
                <img className="img-pokemon" src={this.state.images} alt="" />
            </div>
        )
    }
}

export default PokeImages;