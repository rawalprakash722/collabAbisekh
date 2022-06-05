import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  site: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ site: 'gg logistics' })
}
