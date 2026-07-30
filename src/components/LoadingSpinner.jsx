function LoadingSpinner() {

    return (

        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: "300px"
            }}
        >

            <div
                className="spinner-border text-danger"
                style={{
                    width: "3rem",
                    height: "3rem"
                }}
            ></div>

        </div>

    );

}

export default LoadingSpinner;