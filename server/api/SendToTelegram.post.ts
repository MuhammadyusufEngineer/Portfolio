export default defineEventHandler(async (event) => {
  const { name, email, msg } = await readBody(event)

  // Build the message to send to Telegram
  const message = `📩 New Submission:\n\n👤 Name: ${name}\n📧 Email: ${email} \n ${msg}`

  // Retrieve credentials from runtime config
  const config = useRuntimeConfig()
  const token = config.telegramToken
  const chatId = config.telegramChatId

  const telegramApi = `https://api.telegram.org/bot${token}/sendMessage`

  try {
    const response = await $fetch(telegramApi, {
      method: 'POST',
      body: {
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML'
      }
    })
    // Return a response to the client
    return { ok: true, result: response }
  } catch (error) {
    console.error('Error sending to Telegram:', error)
    return { ok: false, error }
  }
})
