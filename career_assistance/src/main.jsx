import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx' 
import store from './redux/store.js'
import { Provider } from 'react-redux'
import UserDetails from './pages/UserDetails.jsx'
import ShowUser from './pages/ShowUser.jsx'
import CareerGoals from './pages/CareerGoals.jsx'
import CareerAi from './pages/CareerAi.jsx'
import Resume from './pages/Resume.jsx'
import QuestionAi from './pages/quiz/QuestionAi.jsx'
import ShowAi from './pages/quiz/ShowAi.jsx'
import Selfintro from './pages/Selfintro.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([

  {
    path: "/",
    element: (<Register/>),
  },
  {
    path: "/register",
    element: (<Register/>),
  },

 {
    path: "/login",
    element: (<Login/>),
  },
  {
    path: "/details",
    element: (<UserDetails/>),
  },
  {
    path: "/goal",
    element: (<CareerGoals/>),
  },

  {
    path: "/show",
    element: (<ShowUser/>),
  },

  {
    path: "/careerAi",
    element: (<CareerAi/>),
  },
  {
    path: "/resume",
    element: (<Resume/>),
  },
  {
    path: "/quesquiz",
    element: (<QuestionAi/>),
  },
  {
    path: "/showquiz",
    element: (<ShowAi/>),
  },
  {
    path: "/intro",
    element: (<Selfintro/>),
  },
  
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
);