import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const response = await fetch('http://localhost:2024/users');
      const data = await response.json();
      
      const username = data.username;

      res.status(200).json({ username });
    } catch (error) {
      console.error('Error fetching username:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
