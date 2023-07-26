type ListItemRenderer = {
  key: React.Key;
  index: number;
  style: React.CSSProperties;
  isLoaded: boolean;
};

export interface ListProperties {
  error?: boolean;
  total: number;
  itemHeight: number;
  itemRenderer: ({ key, index, isLoaded }: ListItemRenderer) => React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  children?: React.ReactNode;
  loadMore: () => Promise<void>;
}
