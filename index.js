const {Client, RichEmbed} = require('discord.js')
const bot = new Client();
var score = 110;


bot.login(process.env.token);

const PREFIX = '!'

const ping = require('minecraft-server-util')

//bot.login(process.env.token);
//bot.login(token)

bot.on('ready', () =>{
    console.log('MDBot is Online!');

    bot.user.setActivity('for !help', {type: 'WATCHING'})

    
})

//Client.on("messageDelete", (messageDelete) => {
   //     const channel = messageDelete.guild.channels.find(ch => ch.name === 'log-stuff');channel.send(`The message : "${messageDelete.content}" by ${messageDelete.author} was deleted. There ID is ${messageDelete.author.id}`)
  //     }); 

bot.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(' ')
 
    switch(args[0]){
        case 'md':


     //       if(!args[1]) return message.channel.send('You must type a minecraft server ip')
        //    if(!args[2]) return message.channel.send('You must type a minecraft server port')
 
            ping('magicaldreams.us', 25565, (error, resonse) =>{
                if(error) throw error

                const Embed = new RichEmbed()
                .setColor(0x3498DB)
                .setTitle('Server Status')
                .addField('Server IP', "magicaldreams.us")
                .addField('Server Version', "1.15.2")
                .addField('Online players', resonse.onlinePlayers)
                .addField('Max Players', resonse.maxPlayers)
               msg.reply("Here you go, :) ")
               msg.reply(Embed)

               score = score+1;

               console.log(score)

            })
        break
 
    }

    switch(args[0]){
        case 'help':

            const Embed = new RichEmbed()
            .setColor(0xF0FF00)
            .setTitle('Magical Dreams: Help')
            .addField('Server Status', "!md")
            .addField('Managers', "managers")
            .addField('Apply for Staff', "app , apply , application")
            .addField('Server Ip', 'ip,  server ip')
            .addField('Staff Commands', '!admin')
            .addField('About MDBot', '!about')
            .addField('People Bios','!chums, !cole, !kindal, !nono , !kara, !bode , !mik')

           msg.reply(Embed)
           score = score+1;

           console.log(score)
    }

    switch(args[0]){
        case 'about':
           score = score+1;

            const Embed = new RichEmbed()
            .setColor(0x2AFF00)
            .setTitle('Magical Dreams: About')
            .addField('Current Build Version', "v1.4.2")
            .addField('Current Score Since Build', score)
            .addField('Author', "nono(stacker_nono)")
            .addField('Website', 'https://github.com/nolant108')

           msg.reply(Embed)
           console.log(score)
    }


    switch(args[0]){
        case 'admin':

            if(!msg.member.roles.find(r => r.name === "Tod")){
                        score = score+1;
                console.log(score)
                const Embed = new RichEmbed()
                .setColor(0x2AFF00)
                .setTitle('Magical Dreams: Admin Settings')
                .addField('Current Build Version3', "hello")
            }else{

                score = score+1;
                console.log(score)

                msg.reply('YOU DO NOT HAVE PERMISSIONS').then(msg => msg.delete(10000))
            }
    
              break;
    }

    switch(args[0]){
        case 'nono':
           score = score+1;

            const Embed = new RichEmbed()
            .setColor(0x2AFF00)
            .setTitle('Magical Dreams: NONO(stacker_nono)')
            .addField('Is he the best?', 'Duno, maybe?')
            .addField('Needs to learn more JS', 'YESS')
            .addField('Change is IGN?', 'Yesss, to stacker_yesyes')

           msg.reply(Embed)
           console.log(score)
    }

    switch(args[0]){
        case 'kindal':
           score = score+1;

            const Embed = new RichEmbed()
            .setColor(0x2AFF00)
            .setTitle('Magical Dreams: MakingMiners')
            .addField('Bio', 'We keep moving forward, opening new doors, and doing new things, because were curious and curiosity keeps leading us down new paths. Oh and by the way.. I’m Kindal tehe')
            .addField('I say...', 'Useless')


           msg.reply(Embed)
           console.log(score)
    }

    
    switch(args[0]){
        case 'chums':
           score = score+1;

            const Embed = new RichEmbed()
            .setColor(0x2AFF00)
            .setTitle('Magical Dreams: chums122')
            .addField('Yoda says', 'Only Just Begun, The meme war has')
            .addField('Did you ever hear the Tragedy of Darth Plagueis the wise?'
            , ' I thought not. Its not a story the Jedi would tell you. Its a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Its ironic he could save others from death, but not himself.')


           msg.reply(Embed)
           console.log(score)
    }

switch(args[0]){
    case 'cole':
       score = score+1;

        const Embed = new RichEmbed()
        .setColor(0x2AFF00)
        .setTitle('Magical Dreams: starport75')
        .addField('I say...', 'It can be anything! :)')

       msg.reply(Embed)
       console.log(score)
}

    switch(args[0]){
        case 'mik':
           score = score+1;

            const Embed = new RichEmbed()
            .setColor(0xBD00FF)
            .setTitle('Magical Dreams: Mik (kozzy913)')
            .addField('Bee Movie?', 'Barry says "Ya like Jazz?"')
            .addField('According to all known laws of aviation,'
            , 'there is no way a bee should be able to fly.')


           msg.reply(Embed)
           console.log(score)
    }


    switch(args[0]){
        case 'bode':
           score = score+1;

            const Embed = new RichEmbed()
            .setColor(0x2AFF00)
            .setTitle('Magical Dreams: Bode (Disneyland_)')
            .addField('Whomst', 'Iz Bode')
            .addField('and BTW', 'You Just got Vectored')


           msg.reply(Embed)
           console.log(score)
    }

    switch(args[0]){
        case 'kara':
           score = score+1;

            const Embed = new RichEmbed()
            .setColor(0x2AFF00)
            .setTitle('Magical Dreams: Kara (_Kara)')
            .addField('kara is a cool kat coordinator', 'kara is a cool kat coordinator!!!!!!!!')
            .addField('And She is...', 'A Dancing Queen')


           msg.reply(Embed)
           console.log(score)
    }

    if(msg.content === 'website'){

        msg.reply('Here is the website: https://magicaldreams.us/');
        score = score+1;

        console.log(score)
    }


    

    if(msg.content === 'website?'){

        msg.reply('Here is the website: https://magicaldreams.us/');
        score = score+1;

        console.log(score)
    }

    

    if(msg.content === 'app'){

        msg.reply('About a 2 week waiting period, here is the website: https://magicaldreams.us/apply/');
        score = score+1;

        console.log(score)
    }
    
        if(msg.content === 'apply'){

        msg.reply('About a 2 week waiting period, here is the website: https://magicaldreams.us/apply/');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'app?'){

        msg.reply('About a 2 week waiting period, here is the website: https://magicaldreams.us/apply/');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'application'){

        msg.reply('About a 2 week waiting period, here is the website: https://magicaldreams.us/apply/');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'ip'){

        msg.reply('Server ip is: magicaldreams.us');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'server ip'){

        msg.reply('Server ip is: magicaldreams.us');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'shamu'){

        msg.reply(':happy: :happy: :happy: :happy: :happy: :happy: :happy: :happy: :happy: :happy: :happy:(cant to cross emojis) ');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'managers'){

        msg.reply('Current Managers are: Chums122, DreamBig02, MakingMiners, Rei_Arch, Starport75');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'who are the managers'){

        msg.reply('Current Managers are: Chums122, DreamBig02, MakingMiners, Rei_Arch, Starport75');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'Good morning!'){

        msg.reply('Morning to you too! :)');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'morning'){

        msg.reply('Morning to you too! :) How are you?');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'morning!'){

        msg.reply('Morning to you too! :) How are you?');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'Morning!'){

        msg.reply('Morning to you too! :) How are you?');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'Morning'){

        msg.reply('Morning to you too! :) How are you?');
        score = score+1;

        console.log(score)
    }

    if(msg.content === 'im good how are you'){

        msg.reply('I am going well, thanks for asking! :)');
        score = score+1;

        console.log(score)
    }

    //----------------------swear filter-----------------------

    if(msg.content === 'fuck'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    if(msg.content === 'Fuck'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    if(msg.content === 'testing fucking swear filter'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    if(msg.content === 'fuck me'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    
    if(msg.content === 'Fuck'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    if(msg.content === 'shit'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    if(msg.content === 'hell'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    if(msg.content === '$h!T'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    if(msg.content === '$h!t'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    if(msg.content === 'asshole'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

    if(msg.content === 'son of a bitch'){

        score = score+1;
        console.log(score)
        msg.delete(10)
        msg.reply('You are not allowed to say that here! Our team has been notified and this incident has been logged.')
        .then(msg => msg.delete(10000))
    }

})
