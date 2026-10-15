const asyncHandler = (requuestHandler) => {
    return (req, res, next) => {
        Promise
        .resolve(requuestHandler(req,res,next))
        .catch((e) => {console.error(`${e}`)})
    }
}

export { asyncHandler }