
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import FriendsDetails from './components/FriendsDetails/FriendsDetails';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:"/", element: <Main/>,
      children:[
        {path: '/', element:<Home/>},
        {path: '/home', element:<Home/>},
        {path:'/products', element:<Products/>},
        {
          path: 'friends', 
          loader:async()=>{
            return fetch('https://jsonplaceholder.typicode.com/users')
          } ,
          element:<Friends/>
        },
        {
          path:'/friend/:friendId',
          loader:async({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
           element:<FriendsDetails/>
        }
       
      ]
  },
    {path:'about', element:<About/>},
    {path:'*', element:(<div>This route not found</div>)}

  ]);
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
