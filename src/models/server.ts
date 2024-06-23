export type Server = {
  url: string;
  priority: number;
};

export type OnlineServer = Server & {
  isOnline: boolean;
};
