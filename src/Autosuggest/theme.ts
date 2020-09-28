export default {
  container: {
    position: 'relative',
  },
  suggestionsContainer: {
    position: 'absolute',
    width: '100%',
    background: '#fff',
    zIndex: 1,
    maxHeight: 300,
    overflow: 'auto',
    borderRadius: 4,
    boxShadow:
      '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  },
  suggestionsList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  suggestion: {
    padding: 5,
    cursor: 'pointer',
  },
  suggestionHighlighted: {
    background: 'lightBlue',
  },
  input: {
    width: '100%',
    height: 32,
    borderRadius: 4,
    padding: '0 20px 0 10px',
    border: '1px solid #ccc',
    '&:focus': {
      borderColor: 'blue',
    },
  },
};
