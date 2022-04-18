import { NextServer } from "next/dist/server/next";
import { NextServerOptions, ProxyConfig } from "@nrwl/next";

const express = require('express')
const path = require('path')
const chokidar = require('chokidar')

export default async function nextWatchServer(
  app: NextServer,
  settings: NextServerOptions & {[prop: string]:any},
  proxyConfig: ProxyConfig
) {
  //
  const handle = app.getRequestHandler()
  await app.prepare()

  const articlePath = process.env.articleMarkdownPath

  if(articlePath){
    chokidar.watch(articlePath,{
      usePolling: false,
      ignoreInitial: true
    })
    .on('all', async (filePathContext, eventContext = 'change')=>{
      // accessing private APIs
      // hotReloader is help us not to expose private API by next.js
      app['server']['hotReloader'].send('building')
      app['server']['hotReloader'].send('reloadPage')
    })
  }
  const server = express()
  server.disable('x-power-by')

  // Server shared assets copied to 'public' folder
  server.use(express.static(path.resolve(settings.dir, settings.conf.outdir, 'public')))

  if(proxyConfig){
    const proxyMiddleware = require('http-proxy-middleware')
    Object.keys(proxyConfig).forEach((context)=>{
      server.use(proxyMiddleware(context, proxyConfig[context]))
    })
  }

  server.all('*',(req,res)=>handle(req,res))
  server.listen(settings.port, settings.hostname)
}
