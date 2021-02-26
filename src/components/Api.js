// fetch('https://graphql.anilist.co/', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     query: `
//         query ($id: Int) { # Define which variables will be used in the query (id)
//             Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
//               id
//               title {
//                 romaji
//                 english
//                 native
//               }
//             }
//           }
//       `,
//     variables: {
//       now: new Date().toISOString(),
//     },
//   }),
// })
//   .then((res) => res.json())
//   .then((result) => console.log(result));
