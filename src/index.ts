process.env.NTBA_FIX_319 = '1';

import TelegramBot from 'node-telegram-bot-api';

export default TelegramBot;

interface MyTelegramBot extends TelegramBot {
  sendMarkdownMessage: (...params: Parameters<typeof bot['sendMessage']>) => ReturnType<typeof bot['sendMessage']>;
}

export const bot = new TelegramBot(process.env.TG_BOT_API_KEY, { polling: true }) as MyTelegramBot;

bot.sendMarkdownMessage = function(chatId, msg, params = {}) {
  return this.sendMessage(chatId, msg, { parse_mode: 'Markdown', ...params });
};
