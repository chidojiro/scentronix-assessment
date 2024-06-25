import { HttpResponse, http } from 'msw';
import servers from './servers.json';

import { setupServer } from 'msw/node';

export const mockServer = setupServer(
  ...servers.map((server) => http.get(server.url, () => HttpResponse.json({}))),
);
