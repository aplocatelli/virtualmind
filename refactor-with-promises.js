var PlayerService = {
    getPlayerTeamId: playerId => {
        return fetch(`/player/${playerId}/team`);  //fetch returns a promise
    },

    getPlayers: teamId => {
        return fetch(`/team/${teamId}/player`);    //fetch returns a promise
    }
}

//Get team id using the player id, then get all players that belong to that team and prints the list to the console
var PlayerDetailsController = {
    playerId: 8,
    showTeammatesClick: () => {
        PlayerService.getPlayerTeamId(this.playerId)                //call getPlayerTeamId to find out the team id
        .then(responseTeam => responseTeam.json())                  //when the promise returned by getPlayerTeamId resolves, parse it as a JSON
        .then(team => PlayerService.getPlayers(team.id))            //then use the team id to call getPlayers 
        .then(responsePlayers => responsePlayers.json())            //when the promise returned by getPlayers resolves, parse it as a JSON
        .then(playerList => console.log(playerList))                //then use the retured playerList to print to the console
        .catch(error => console.log("There was an error.", error)); //if there's an error at any stage, log it to the console
    }
};

PlayerDetailsController.showTeammatesClick();