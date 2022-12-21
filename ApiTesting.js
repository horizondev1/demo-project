// js_code = ""
// var fs = require('fs');
// var csv = require('csv-parser');
// var results = [];
// fs.createReadStream('country_codes.csv')
//     .pipe(csv())
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//         console.log(results);

// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
//   params: {Category: 'soccer', Timezone: '-7'},
//   headers: {
//     'X-RapidAPI-Key': 'b6e89817d6msh36107de73277139p116779jsne307fb015e33',
//     'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


// import axios from 'axios';
// const fetchQuotes = async () => {
// 	try {
// 		const res = await axios.get(
// 			`https://famous-quotes4.p.rapidapi.com/random`,
// 			{
// 				headers: {
// 					'x-rapidapi-host': 'livescore6.p.rapidapi.com',
// 					'x-rapidapi-key': 'b6e89817d6msh36107de73277139p116779jsne307fb015e33'
// 				},
// 				params: {category: 'soccer', Timezone: '-7'}
// 			}
// 		);
// 	} catch (err) {
// 		console.log(err);
// 	}
// };
// fetchQuotes(



// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
//   params: {Category: 'soccer', Timezone: '-7'},
//   headers: {
//     'X-RapidAPI-Key': 'b6e89817d6msh36107de73277139p116779jsne307fb015e33',
//     'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });






    const country = "pakistan";
    const country_lower = country.toLowerCase();
    const country_lower_underscore = country_lower.replace(' ', '_');
    console.log();

    const fs = require('fs');
    const csv = require('csv-parser');

    let linkfound = 0;
    fs.createReadStream('country_codes.csv')

        .pipe(csv())
        
        .on('data', (row) => {
            if (row.Country == country_lower_underscore) {
                if (row.Numeric<100){
                    console.log('0'+row.Numeric);
                    console.log('https://countryflagsapi.com/svg/0'+row.Numeric);
                    linkfound = 1;
                }else{
                    console.log(row.Numeric);
                    console.log('https://countryflagsapi.com/svg/'+row.Numeric);
                    linkfound =1;
                }
            }
        })
        .on('end', () => {
            if(linkfound==0){
                console.log("define your default image here")
            }
            console.log('CSV file successfully processed');
            
        });







