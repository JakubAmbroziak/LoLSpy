var xhttp = new XMLHttpRequest();
this.server.open(this.method, this.url, true);

function searchSummoner() {

    let summonerNickname = document.getElementById("summonerNickname").value;
    let server= document.getElementById("server").value;
    
    console.log(summonerNickname)
    console.log(server);

    var summoner = {"nickname": summonerNickname, "server": server};
    var summonerString = JSON.stringify(summoner);
    xhttp.send(summonerString);

}

