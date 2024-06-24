import axios from 'axios';

import {OnlineServer, Server} from '@models/server';

const REQUEST_TIMEOUT = 5000;

class ServerService {
  public async findServer(servers: Server[]) {
    const onlineServers: OnlineServer[] = await this.checkServersOnline(servers);

    if (onlineServers.length === 0) {
      throw new Error('No servers are online.');
    }

    return this.getLowestPriorityServer(onlineServers);
  }

  private async checkServersOnline(servers: Server[]): Promise<OnlineServer[]> {
    const onlineServers: OnlineServer[] = await Promise.all(
      servers.map(async server => ({
        ...server,
        isOnline: await this.checkServerOnline(server.url),
      })),
    );

    return onlineServers.filter(server => server.isOnline);
  }

  private async checkServerOnline(serverUrl: string): Promise<boolean> {
    try {
      const response = await axios.get(serverUrl, {timeout: REQUEST_TIMEOUT});
      return response.status >= 200 && response.status < 300;
    } catch (error) {
      return false;
    }
  }

  private getLowestPriorityServer(servers: OnlineServer[]): OnlineServer {
    return servers.reduce((prev: OnlineServer, current: OnlineServer) => {
      return prev.priority < current.priority ? prev : current;
    });
  }
}

const singleton = new ServerService();
export {singleton as ServerService};
