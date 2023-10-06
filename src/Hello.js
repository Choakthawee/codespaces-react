import './Hello.css'
const Hello = ({name,surname,age}) => {
    return (
        <>
         <h3>Hello {name} {surname} {age} </h3>
        </>
    );
}

export default Hello;



// const Hello = function(){
//     let name = "Choakthawee Nikhomkhai";
//     return (
//         <>
//          <h3>Hello World {name.toLocaleLowerCase()}</h3>
//         </>
//     );
// }

// const Hello = () => {
//     let name = "Choakthawee Nikhomkhai";
//     return (
//         <>
//          <h3>Hello World {name.toLocaleLowerCase()}</h3>
//         </>
//     );
// }

// function Hello() {
//     let name = "Choakthawee Nikhomkhai";
//     return (
//         <>
//          <h3>Hello World {name.toLocaleLowerCase()}</h3>
//         </>
//     );
// }

// const Hello = (props) => {
//     return (
//         <>
//          <h3>Hello {props.name} {props.surname} {props.age} </h3>
//         </>
//     );
// }

// const Hello = ({name,surname,age}) => {
//     return (
//         <>
//          <h3>Hello {name} {surname} {age} </h3>
//         </>
//     );
// }