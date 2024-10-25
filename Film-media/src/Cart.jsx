// export default function MakeCart({ movie = {} }) {
//   if (!movie) return null;

//   const { Year, Poster, Type, Title } = movie;

//   return (
//     <section className="container">
//       <article className="movie">
//         <div>{Year && <p>{Year}</p>}</div>
//         <div>{Poster && <img src={Poster} alt="" />}</div>
//       </article>
//       <div>
//         {Type && <span>{Type}</span>}
//         {Title && <h3>{Title}</h3>}
//       </div>
//     </section>
//   );
// }
