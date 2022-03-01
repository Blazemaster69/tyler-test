import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import YT from '../../lib/YT'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'ytvideo',
            description: 'Downloads given YT Video',
            category: 'media',
            aliases: ['igdl'],
            usage: `${client.config.prefix}igdl [URL]`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        if (!M.urls.length) return void M.reply('🔎 Provide the URL of the YT video you want to download')
        const hx = require('hxz-api');
const link = 'https://www.instagram.com/p/CQpUpGvAhWq/?utm_source=ig_web_copy_link'

hx.igdl(link)
    .then(result => {
     console.log(result)
});
