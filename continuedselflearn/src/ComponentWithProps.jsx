const ComponentWithProps = props => {
    return (
        <>
            <h1>{prop.headerProp}</h1>
            <p>{prop.contentProp}</p>
            <p>{prop.numbercontentProp}</p>
            <p>{prop.nonExcistant}</p>
        </>
    );
}

export default ComponentWithProps