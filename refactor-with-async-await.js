var PlayerService = {
    getPlayerTeamId: function(playerId) {
        //return Promise.resolve($.ajax("/player/" + playerId + "/team")); //ajax already returns a thenable
        return Promise.resolve($.ajax("https://run.mocky.io/v3/718b969a-526f-4a0b-ba6d-29f347366e0a"));
    },

    getPlayers: function(teamId) {
        //return Promise.resolve($.ajax("/team/" + teamId + "/player")); //ajax already returns a thenable
        return Promise.resolve($.ajax("https://run.mocky.io/v3/a6490b9d-710c-4145-b6db-4a8f4087a4d5"));
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