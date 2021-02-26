const Heading = ({ title }) => {
    return <h1>{title}</h1>;
  };
  
  export default Heading;


//   alternative versions
//   const Card = ({ name, email, phone, age, pet, image, balance, sibling }) => {};

// // VERSUS

// const Card = props => {
//   const { name, email, phone, age, pet, image, balance, sibling } = props;
// };

// // OR

// const Card = props => {
//     <h1>{props.name}</h1>
//     <p>{props.email}</p>
//     ...
// }