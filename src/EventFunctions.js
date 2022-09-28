function BanKewWords(value,person){
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const result = value.replace(regex, "").replace(/\s{2,}/g, " ");
    const array = result.split(" ")
    
    console.log(array);

    if(array.includes("fuck")){
        console.log("Ban " + person);
    }
}
function SlashCommand(message){
    
    const array = message.content.split(" ")
    
    if(message.content[0] == "~"){
        if(array[0] == "~welcome"){
            message.reply("HELLO");
            return;
        }else if(array[0] == "~roll"){
            let rolls = "";
            let total = 0;
            for(let loop = 0; loop < array[1]; loop++){
                const temp = Math.floor(Math.random() * array[2]) + 1
                total += temp;
                rolls += "\nDice " + (loop + 1) + ": " + temp;
                
            }
            rolls += "\ntotal: " + total
            message.reply(rolls);
        }
    }
}

module.exports = {BanKewWords,SlashCommand}