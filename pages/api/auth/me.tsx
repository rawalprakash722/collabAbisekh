import type { NextApiRequest, NextApiResponse } from 'next'
import { baseUrl } from '../../../components/constrant';
export default async function handler(
      req: NextApiRequest,
      res: NextApiResponse
  ) {
    let data:any;
   try {
      const { cookies } = req;
      const accessToken = cookies.accessToken;
      const res = await fetch(`${baseUrl}/auth/me`,{
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        });
        data = await res.json();
   } catch (error) {
    res.status(403).json({ 
      success: false,
      message: 'Unauthorized'
    });
   }
   if(data){
        res.status(200).json(data);
    }
}
