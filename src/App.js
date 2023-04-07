import './App.css';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';
import Body from './components/Body';
import CreateCard from './practiceNishan/CreateCard';
import SearchList from './components/SearchList';

// const appRouter = createBrowswerRouter

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <><Header/> <Body /></>,
    children: [
      {
        path: "/",
        element: < MainContainer />
      },
      {
        path: "/watch",
        element: < WatchPage />
      },
      {
        path: "/createCard",
        element: < CreateCard />
      },
      {
        path: "/searchList",
        element: < SearchList />
      }

    ]

  }

])
function App() {
  return (

    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
