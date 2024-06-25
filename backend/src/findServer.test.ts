import findServer from './findServer';
import servers from './servers.json';
import { HttpResponse, http } from 'msw';

import { mockServer } from './mockServer';

describe('findServer', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should return the server with the lowest priority', async () => {
    expect(await findServer()).toEqual({
      url: 'https://does-not-work.perfume.new',
      priority: 1,
    });
  });

  it('should reject when all servers are offline', async () => {
    mockServer.use(
      ...servers.map((server) =>
        http.get(
          server.url,
          () =>
            new HttpResponse(null, {
              status: 500,
            }),
        ),
      ),
    );

    await expect(findServer()).rejects.toThrow('No servers are online');
  });

  it('should abort after 5 seconds', async () => {
    const serverPromise = findServer();

    await jest.advanceTimersByTime(5000);

    await expect(serverPromise).rejects.toThrow('No servers are online');
  });
});
