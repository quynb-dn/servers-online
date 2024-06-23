import axios from 'axios';

import {Server} from '@models/server';

import {ServerService} from './server.service';

jest.mock('axios');

const DUMMY_SERVER: Server[] = [
  {
    url: 'https://server1.test',
    priority: 1,
  },
  {
    url: 'https://server2.test',
    priority: 4,
  },
  {
    url: 'http://server3.test',
    priority: 3,
  },
  {
    url: 'http://server4.test',
    priority: 2,
  },
];

describe('findServer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return the server with the lowest priority that is online', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({status: 500});
    (axios.get as jest.Mock).mockResolvedValueOnce({status: 200});
    (axios.get as jest.Mock).mockResolvedValueOnce({status: 200});
    (axios.get as jest.Mock).mockResolvedValueOnce({status: 200});

    const server = await ServerService.findServer(DUMMY_SERVER);
    expect(server.url).toBe('http://server4.test');
  });

  it('should throw an error if no servers are online', async () => {
    (axios.get as jest.Mock).mockRejectedValue(new Error('Request failed'));

    await expect(ServerService.findServer(DUMMY_SERVER)).rejects.toThrow('No servers are online.');
  });
});
