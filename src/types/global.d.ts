declare interface ModuleDef {
  [key: string]: any;
}

declare interface ImportMeta {
  readonly hot?: {
    accept(): void;
    accept(fn: (params: { module: ModuleDef }) => void): void;
    accept(
      deps: string[],
      fn: (params: { module: ModuleDef; deps: ModuleDef[] }) => void
    ): void;
    dispose(fn: () => void): void;
    invalidate(): void;
  };
}
