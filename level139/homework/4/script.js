function NestedBoxes() {
      const boxStyle = {
        width: '300px',
        height: '300px',
        backgroundColor: '#ff9999',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };

      const innerBoxStyle = {
        width: '200px',
        height: '200px',
        backgroundColor: '#99ff99',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };

      const innerInnerBoxStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: '#9999ff',
      };

      return (
        <div style={boxStyle}>
          <div style={innerBoxStyle}>
            <div style={innerInnerBoxStyle}></div>
          </div>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<NestedBoxes />);