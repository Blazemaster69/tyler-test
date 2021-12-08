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
            command: 'rules',
            description: `Get rules list`,
            aliases: ['rules'],
            category: 'general',
            usage: `${client.config.prefix}rules`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // fetch result of https://waifu.pics/api/sfw/waifu from the API using axios
        return void M.reply( await request.buffer(`https://i.pinimg.com/474x/b7/f8/af/b7f8af06a1f3f40aad8120a302a05c21--fight-club-rules.jpg`),
        MessageType.image,
                    undefined,
                    undefined,
                    `---「⚡ Rules for using the bot are listed below ⚡」---\n\n
   ⚠️ 𝙳𝙾𝙽'𝚃 𝙰𝚂𝙺 𝙵𝙾𝚁 𝚃𝙷𝙴 𝚂𝙲𝚁𝙸𝙿𝚃 ⚠️

⎆ ᴀꜱᴋ ᴍᴇ ?ꜱᴜᴘ ꜰᴏʀ ᴛʜᴇ ᴏꜰꜰɪᴄɪᴀʟ ɢʀᴏᴜᴘ ʟɪɴᴋ
⎆ ɪꜰ ʏᴏᴜ ʜᴀᴠᴇ ᴀɴʏ Qᴜᴇʀɪᴇꜱ ᴜꜱᴇ ?ᴍᴏᴅꜱ ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴍʏ ᴏᴡɴᴇʀꜱ
⎆ ᴅᴏɴ'ᴛ ꜱᴛʀᴜɢɢʟᴇ ᴡʜɪʟᴇ ᴜꜱɪɴɢ ᴄᴏᴍᴍᴀɴᴅꜱ, ᴜꜱᴇ ?ʜᴇʟᴘ ᴛᴏ ɢᴇᴛ ʜᴇʟᴘ ʟɪꜱᴛ
⎆ ᴅᴏɴ'ᴛ ꜱᴘᴀᴍ ᴛʜʀᴏᴜɢʜ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅꜱ. ɪ'ᴍ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ, ɪᴛ ᴍᴇᴀɴꜱ ɪ'ᴍ ᴏꜰꜰʟɪɴᴇ ᴏʀ ᴍʏ ꜱᴇʀᴠᴇʀ'ꜱ ᴅᴏᴡɴ
⎆ ᴅᴏɴ'ᴛ ᴍᴇꜱꜱᴀɢᴇ ᴍᴇ ɪɴ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ

📝 ＮＯＴＥ: REMEMBER TO KEEP RULES IN MIND OTHERWISE YOU'LL BE BANNED IN NO TIME 🚫

⚡ project mayhem ⚡ `,
                    undefined
                ).catch((reason: any) =>
            M.reply(`🎀 An error occurred. Please try again later.`))
    }
}
