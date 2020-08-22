// MAIN PART FOR REACT.JS WEB
// SEPARATED INTO 3 MAIN PARTS: HEADER, MAIN, AND FOOTER

import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentDidMount(){
    this.setState({isLoading: false})
  }
  render() {
    return (
      this.state.isLoading ? 
      <FadeLoader
        css={`
              position: absolute;
              top: 50%;
              left: 50%;
              margin-right: -50%;
              transform: translate(-50%, -50%);
              `}
          margin={40}
          height={40}
          width={15}
          color={"#2AB7FF"}
      /> : 
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
