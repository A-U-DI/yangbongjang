import React from 'react';
import Main from './page/Main';
import Post from './page/Post';
import {Route} from "react-router-dom";
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div>
      <Sidebar/>
      {/* <Route path="/" component={Main} exact/>
      <Route path="/post" component={Post} /> */}
    </div>
  );
}

export default App;