import { ListProperties } from "./list-properties.interface";
import { useEffect } from "react";
import {
  Index,
  IndexRange,
  InfiniteLoader,
  List as VirtualizedList,
  AutoSizer,
  ListRowProps,
} from "react-virtualized";
import { LIST_ITEM_LOADED, LIST_ITEM_LOADING } from "./list.constant";

let itemStatusMap: Record<number, any> = {};

export const List = ({
  className,
  wrapperClassName,
  error,
  total,
  itemHeight,
  itemRenderer,
  loadMore,
}: ListProperties) => {
  const isRowLoaded = ({ index }: Index) => !!itemStatusMap[index];

  const loadMoreRows = async ({ startIndex, stopIndex }: IndexRange) => {
    console.log({ startIndex, stopIndex });
    for (let index = startIndex; index <= stopIndex; index++) {
      itemStatusMap[index] = LIST_ITEM_LOADING;
    }

    await loadMore();

    for (let index = startIndex; index <= stopIndex; index++) {
      itemStatusMap[index] = LIST_ITEM_LOADED;
    }
  };

  useEffect(() => {
    loadMore();
  }, []);

  if (error) {
    return <div className={className}>No Result</div>;
  }

  return (
    <div className={wrapperClassName}>
      <InfiniteLoader
        isRowLoaded={isRowLoaded}
        loadMoreRows={loadMoreRows}
        rowCount={total}
      >
        {({ onRowsRendered, registerChild }) => (
          <AutoSizer>
            {({ height, width }) => (
              <VirtualizedList
                className={className}
                ref={registerChild}
                width={width}
                height={height}
                rowCount={total}
                rowHeight={itemHeight}
                rowRenderer={({ key, index, style }: ListRowProps) =>
                  itemRenderer({
                    key,
                    index,
                    style,
                    isLoaded: itemStatusMap[index] === LIST_ITEM_LOADED,
                  })
                }
                onRowsRendered={onRowsRendered}
              />
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    </div>
  );
};
