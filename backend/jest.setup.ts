import { mockServer } from './src/mockServer';

beforeAll(() => {
  mockServer.listen();
});

afterEach(() => {
  mockServer.resetHandlers();
});

afterAll(() => {
  mockServer.close();
});
