const soma = (req, res, next)=>{
    const array = req.body.services 
    let temp = 0
   for(let i = 0; i < array.length; i++){
       temp += array[i].preco
   }
   console.log(temp);
    req.body.totalCost = temp
    next()
}

export default soma