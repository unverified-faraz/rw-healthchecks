import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return { root: true, branch: "very-super-updated-main" }
  })
  fastify.get('/health', async function (request, reply) {
    return reply.send("OK")
  })
}

export default root;
