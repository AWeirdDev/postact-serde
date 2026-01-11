class Shell<T> {
  value: T;

  constructor(df: T) {
    this.value = df;
  }

  set(value: T) {
    this.value = value;
  }
}

export const MAX_RECURSION_DEPTH: Shell<number> = new Shell(100);
