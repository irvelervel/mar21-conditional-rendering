import { Component } from 'react'

// TERNARY OPERATOR
// IF/ELSE
// SHORT CIRCUIT (&&)

// TERNARY OPERATOR
// it is an elegant way of showing one view instead of another one

// class List extends Component {
//     render() {
//         return (
//             <ul>
//                 {
// this.props.movies && this.props.movies.length > 0 ? this.props.movies.map((movie, i) => (
//     <li key={'movie-' + i}>
//         {movie.name}
//     </li>
// )) : <p>I DON'T HAVE MOVIES TO SHOW!</p>
//                 }
//             </ul>
//         )
//     }
// }

// const List = ({ movies }) => (
//     movies && movies.length > 0 ? movies.map((movie, i) => (
//         <li key={'movie-' + i}>
//             {movie.name}
//         </li>
//     )) : <p>I DON'T HAVE MOVIES TO SHOW!</p>
// )

// IF/ELSE

// class List extends Component {
//     render() {
// if (this.props.movies && this.props.movies.length > 0) {
//     return (
//         <ul>
//             {
//                 this.props.movies.map((movie, i) => (
//                     <li key={'movie-' + i}>
//                         {movie.name}
//                     </li>
//                 )) 
//             }
//         </ul>
//     )
// }

// else if(this.props.movies && this.props.movies.length === 0){
//     return (<p>YOU PASSED ME AN EMPTY ARRAY</p>)
// }

// else {
//     return (<p>I DON'T HAVE MOVIES TO SHOW!</p>)
// }
//     }
// }

// const List = ({ movies }) => {
//     if (movies && movies.length > 0) {
//         return (
// <ul>
//     {
//         movies.map((movie, i) => (
//             <li key={'movie-' + i}>
//                 {movie.name}
//             </li>
//         )) 
//     }
// </ul>
//         )
//     }

//     else if(movies && movies.length === 0){
//         return (<p>YOU PASSED ME AN EMPTY ARRAY</p>)
//     }

//     else {
//         return (<p>I DON'T HAVE MOVIES TO SHOW!</p>)
//     }
// }

// SHORT CIRCUIT (&&)

// (3>2 && 3>5 && 5===5) --> false
// (2<3 && 3>1 && 6===6) --> true

// class List extends Component {
//     render() {
//         return (
//             <div>
                // {
                //     this.props.movies && this.props.movies.length > 0 && (
                //         <ul>
                //             {
                //                 this.props.movies.map((movie, i) => (
                //                     <li key={'movie-' + i}>
                //                         {movie.name}
                //                     </li>
                //                 ))
                //             }
                //         </ul>
                //     )
                // }
                // {
                //     this.props.movies && this.props.movies.length === 0 && (
                //         <p>YOU PASSED ME AN EMPTY ARRAY</p>
                //     )
                // }
                // {
                //     !this.props.movies && (
                //         <p>I DON'T HAVE MOVIES TO SHOW!</p>
                //     )
                // }
//             </div>
//         )
//     }
// }

const List = ({movies}) => (
    <div>
            {
                movies && movies.length > 0 && (
                        <ul>
                            {
                                movies.map((movie, i) => (
                                    <li key={'movie-' + i}>
                                        {movie.name}
                                    </li>
                                ))
                            }
                        </ul>
                    )
            }
                {
                    movies && movies.length === 0 && (
                        <p>YOU PASSED ME AN EMPTY ARRAY</p>
                    )
                }
                {
                    !movies && (
                        <p>I DON'T HAVE MOVIES TO SHOW!</p>
                    )
                }
    </div>
)

// TERNARY OPERATOR
// very well suitable for displaying ONE THING or THE OTHER (two conditions)

// IF/ELSE
// very useful & readable when you have MULTIPLE CONDITIONS in your JSX

// SHORT CIRCUIT (&&)
// a technique very well suitable for SHOWING and HIDING a block of JSX

export default List