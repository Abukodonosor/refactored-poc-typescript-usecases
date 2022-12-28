import RGL, { WidthProvider } from 'react-grid-layout';
import { Card, CardContent, CardHeader, IconButton } from '@mui/material';
import { RefreshOutlinedIcon } from '../../../assets/icons';
import { WidgetBoardViewProps } from './types';
import { Text } from 'elements/components';

const ReactGridLayout = WidthProvider(RGL);

/* TODO: need to save layout after dragging it around, among other dynamic features*/
export const WidgetBoardView: React.FC<WidgetBoardViewProps> = ({
  defaultProps,
  widgets,
  pos,
  title,
  refresh,
}) => {
  /* TODO: position need to be saved, also unsure what the behaviour should be */
  return (
    <ReactGridLayout {...defaultProps} isBounded={true} containerPadding={[100, 0]}>
      {widgets.map((widget, index) => (
        <div
          className={`widget${index}`}
          key={index}
          data-grid={{ x: pos[index], y: 0, w: 5, h: 10, static: false, minH: 8, minW: 3 }}
        >
          <Card sx={{ width: '100%', height: '100%' }}>
            <CardHeader
              sx={{ textAlign: 'left' }}
              action={
                <IconButton id={String(index)} aria-label="refresh" onClick={refresh} component="a">
                  <RefreshOutlinedIcon />
                </IconButton>
              }
              title={<Text variant="h6">{title[index].title}</Text>}
              subheader={<Text variant="subtitle1">{title[index].caption}</Text>}
            />
            <CardContent sx={{ width: '100%', height: '80%' }}>{widget}</CardContent>
          </Card>
        </div>
      ))}
      {/* I need this invisible widget for bounding for now */}
      <div
        className="widget3"
        key="3"
        data-grid={{ x: 12, y: 19.5, w: 0.1, h: 0.1, static: true }}
        style={{ display: 'none' }}
      ></div>
    </ReactGridLayout>
  );

  /* probably better way to generate: */
  // static defaultProps = {
  //   className: "layout",
  //   items: 20,
  //   rowHeight: 30,
  //   onLayoutChange: function () { },
  //   cols: 12
  // };

  // constructor(props) {
  //   super(props);

  //   const layout = this.generateLayout();
  //   this.state = { layout };
  // }

  // generateDOM() {
  //   return _.map(_.range(this.props.items), function (i) {
  //     return (
  //       <div key={i}>
  //         <span className="text">{i}</span>
  //       </div>
  //     );
  //   });
  // }

  // generateLayout() {
  //   const p = this.props;
  //   return _.map(new Array(p.items), function (item, i) {
  //     const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
  //     return {
  //       x: (i * 2) % 12,
  //       y: Math.floor(i / 6) * y,
  //       w: 2,
  //       h: y,
  //       i: i.toString()
  //     };
  //   });
  // }

  // onLayoutChange(layout) {
  //   this.props.onLayoutChange(layout);
  // }

  // render() {
  //   return (
  //     <ReactGridLayout
  //       layout={this.state.layout}
  //       onLayoutChange={this.onLayoutChange}
  //       isBounded={true}
  //       {...this.props}
  //     >
  //       {/* {this.generateDOM()} */}
  //     </ReactGridLayout>
  //   );
  // }
};
