import React from 'react'

const Star = ({ number }) => {
    const tempArr = new Array(number).fill('')

    return <>
        {tempArr.map((_, index) => <img key={index} width="40vw" src="/star.svg" />)}
    </>
}

const DarkStar = ({ number }) => {
    const tempArr = new Array(number).fill('')

    return <>
        {tempArr.map((_, index) => <img key={index} width="40vw" src="/b_star.svg" />)}
    </>
}

const Rank = ({ correct }) => {
    if (!correct) return null
    return (
        <>
            <Star number={correct} />
            <DarkStar number={5 - correct} />
        </>
    )
}

export default Rank