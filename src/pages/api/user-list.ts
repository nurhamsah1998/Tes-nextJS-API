// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { UserList } from "./user";

type Data = {
  id: number;
  name: string;
  message?: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  if (req.method === "GET") {
    res.status(200).json(UserList);
  } else if (req.method === "POST") {
    const response: any = { message: "Created" };
    const body: any = {
      id: UserList?.length + 1,
      name: req.body.name,
    };
    UserList.push(body);
    res.status(201).json(response);
  }
}
