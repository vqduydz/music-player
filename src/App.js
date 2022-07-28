import './App.css';

function App() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7d2c259670msh71fa54b1c985b5dp1f4736jsnf0845a23cdd6',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
        },
    };

    fetch('https://spotify23.p.rapidapi.com/search/?q=love&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));

    return <div className="App"></div>;
}

export default App;
