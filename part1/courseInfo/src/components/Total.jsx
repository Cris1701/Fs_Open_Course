const Total = ({parts}) => {

    const part1 = parts[0]
    const part2 = parts[1]
    const part3 = parts[2]

    const exercises1 = part1['exercises'];
    const exercises2 = part2['exercises'];
    const exercises3 = part3['exercises'];


    return (
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    )
}

export default Total;