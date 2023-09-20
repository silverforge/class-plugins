
export interface HostClass { }

export interface Plugin {
  hostClassRef: HostClass | undefined;
  init: (hostClass: HostClass) => void;
}

export interface Plugin1 {
  fruitName: string;
}

export interface Plugin2 {
  carType: string;
}

export interface Plugin3 {
  color: string;
}
