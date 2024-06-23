import axios from 'axios';

import {OnlineServer, Server} from '@models/server';

class ServerService {
  public async findServer(servers: Server[]) {
    const onlineServers: OnlineServer[] = await Promise.all(
      servers.map(async server => ({
        ...server,
        isOnline: await this.checkServerOnline(server),
      })),
    );

    const onlineServersSorted = onlineServers.filter(server => server.isOnline).sort((a, b) => a.priority - b.priority);

    if (onlineServersSorted.length === 0) {
      throw new Error('No servers are online.');
    }

    return onlineServersSorted[0];
  }

  private async checkServerOnline(server: Server): Promise<boolean> {
    try {
      const response = await axios.get(server.url, {timeout: 5000});
      return response.status >= 200 && response.status < 300;
    } catch (error) {
      return false;
    }
  }
}

const singleton = new ServerService();
export {singleton as ServerService};
