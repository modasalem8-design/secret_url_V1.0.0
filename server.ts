// استعادات
import fastify from "fastify";

import "dotenv/config";
import { app } from "./src/app";
// تعريفات
const server= fastify({
    logger: {
        transport: { target: 'pino-pretty' }
    }
})
//  تشغيل السيرفر
const start = async () => {
    try {
        server.get('/',(request,replay)=>{
            return replay.code(200).send({message:"server start"})
        })
        server.register(app)
        const port=Number(process.env.PORT)
        await server.listen({
            port:port,
        })
        console.log(`server started in ${port}🦾👨‍✈️`)   
    }
    catch (err) {
        console.error(err)
    }
}
start()