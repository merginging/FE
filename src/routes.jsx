import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import BotLayout from './components/BotLayout';
import Home from './pages/Home/Home';
import Price from './pages/Price/Price.jsx';
import Login from './pages/Login/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';
import Social from './pages/Signup/SocialSignup.jsx';
import BotAdd from './pages/Bot/BotAdd.jsx';
import BotAi from './pages/Bot/BotAi.jsx';
import BotList from './pages/Bot/BotList.jsx';
import BotSettings from './pages/Bot/BotSettings.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'price',
                element: <Price />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'signup',
                element: <Signup />,
            },
            {
                path: 'social',
                element: <Social />,
            },
        ],
    },
    {
        path: '/',
        element: <BotLayout />,
        children: [
            {
                path: 'bot/add',
                element: <BotAdd />,
            },
            {
                path: 'bot/ai',
                element: <BotAi />,
            },
            {
                path: 'bot/list',
                element: <BotList />,
            },
            {
                path: 'bot/settings/:id',
                element: <BotSettings />,
            },
        ],
    },
]);

export default router;
