export async function onRequest(context) {
  const filename = new URL(context.request.url).pathname.split('/').pop();
  if (filename.includes('.')) return context.next();
  return context.env.ASSETS.fetch(context.request.url.replace(/\/andalusien.*/, '/andalusien/index.html'));
}
