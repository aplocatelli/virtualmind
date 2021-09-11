var PlayerService = {
    getPlayerTeamId: function(playerId) {
        return fetch("/player/" + playerId + "/team"); //fetch returns a promise
    },

    getPlayers: function(teamId) {
        return fetch("/team/" + teamId + "/player"); //fetch returns a promise
    }
}

//Get team id using the player id, then get all players that belong to that team and prints the list to the console
var PlayerDetailsController = {
    playerId: 8,
    showTeammatesClick: function() {
        PlayerService.getPlayerTeamId(this.playerId) //call getPlayerTeamId to find out the team id
        .then(team => PlayerService.getPlayers(team.id)) //when the promise returned by getPlayerTeamId resolve, then use the team id to call getPlayers 
        .then(playerList => console.log(playerList)) //when the promise returned by getPlayers resolve, then use the retured playerList to print to the console
        .catch(console.log("There was an error.")); //if there's an error at any stage
    }
};

PlayerDetailsController.showTeammatesClick();