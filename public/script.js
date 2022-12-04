function searchSummoner() {

    let summonerNickname = document.getElementById("summonerNickname").value;
    let server= document.getElementById("server").value;
    
    console.log(summonerNickname)
    console.log(server);

    var summoner = {"nickname": summonerNickname, "server": server};
    var summonerString = JSON.stringify(summoner);
    
    $.post("/request",
    {
       name: "viSion",
       designation: "Professional gamer"
    },
    function (data, status) {
       console.log(data);
    });
}

