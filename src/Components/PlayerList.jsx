import players from '../players'
import Player from './Player'

const PlayerList = () => {


    return players.map( (player) => {

            console.log('helo');
            return <Player key = {player.id} {...player}> </Player>
}
    

    )

}

export default PlayerList