export default {
  '.react-datetime-picker': {
    display: 'inline-flex',
    position: 'relative',
    backgroundColor: '#f5f8fa',
    borderRadius: '10px',
    width: '409px',
    height: '34px',

    '&, & *, & *:before, & *:after': {
      '-moz-box-sizing': 'border-box',
      '-webkit-box-sizing': 'border-box',
      boxSizing: 'border-box',
    },

    '&--disabled': {
      backgroundColor: '#f0f0f0',
      color: '#6d6d6d',
    },

    '&__wrapper': {
      display: 'flex',
      flexGrow: '1',
      flexShrink: '0',
    },

    '&__inputGroup': {
      minWidth: 'calc(4px + (4px * 3) + 0.54em * 6 + 0.217em * 2)',
      flexGrow: '1',
      padding: '0 2px 0 10px',

      '&__divider': {
        padding: '1px 0',
        whiteSpace: 'pre',
      },

      '&__input': {
        minWidth: '0.54em',
        height: 'calc(100% - 2px)',
        position: 'relative',
        padding: '1px',
        border: '0',
        background: 'none',
        font: 'inherit',
        boxSizing: 'content-box',
        '-moz-appearance': 'textfield',

        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          margin: '0',
        },

        '&:invalid': {
          background: 'rgba(255, 0, 0, 0.1)',
        },

        '&--hasLeadingZero': {
          marginLeft: '-0.54em',
          paddingLeft: 'calc(1px + 0.54em)',
        },
      },

      '&__amPm': {
        font: 'inherit',
        '-moz-appearance': 'menulist',
      },
    },

    '&__button': {
      cursor: 'pointer',

      '&:enabled:hover .react-datetime-picker__button__icon, &:enabled:focus .react-datetime-picker__button__icon':
        {
          stroke: '#0078d7',
        },

      '&:disabled .react-datetime-picker__button__icon': {
        stroke: '#6d6d6d',
      },

      '& svg': {
        display: 'inherit',
      },
    },

    '&__calendar, &__clock': {
      zIndex: '1',

      '&--closed': {
        display: 'none',
      },
    },

    '&__calendar': {
      width: '350px',
      maxWidth: '100vw',

      '& .react-calendar': {
        borderWidth: 'thin',
      },
    },

    '&__clock': {
      width: '200px',
      height: '200px',
      maxWidth: '100vw',
      padding: '25px',
      backgroundColor: 'white',
      border: 'thin solid #a0a096',
    },
  },
};
