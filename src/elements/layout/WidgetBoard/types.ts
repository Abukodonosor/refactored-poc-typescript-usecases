export type WidgetBoardProps = {
  setRefresh: (value: boolean) => void;
  index: (value: string) => void;
  widgets: JSX.Element[];
  pos: number[];
  title: { title: string; caption: string }[];
};

export type WidgetBoardViewProps = Pick<WidgetBoardProps, 'widgets' | 'pos' | 'title'> & {
  defaultProps: any;
  refresh: (event: React.MouseEvent<HTMLAnchorElement> | undefined) => void;
};
