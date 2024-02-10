module.exports = (client) => {
    
    let date = new Date();
    let day = ("0"+date.getDate()).slice(-2);
    let month = ("0"+(date.getMonth()+1)).slice(-2);
    let year = date.getFullYear();
    let hour = ("0"+date.getHours()).slice(-2);
    let minute = ("0"+date.getMinutes()).slice(-2);
    let second = ("0"+date.getSeconds()).slice(-2);
    let timezone = date.toTimeString().slice(9);

    console.log('\x1b[1m\x1b[37m%s\x1b[36m%s\x1b[37m%s\x1b[0m', `\n----------------------------------------------------`, `\r\n${client.user.tag} `, `is online.`);
    console.log(`\x1b[1m\x1b[37m%s\x1b[37m%s\x1b[0m`, month + "-" + day + "-" + year + " " + hour + ":" + minute + ":" + second + ` `+ timezone +"\r\n", `----------------------------------------------------\n`);

}