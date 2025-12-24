const asyncHandler =(resquestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(resquestHandler(req,res,next)).catch((err)=> next(err));
    }
}


export {asyncHandler}



// const asyncHandler=(fn)=> async(error,req,res,next)=>{
//     try {
//         await fn(error,req,res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }   
// }