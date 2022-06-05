import type { NextApiRequest, NextApiResponse } from 'next'
import {baseUrl } from '../../../components/constrant'
import axios from 'axios'
import { serialize } from 'cookie'

export default async function(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(baseUrl)
  const {email, password} = req.body;
  try {
    const url = `${baseUrl}/auth/signin`;
    const user =await axios.post(url, {email, password});
    const serialised = serialize("accessToken", user.data.data.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });
      res.setHeader("Set-Cookie", serialised);
      const data={
        success:true,
        ...user.data,
      }
      res.status(200).json(data);
    } catch (error) {
      console.log(error)
      res.status(403).json({ 
        success: false,
        message: 'Invalid email or password'
      });
    }
}