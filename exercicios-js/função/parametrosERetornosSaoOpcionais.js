function area(larg, atl){
    const area = larg * atl
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2`)
    }else{
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 2, 4, 5))
console.log(area(5, 5))