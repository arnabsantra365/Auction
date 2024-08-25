const asynchandler =(resolve)=>{
    return (req,res,next)=>{
        Promise.resolve(resolve(req,res,next)).catch((err)=>next(err))
    }
}
export {asynchandler};