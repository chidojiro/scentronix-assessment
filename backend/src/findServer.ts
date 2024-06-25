import servers from './servers.json';
import { Server } from './types';

const TIMEOUT = 5000;

async function findServer() {
  const onlineServers = (
    await Promise.all(
      servers.map(async (server) => {
        try {
          const controller = new AbortController();

          const timeout = setTimeout(() => {
            controller.abort();
          }, TIMEOUT);

          const response = await fetch(server.url, { signal: controller.signal });

          clearTimeout(timeout);

          if (response.ok) return server;
        } catch {
          return;
        }
      }),
    )
  ).filter(Boolean);

  if (onlineServers.length === 0) {
    throw new Error('No servers are online');
  }

  const sortedServers = onlineServers.sort((a, b) => a.priority - b.priority);

  return sortedServers[0];
}

export default findServer;
