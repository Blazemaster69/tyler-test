import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['sup'],
            description: 'Get the group invite link',
            category: 'general',
            usage: `${client.config.prefix}support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {

await this.client.sendMessage( M.sender.jid,` support group 
*Invite link:* https://chat.whatsapp.com/LN4mY3laHz61S1ybxHBeYd`, MessageType.text ) 
return void M.reply('*Sent you the Group Link in personal message*')
    }
}
