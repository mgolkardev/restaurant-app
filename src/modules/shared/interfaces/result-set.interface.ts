export interface ResultSet<T> {
  status: boolean;
  data: {
    count: number;
    open_count: number;
    finalResult: T;
  };
}
