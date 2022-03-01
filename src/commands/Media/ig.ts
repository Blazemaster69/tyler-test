import { MessageType } from '@adiwajshing/baileys'
import request from '../../lib/request'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'ig',
            aliases: ['insta'],
            description: 'Download the post/video from ig ',
            category: 'media',
            dm: true,
            usage: `${client.config.prefix}ig [link]`
        })
    }
    // static count = 0
    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        
        if (!joined) return void M.reply('Provide the keywords you wanna search, Baka!')
        const chitoge = joined.trim()
        console.log(chitoge)
        const hx = require('hxz-api')
        
  case 'image':
    M.reply
        MessageType.image,
                    undefined,
                    undefined,
                    `Here you go`,
                    undefined
                )
    break
  case 'video':
    M.reply
       MessageType.video,
                    undefined,
                    undefined,
                    `Here you go`,
                    undefined
                )
    break
  default:
    M.reply("Invalid format")
}
    }
}
