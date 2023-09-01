const Loading = async() => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return(
        <div>Page Loading!.. Baby Express!...</div>
    )
}

export default Loading;