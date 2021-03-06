const threadUtils = require('../threadUtils');

module.exports = bot => {
  const addInboxServerCommand = (...args) => threadUtils.addInboxServerCommand(bot, ...args);

  addInboxServerCommand('alert', async (msg, args, thread) => {
    if (! thread) return;

    if (args[0] && args[0].startsWith('c')) {
      await thread.setAlert(null);
      await thread.postSystemMessage(`Отмена оповещений`);
    } else {
      await thread.setAlert(msg.author.id);
      await thread.postSystemMessage(`Оповещаю ${msg.author.username}#${msg.author.discriminator} когда будет новый ответ`);
    }
  });
};
