/** @format */

import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'hi',
            description: 'Say hi to the bot.',
            category: 'general',
            usage: `${client.config.prefix}hi`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/tyler-hi.mp4'
        ]
        let tyler = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: tyler }, MessageType.video, {
            mimetype: Mimetype.gif,
            caption: `⚡ hi lets get started ,the first rule of fight club is dont talk about fight club .. \n` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
