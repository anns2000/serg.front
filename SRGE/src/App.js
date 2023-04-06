import './App.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import HomePage from './components/homepage/homepage';
import MembersPage from './components/memberspage/memberspage';
import EventsPage from './components/eventspage/eventspage';
import Footer from './components/footer/footer';
import Research from './components/eachresearch/eachresearch';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Books from './components/books/books';
import Chapters from './components/bookchapter/bookchapter';
import Journal from './components/journal/journal';
import International from './components/international/international';
import National from './components/national/national';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Top from './components/btnToTop/totop'
function App() {
   window.addEventListener('scroll',animation);
    function animation(){
      var animate = document.querySelectorAll('.animate');
      for(let i=0;i<animate.length;i++){
        var windowhight = window.innerHeight;
        var goToTop = animate[i].getBoundingClientRect().top;
        var point =100;
        if(goToTop < windowhight+point){
          animate[i].classList.add('active');
        }else{
          animate[i].classList.remove('active');
        }
      }
    }
    
  return (
   <Router>
      <Navbar />
      <Switch>
        <Route path='/SRGE' exact component={HomePage}/>
        <Route path='/' exact component={HomePage}/>
        <Route path='/books' exact component={Books}/>
        <Route path='/bookchapters' exact component={Chapters}/>
        <Route path='/journal' exact component={Journal}/>
        <Route path='/intconf' exact component={International}/>
        <Route path='/national' exact component={National}/>
        <Route path='/members' exact component={MembersPage}/>
        <Route path='/events' exact component={EventsPage}/>
        <Route path='/about' exact component={About}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/research/:id' exact component={Research}/>
        <Route path='*' exact component={HomePage}/>
      </Switch>
      <Top />
      <Footer/>
   </Router>
  );
}

export default App;
