import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackButton from './components/backButton';
import Content from './components/content';
import Menu from './components/menu';
import Header from './components/header';
import Schedule from './components/schedule';
import Review from './components/Review';
import profileTemp from "./Images/derp.jpg";

function App() {
  return (
    <div className='page'>
      <BackButton />
      <div id="wrapper">
        <Header />
        <div id="center">
          <div id="left">
            <Schedule />
            <Review id={1} userID={1} userPicture={profileTemp} username={"Mike Oxlong"} score={5} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum blandit condimentum. Morbi sodales libero cursus, bibendum nisl at, feugiat quam. Curabitur molestie sed dui luctus facilisis. Phasellus et enim a libero interdum sagittis eu eget justo. Duis suscipit tincidunt aliquam. Nulla nec gravida magna. Vestibulum laoreet diam ut tortor pretium ullamcorper. Integer sed felis quis justo imperdiet maximus eget ut mi. Pellentesque placerat facilisis nisi eu laoreet. Suspendisse commodo tempor risus, vitae feugiat enim malesuada non. Aenean lacinia odio massa, quis scelerisque lectus rhoncus volutpat. Nullam quis rhoncus dui. Donec lacinia sem porta augue tempus semper. Quisque porta egestas mauris, sed pretium nunc. Aliquam et eros porta, elementum diam ut, vulputate mauris. Pellentesque id eleifend lorem, eget blandit mi."}/>
            <Review id={2} userID={3} userPicture={profileTemp} username={"Ben Dover"} score={1} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum blandit condimentum. Morbi sodales libero cursus, bibendum nisl at, feugiat quam. Curabitur molestie sed dui luctus facilisis. Phasellus et enim a libero interdum sagittis eu eget justo. Duis suscipit tincidunt aliquam. Nulla nec gravida magna. Vestibulum laoreet diam ut tortor pretium ullamcorper. Integer sed felis quis justo imperdiet maximus eget ut mi. Pellentesque placerat facilisis nisi eu laoreet. Suspendisse commodo tempor risus, vitae feugiat enim malesuada non. Aenean lacinia odio massa, quis scelerisque lectus rhoncus volutpat. Nullam quis rhoncus dui. Donec lacinia sem porta augue tempus semper. Quisque porta egestas mauris, sed pretium nunc. Aliquam et eros porta, elementum diam ut, vulputate mauris. Pellentesque id eleifend lorem, eget blandit mi."}/>
            <Review id={3} userID={2} userPicture={profileTemp} username={"Moe Lester"} score={2} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum blandit condimentum. Morbi sodales libero cursus, bibendum nisl at, feugiat quam. Curabitur molestie sed dui luctus facilisis. Phasellus et enim a libero interdum sagittis eu eget justo. Duis suscipit tincidunt aliquam. Nulla nec gravida magna. Vestibulum laoreet diam ut tortor pretium ullamcorper. Integer sed felis quis justo imperdiet maximus eget ut mi. Pellentesque placerat facilisis nisi eu laoreet. Suspendisse commodo tempor risus, vitae feugiat enim malesuada non. Aenean lacinia odio massa, quis scelerisque lectus rhoncus volutpat. Nullam quis rhoncus dui. Donec lacinia sem porta augue tempus semper. Quisque porta egestas mauris, sed pretium nunc. Aliquam et eros porta, elementum diam ut, vulputate mauris. Pellentesque id eleifend lorem, eget blandit mi."}/>
            <Review id={4} userID={4} userPicture={profileTemp} username={"Mike Hunt"} score={10} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum blandit condimentum. Morbi sodales libero cursus, bibendum nisl at, feugiat quam. Curabitur molestie sed dui luctus facilisis. Phasellus et enim a libero interdum sagittis eu eget justo. Duis suscipit tincidunt aliquam. Nulla nec gravida magna. Vestibulum laoreet diam ut tortor pretium ullamcorper. Integer sed felis quis justo imperdiet maximus eget ut mi. Pellentesque placerat facilisis nisi eu laoreet. Suspendisse commodo tempor risus, vitae feugiat enim malesuada non. Aenean lacinia odio massa, quis scelerisque lectus rhoncus volutpat. Nullam quis rhoncus dui. Donec lacinia sem porta augue tempus semper. Quisque porta egestas mauris, sed pretium nunc. Aliquam et eros porta, elementum diam ut, vulputate mauris. Pellentesque id eleifend lorem, eget blandit mi."}/>
          </div>
          <div id="right">
            <Content />
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
