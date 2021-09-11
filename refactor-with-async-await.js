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
    showTeammatesClick: async function() {
        let teamId = await PlayerService.getPlayerTeamId(this.playerId);
        let playerList = await PlayerService.getPlayers(teamId.id);
        console.log(playerList);
    }
};

PlayerDetailsController.showTeammatesClick();