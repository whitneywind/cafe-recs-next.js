// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// http://localhost:3000/api/hello
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  email: string
}[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([{ name: 'John Doe', email: 'my email' }])
}
