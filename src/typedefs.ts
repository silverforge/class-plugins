
export interface HostClass { }

export interface BasePlugin {
  hostClassRef: HostClass | undefined;
  init: (hostClass: HostClass) => void;
}

export interface Plugin1 extends BasePlugin {
  fruitName: string;
}

export interface Plugin2 extends BasePlugin {
  carType: string;
}

export interface Plugin3 extends BasePlugin {
  color: string;
}
