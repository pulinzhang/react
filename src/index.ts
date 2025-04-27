export interface Env {
  // 这里可以添加环境变量
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    return new Response('Hello from Cloudflare Workers!');
  },
}; 