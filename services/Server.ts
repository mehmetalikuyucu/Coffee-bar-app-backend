
import { FastifyReply, FastifyRequest } from "fastify";

import { FastifyPluginAsync } from 'fastify'

export const Server: FastifyPluginAsync = async (
    app,
    opts
): Promise<void> => {


    //create get func with fastify

    app.get("/",(req:FastifyRequest,res:FastifyReply)=>{
      res.send("Hello World")

    })



}
export default Server;