import Home from "../components/Home.jsx";
import Next from "../components/Next.jsx";

const routes = [
  { path: '/home', component: Home, fileName: 'home' },
  { path: '/about', component: Next, fileName: 'about' },
];

module.exports = routes;