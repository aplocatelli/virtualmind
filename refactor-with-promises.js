var PlayerService = {
    getPlayerTeamId: function(playerId) {
        return Promise.resolve($.ajax("/player/" + playerId + "/team")); //ajax already returns a thenable
    },

    getPlayers: function(teamId) {
        return Promise.resolve($.ajax("/team/" + teamId + "/player")); //ajax already returns a thenable
    }
}

//Get team id using the player id, then get all players that belong to that team and prints the list to the console
var PlayerDetailsController = {
    playerId: 8,
    showTeammatesClick: function() {
        PlayerService.getPlayerTeamId(this.playerId)
        .then(team => PlayerService.getPlayers(team.id)
        .then(playerList => console.log(playerList)));
    }
};

PlayerDetailsController.showTeammatesClick();