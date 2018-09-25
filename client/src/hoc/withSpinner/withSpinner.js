

import React from 'react'
import Spinner from "../../components/UI/Spinner/Spinner"

const withSpinner  =
    (props) => {
        let content = null;
        console.log(props)
        if(props.isFetching) {
            content = <Spinner />
        } else{
            content = props.children
        }
        return (<div>{content}</div>)
    }

export default withSpinner
