import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header';
import Footer from '../elements/Footer';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import Upcoming from '../Upcoming/Upcoming';
import NowPlaying from '../NowPlaying/NowPlaying';
import TopRated from '../TopRated/TopRated';
import NotFound from '../elements/NotFound';
import Favourites from '../elements/Favourites';
import About from '../elements/About';

const App = () => {

  return (
    <BrowserRouter basename="/ReactMovieDB">
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:movieId" component={Movie} exact />
          <Route path="/Upcoming" component={Upcoming} />
          <Route path="/NowPlaying" component={NowPlaying} />
          <Route path="/TopRated" component={TopRated} />
          <Route path={'/about'}><About /></Route>
          <Route path={'/favourites'}><Favourites /></Route>
          <Route component={NotFound} />
        </Switch>
        <Footer></Footer>
      </React.Fragment>
    </BrowserRouter>
  )
}


export default App;