export default {
  '.react-calendar': {
    width: '350px',
    maxWidth: '100%',
    background: 'white',
    border: '1px solid #a0a096',
    fontFamily: 'Arial, Helvetica, sans-serif',
    lineHeight: '1.125em',

    '&--doubleView': {
      width: '700px',

      '& .react-calendar__viewContainer': {
        display: 'flex',
        margin: '-0.5em',

        '& > *': {
          width: '50%',
          margin: '0.5em',
        },
      },
    },

    '&, & *, & *:before, & *:after': {
      '-moz-box-sizing': 'border-box',
      '-webkit-box-sizing': 'border-box',
      boxSizing: 'border-box',
    },

    '& button': {
      margin: '0',
      border: '0',
      outline: 'none',

      '&:enabled:hover': {
        cursor: 'pointer',
      },
    },

    '&__navigation': {
      display: 'flex',
      height: '44px',
      marginBottom: '1em',

      '& button': {
        minWidth: '44px',
        background: 'none',

        '&:disabled': {
          backgroundColor: '#f0f0f0',
        },

        '&:enabled:hover, &:enabled:focus': {
          backgroundColor: '#e6e6e6',
        },
      },
    },

    '&__month-view': {
      '&__weekdays': {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '0.75em',

        '&__weekday': {
          padding: '0.5em',
        },
      },

      '&__weekNumbers .react-calendar__tile': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.75em',
        fontWeight: 'bold',
      },

      '&__days__day': {
        '&--weekend': {
          color: '#d10000',
        },

        '&--neighboringMonth': {
          color: '#757575',
        },
      },
    },

    '&__year-view .react-calendar__tile, &__decade-view .react-calendar__tile, &__century-view .react-calendar__tile':
      {
        padding: '2em 0.5em',
      },

    '&__tile': {
      maxWidth: '100%',
      padding: '10px 6.6667px',
      background: 'none',
      textAlign: 'center',
      lineHeight: '16px',

      '&:disabled': {
        backgroundColor: '#f0f0f0',
      },

      '&:enabled:hover, &:enabled:focus': {
        backgroundColor: '#e6e6e6',
      },

      '&--now': {
        background: '#ffff76',

        '&:enabled:hover, &:enabled:focus': {
          background: '#ffffa9',
        },
      },

      '&--hasActive': {
        background: '#76baff',

        '&:enabled:hover, &:enabled:focus': {
          background: '#a9d4ff',
        },
      },

      '&--active': {
        background: '#006edc',
        color: 'white',

        '&:enabled:hover, &:enabled:focus': {
          background: '#1087ff',
        },
      },
    },

    '&--selectRange .react-calendar__tile--hover': {
      backgroundColor: '#e6e6e6',
    },
  },
};
