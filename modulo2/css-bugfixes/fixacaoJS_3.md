```function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
   let result = Number((ex+p1+p2)/3)
  if (result>=9){result="A"}else if(result>=7.5){result="B"}else if(result>=6){result="C"}else{result="D"}

  return  result
} 
```