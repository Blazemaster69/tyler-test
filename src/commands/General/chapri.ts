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
            description: 'reveals true chapri.',
            category: 'general',
            usage: `chapri`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/audio/chapri.mp3'
        ]
        let tyler = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: tyler }, MessageType.audio, {
            mimetype: Mimetype.mp3,
            caption: `⚡ huehuehue .. \n` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
