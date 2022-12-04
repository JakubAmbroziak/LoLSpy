function searchSummoner() {

    let summonerNickname = document.getElementById("summonerNickname").value;
    let server= document.getElementById("server").value;
    
    console.log(summonerNickname)
    console.log(server);
  
    $.post("/summonerInfo",
    {
        summonerNickname: summonerNickname,
        server: server
    },
    function (data, status) {
       console.log(data);
    });
}



//   $( "button" ).on( "click", notify );
//   console.log("working");