import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'
// import { MessageType, Mimetype } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'blackpink',
            description: 'Will send you random meme.',
            aliases: ['blink'],
            category: 'fun',
            usage: `${client.config.prefix}meme`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // fetch result of https://api.waifu.pics/sfw/waifu from the API using axios
         const rnekol = ["dankindianmemes", "dankmemes", "memes", "goodanimemes"];
        const rnekolc = rnekol[Math.floor(Math.random() * rnekol.length)];
        const { data } = await axios.get('https://server-api-rey.herokuapp.com/api/wallpaper/random/blackpink?apikey=apirey' + rnekolc)
        const buffer = await request.buffer(data.url).catch((e) => {
            return void M.reply(e.message)
        })
        while (true) {
            try {
                M.reply(
                    buffer || 'Could not fetch image. Please try again later',
                    MessageType.image,
                    undefined,
                    undefined,
                    `⚡ huehuehue\n`,
                    undefined
                ).catch((e) => {
                    console.log(`This error occurs when an image is sent via M.reply()\n Child Catch Block : \n${e}`)
                    // console.log('Failed')
                    M.reply(`Could not fetch image. Here's the URL: ${data.url}`)
                })
                break
            } catch (e) {
                // console.log('Failed2')
                M.reply(`Could not fetch image. Here's the URL : ${data.url}`)
                console.log(`This error occurs when an image is sent via M.reply()\n Parent Catch Block : \n${e}`)
            }
        }
        return void null
    }
}
