// import React, {
//     Component
// } from 'react';
// import './App.css';

// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             gifs: []
//         };
//     }

//     componentdidMount() {
//         this.performSearch();
//     }
//     performSearch = () => {
//         fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
//             .then(response => response.json())
//             .then(responseData => {
//                 this.setState({
//                     gifs: responseData.data
//                 });
//             })
//             .catch(error => {
//                 console.log('Error fetching and parsing data', error);
//             });
//     }


//     render() {
//             console.log(this.state.gifs);
//             return <div >
//                 <
//                 button onClick = {
//                     () => this.performSearch()
//                 } > Click here to call API < /button>  */
//         } <
//         /div>
// };
// }


// export default App;
