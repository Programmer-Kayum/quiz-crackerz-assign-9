import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Main from './components/layout/Main';
import QuizContainer from './components/QuizContainer/QuizContainer';
import Statistics from './components/Statistics/Statistics';

function App() {
  const router= createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path:'/home',
          loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path:'quiz/:quizId',
          loader: async({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <QuizContainer></QuizContainer>,
        },
        {
          path:'/statistics',
          element: <Statistics></Statistics>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])
  return (
        <div className="App">
        <RouterProvider router={router}></RouterProvider>
        </div>
  );
}

export default App;
