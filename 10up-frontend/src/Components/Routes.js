import Blog from './Blog/blog';
import BlogPost from './BlogPost/blogPost';
import About from './About/about';
import Contact from './Contact/contact';
import Lunch from './Menus/Lunch/lunchMenu';
import Dinner from './Menus/Dinner/dinnerMenu';
import Home from './Home/home'

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/blog/post/:id',
        component: BlogPost
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/menu/lunch',
        component: Lunch
    },
    {
        path: '/menu/dinner',
        component: Dinner
    }
];