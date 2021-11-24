import react from "react";
import propTypes from 'prop-types';

export default function proptest(props) {
    return(
        <>
        <div>name:{props.name} {props.title}</div>
        </>
    )
   
}
proptest.propTypes={name:propTypes.string}
proptest.defaultProps={name:"enter name"}