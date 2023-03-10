import './App.css';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';
import Body from './components/Body';
// const appRouter = createBrowswerRouter

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element:< MainContainer/>
      },
      {
        path: "watch",
        element:< WatchPage/>
      }
    ]
  },

])
function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
