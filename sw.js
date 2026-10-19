// Compatibility worker for the former app address. Public data and profiles stay intact.
const MOVE_CACHE='ebt-dot-safari-move-v1';
const OLD_APP_PREFIX='ebt-dot-safari-v';
const oldRoot=new URL('./',self.location.href);
const newRoot=new URL('/ebt-dotpick/',self.location.origin);
self.addEventListener('message',event=>{
  if(event.data==='GET_APP_VERSION')event.ports[0]?.postMessage('2.3.0-move1');
});
self.addEventListener('install',event=>event.waitUntil((async()=>{
  const cache=await caches.open(MOVE_CACHE);
  for(const file of ['index.html','site.webmanifest']){
    const url=new URL(file,oldRoot),response=await fetch(url,{cache:'no-store'});
    if(!response.ok)throw Error('Forwarding page unavailable');
    await cache.put(url,response);
  }
  await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  for(const name of await caches.keys()){
    if(name.startsWith(OLD_APP_PREFIX))await caches.delete(name);
  }
  await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==oldRoot.origin||!url.pathname.startsWith(oldRoot.pathname))return;
  const relative=url.pathname.slice(oldRoot.pathname.length);
  if(event.request.mode==='navigate'&&(relative===''||relative==='index.html'||relative==='404.html')){
    event.respondWith(caches.open(MOVE_CACHE).then(cache=>cache.match(new URL('index.html',oldRoot))).then(response=>response||fetch(event.request)));
  }else if(relative==='site.webmanifest'){
    event.respondWith(caches.open(MOVE_CACHE).then(cache=>cache.match(new URL('site.webmanifest',oldRoot))).then(response=>response||fetch(event.request)));
  }else if(relative!=='sw.js'){
    event.respondWith(Promise.resolve(Response.redirect(new URL(relative+url.search,newRoot).href,302)));
  }
});
