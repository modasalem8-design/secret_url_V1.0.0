import { FastifyPluginAsync } from "fastify";
import "@fastify/postgres"
import "dotenv/config"
const service: FastifyPluginAsync = async (fastify, option) => {
    fastify.get("/secret", async (request, replay) => {
        const sql = await fastify.pg.connect()
        try {
            const result = await sql.query("SELECT FROM secret")
            return replay.code(200).send(result.rows)
        } catch (err) { console.error(err) }
        finally { sql.relase() }
    })
}
export default service