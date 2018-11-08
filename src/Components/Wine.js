// import React from 'react';
// import Search from './Components/Search';


// class WineResults extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       winepairing: [],
//       pairingText: [],
//       productMatches: []
//     }
//   }
// }

// componentDidMount() {
//   this.performSearch();
// }

// performSearch = (food = 'chicken') => {
//   axios
//     .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/wine/pairing?food=${food}`, {
//       headers: {
//         'X-Mashape-Key': 'ZJyTOCf5oumshDvTwSFk11paKhp9p1Ry2SsjsnigTi3aFLLBlX'
//       }
//     })
//     .then(response => {
//       this.setState({
//         pairedWines: response.data.pairedWines,
//         pairingText: response.data.pairingText,

//         id: response.data.productMatches.id,
//         title: response.data.productMatches.title,
//         descripton: response.data.productMatches.description,
//         price: response.data.procuctMatches.price,
//         imageUrl: response.data.productMatches.imageUrl,
//         averageRating: response.data.productMatches.averageRating,
//         ratingCount: response.data.productMatches.ratingCount,
//         score: response.data.productMatches.score,
//         link: response.data.link
//       });
//     })
//     .catch(error => {
//       console.log('Error fetching and parsing data', error);
//     });
// }

//  onSearchChange = event => {
//     this.setState({search: event.target.value})
//   }

//     generateSearchResults = search => {
//         if (search === "") {
//           return []
//         }
//       }


// render() {
//   const results = this.generateSearchResults(this.state.search)

//   return(
//     <Search onSearchChange={this.performSearch}/>
//   )
// }

// export default WineResults;


