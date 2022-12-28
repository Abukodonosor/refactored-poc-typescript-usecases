export default {
  '.react-grid-layout': {
    position: 'relative',
    transition: 'height 200ms ease',
  },

  '.react-grid-item': {
    transition: 'all 200ms ease',
    transitionProperty: 'left, top',
    background: '#d3d3d3',
    textAlign: 'center',

    '& span': {
      display: 'inline-block',
      padding: '20px 10px',
    },

    '&.cssTransforms': {
      transitionProperty: 'transform',
    },

    '&.resizing': {
      zIndex: '1',
      willChange: 'width, height',
    },

    '&.react-draggable-dragging': {
      transition: 'none',
      zIndex: '3',
      willChange: 'transform',
    },

    '&.react-grid-placeholder': {
      background: 'red',
      opacity: '0.2',
      transitionDuration: '100ms',
      zIndex: '2',
      '-webkit-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      '-o-user-select': 'none',
      userSelect: 'none',
    },

    '& > .react-resizable-handle': {
      position: 'absolute',
      width: '20px',
      height: '20px',
      bottom: '0',
      right: '0',
      cursor: 'se-resize',

      '&::after': {
        content: '',
        position: 'absolute',
        right: '3px',
        bottom: '3px',
        width: '5px',
        height: '5px',
        borderRight: '2px solid rgba(0, 0, 0, 0.4)',
        borderBottom: '2px solid rgba(0, 0, 0, 0.4)',
      },
    },
  },
};
