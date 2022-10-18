const ComponentWithProps = props => {
    return (
        <>
            <h1>{props.headerProp}</h1>
            <p>{props.contentProp}</p>
            <p>{props.numbercontentProp}</p>
            <p>{props.nonExcistant}</p>
            <p>Successfully Called Component</p>
        </>




    );
}





export default ComponentWithProps