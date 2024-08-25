class ApiError extends Error{
    constructor(
        statusCode,
        message="error occured",
        error=[],
        stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success= false
        this.errors= error


    }
}
export {ApiError};