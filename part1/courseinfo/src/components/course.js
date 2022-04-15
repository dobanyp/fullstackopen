const Header = ({ course }) => {
    return (
        < h1 >
            {course.name}
        </h1 >
    )
}

const Part = ({ part, exercise }) => {
    return (
        <p>
            {part} {exercise}
        </p>
    )
}

const Content = ({ course }) => {
    return (
        <>
            {course.parts.map((part) => {
                return (
                    <Part key={part.id} part={part.name} exercise={part.exercises} />
                )
            })}
        </>
    )
}

const Total = ({ course }) => {
    return (
        <b>Total of exercises: {course.parts.map(part => part.exercises)
            .reduce((acc, curr) => {
                return (
                    acc + curr
                )
            }, 0)}</b>
    )
}

const Course = ({ course }) => {
    return (
        <>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </>
    )
}

export default Course