export const errorFunc = (error) => {
    return error ? <h2>Error: {error}</h2> : null;
}