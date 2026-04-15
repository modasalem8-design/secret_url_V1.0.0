//  استعادة الملفات المشروع كلة في الملف دة
//  الاستعادات 
import fp from"fastify-plugin"
import "dotenv/config"
import  Postgres  from "@fastify/postgres";
import { FastifyPluginAsync } from "fastify"; 
import  service  from "./services/query.services";
import { schema } from "./schemas/auth.schemas";
// تعريف واستخراج الدالة 
export const app: FastifyPluginAsync = async(fastify,option)=> {
   await fastify.register(Postgres,{
       connectionString:process.env.LOCAL}
    )

     fastify.register(service)
    console.log("connect to app")}
