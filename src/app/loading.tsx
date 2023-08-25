const Loading = async() => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return(
        <div>Page Loading!..Coffee Connoisseur!...</div>
    )
}

export default Loading;