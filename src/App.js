import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
function App() {
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '7d2c259670msh71fa54b1c985b5dp1f4736jsnf0845a23cdd6',
    //         'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
    //     },
    // };

    // fetch('https://spotify23.p.rapidapi.com/search/?q=love&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
    //     .then((response) => response.json())
    //     .then((response) => console.log(response))
    //     .catch((err) => console.error(err));

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout === null ? Fragment : DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
