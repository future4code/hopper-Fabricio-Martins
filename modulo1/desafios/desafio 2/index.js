// - 🏅  Desafios
    
//     Todos os exercícios aqui são de escrita de código! 
    
//     1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
//         - Graus Fahrenheit(°F) para Kelvin(K)
            
//             ```
//             (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
//          
            


//         - Graus Celsius(°C) para Graus Fahrenheit (°C)
            
//             ```
//             (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
//             ```
            
        
//         a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
                        
                        let grausFa = 77
                        let kelvin = Number((grausFa - 32)*(5/9) + 273.15)
                        console.log("Calculo do valor de 77°F convertido para Kelvin é igual: ",kelvin," K")

//         b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
                            
                        grausCel = 80
                        grausFa =Number((grausCel)*(9/5) + 32)
                        console.log("Calculo do valor de ",grausCel,"°C convertido para °F é igual: ",grausFa," ° F")

        
//         c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

                        grausCel = 30
                        grausFa =Number((grausCel)*(9/5) + 32)
                        kelvin = Number((grausFa - 32)*(5/9) + 273.15)
                        console.log("Calculo do valor de ",grausCel,"°C convertido para °F é igual: ",grausFa," ° F e se o mesmo valor for convertido para Kelvin seria ",kelvin," K")

        
//         d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
                        
                        grausCel = Number(prompt("Digite o valor da temperatura em °C : "))
                        console.log("Valor da temperatura é : ",grausCel,"°C")
                        
        
//     2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
        
//         a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
                        alert("Agora vamos falar de eletrica!!!",onkeydown)
                        let valor = 0.05
                        let consumoMensal = 280
                        let valorConta = valor * consumoMensal
                        console.log("o valor a ser pago por uma residência que consuma 280 quilowatt-hora é de: R$ " ,valorConta,)

//         b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto
                        let desconto =  valorConta - valorConta * 0.15
                        console.log("Você ira pagar com desconto de 15% o valor de R$",desconto )
        
//     3. Ua que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos usar quilograma m grande problem(kg), onça (oz) e até libra (lb). Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:
        
//         a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
//         `20lb equivalem a X kg`
                        alert("Agora vamos falar de medidas!!!",onkeydown)
                        let valorMassa =  2.205
                        let libra = Number(prompt("Digite um peso em Libra(lb), exercicio propõe 20 :"))
                        let kilos = libra/valorMassa
                        console.log( libra,"Libras tem mesmo peso que: ",kilos,"kilos")

        
//         b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
//         `10.5oz equivalem a X kg`

                        let onça= 10.5
                        valorMassa = 3.527
                        kilo = onça / valorMassa
                        console.log( onça,"oz equivalem ",kilo,"kilos")
                        
        
//         c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
//         `100mi equivalem a X m`

                        let milha= 100
                        let fator = 1609
                        let metros = fator * milha
                        console.log( milha,"oz equivale a: ",metros," M")

//         d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
//         `50ft equivalem a X m`
                        
                        let pesFt = 50
                        fator = 3.281
                        let metrosDaLetraD = pesFt/fator
                        console.log( pesFt,"ft equivale a: ",metros," M")

        
//         e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
//         `103.56gal equivalem a X l`

 
                        let gal = 103.56
                        fator = 3.785
                        let litro = gal*fator
                        console.log( gal,"ft equivale a: ",litro,"Litros")

        
//         f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
//         `450 xic equivalem a X l`

                        let xícara = 450
                        fator =  3,52
                        litro = xícara/fator
                        console.log( xícara,"xic equivale a: ",litro,"Litros")


        
//         g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter
        
                        xícara = Number(prompt("Digite uma quantidade de xicaras para converte em litros: "))
                        fator =  3,52
                        litro = xícara/fator
                        console.log( xícara,"xic equivale a: ",litro,"Litros")
    
// - 📩  Entrega
//     - Abra um novo Pull Request
//     - Marque seu/sua professor(a) como reviewer
//     - Hora de entregar o seu trabalho! Envie o link do seu PR no formulário de entrega.
    
//     <aside>
//     ⚠️ **ATENÇÃO**: PRs que forem abertos e não tiverem seu link enviado no formulário serão **desconsiderados e você ficará com falta na atividade!**
    
//     </aside>