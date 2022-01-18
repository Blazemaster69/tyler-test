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
            command: 'dev',
            description: `Get dev command list`,
            aliases: ['dev'],
            category: 'general',
            usage: `${client.config.prefix}rules`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // fetch result of https://waifu.pics/api/sfw/waifu from the API using axios
        return void M.reply( await request.buffer(`https://miro.medium.com/max/900/1*-5-9L2C7uHiNobPhz0FbRA.jpeg`),
        MessageType.image,
                    undefined,
                    undefined,
                    `---「⚡ developer commands are listed below ⚡」---\n\n
1]ban
2]broadcast
3]disable
4]enable
5]eval
6]join
7]leave
8]setprefix
9]status
10]unban

⚡ project mayhem ⚡ `,
                    undefined
                ).catch((reason: any) =>
            M.reply(`🎀 An error occurred. Please try again later.`))
    }
}
