import { rest } from 'msw'

export const handlers = [
  rest.post('/test', (req, res, ctx) => {
    const { message } = req.body as { message: string }
    return res(
      ctx.json({
        message: `${message}, reply: Mock Service is Here 👋`
      })
    )
  })
]
