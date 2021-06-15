import { v4 as uuidv4 } from 'uuid'

export default async (req, res) => {
  res.json({
    lastMutationID: 0,
    cookie: null,
    patch: [
      {op: 'clear'},
      {
        op: 'put',
        key: uuidv4(),
        value: {
          content: 'GPT-3 summary',
          referenceID: uuidv4(),
          order: 1,
        },
      },
      {
        op: 'put',
        key: uuidv4(),
        value: {
          content: 'GPT-3 summary another',
          referenceID: uuidv4(),
          order: 2,
        }
      }
    ]
  })
  res.end()
}