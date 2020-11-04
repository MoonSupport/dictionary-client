import React from 'react'

const Star = ({ number }) => {
    const tempArr = new Array(number).fill('')

    return <>
        {tempArr.map((_, index) => <img key={index} width="50px" src="/star.svg" />)}
    </>
}

const DarkStar = ({ number }) => {
    const tempArr = new Array(number).fill('')

    return <>
        {tempArr.map((_, index) => <img key={index} width="50px" src="/b_star.svg" />)}
    </>
}

const Rank = ({ correct }) => {
    console.log('correct', correct)
    return (
        <>
            <Star number={correct} />
            <DarkStar number={5 - correct} />
        </>
    )
}

export default Rank