function classificaTriangulo(l1, l2, l3){
    if(l1 === l2 && l2 === l3){
        console.log("Triangulo equilatero")
    } else if (l1 != l2 && l2 != l3 && l1 != l3){
        console.log("Triangulo escaleno")
    } else{
        console.log("Triangulo isoceles")
    }
}
classificaTriangulo(3, 3, 4)
classificaTriangulo(5, 3, 4)
classificaTriangulo(4, 4, 4)