import React from 'react';
import Main from './page/Main';
import Post from './page/Post';
import Board from './page/Board';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';
import {Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Route path="/" component={Main} exact/>
      <Route path="/post" component={Post} />
      <Route path="/board" component={Board}/>
      <Route path="/signIn" component={SignIn}/>
      <Route path="/signUp" component={SignUp}/>
    </div>
  );
}

export default App;