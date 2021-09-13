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
    showTeammatesClick: async () => {
        try {
            let responseTeam    = await PlayerService.getPlayerTeamId(this.playerId);   //wait for the getPlayerTeamId to return a response
            let teamId          = await responseTeam.json();                            //then wait for it to parse as a JSON
            let responsePlayers = await PlayerService.getPlayers(teamId.id);            //then wait for the getPlayers to return a response
            let playerList      = await responsePlayers.json();                         //then wait for it to parse as a JSON
            console.log(playerList);                                                    //then finally prints it to the console

        } catch (e) {
            console.log("There was an error.", e);                                      //if there's an error at any stage, console log error message
        }
    }
};

PlayerDetailsController.showTeammatesClick();