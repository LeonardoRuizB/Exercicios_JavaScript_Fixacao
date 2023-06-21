$(document).ready(function() {

    // Exercicio 2

    $("#exer2").click(function() {
        window.alert("Você clicou no botão!")
    });

    // Exercicio 3

    $("#exer3").click(function() {
        var name = window.prompt("Qual seu nome?")

        window.alert("Olá, " + name + "! É um prazer te conhecer!")
    })

    // Exercicio 4

    $("#exer4").click(function() {
        var name = window.prompt("Qual seu nome?")

        $("#length").html("Olá, <b>" + name + "</b>! É um grande prazer te conhecer! 🖖")
    })

    // Exercicio 5

    $("#exer5").click(function() {
        var number = window.prompt("Digite um número:")
        var double = number * 2
        var half = number / 2 

        $("#result5").html("O dobro de " + number + " é " + double + " e a metade é " + half + "!")
    })

    // Exercicio 6

    $("#exer6").click(function() {
        var number1 = Number(window.prompt("Digite um número:"))
        var number2 = Number(window.prompt("Digite outro número:"))
        var result = number1 + number2

        $("#result6").html("A soma entre <grif>" + number1 + "</grif> e <grif>" + number2 + "</grif> é igual a " + result + "!")
    })

    // Exercicio 7

    $("#exer7").click(function() {
        var name = window.prompt("Qual é o nome do aluno?")
        var grade1 = Number(window.prompt("Qual foi a primeira nota de " + name + "?"))
        var grade2 = Number(window.prompt("Além de " + grade1 + ", qual foi a outra nota de " + name + "?"))
        var result = (grade1 + grade2) / 2

        $("#name7").html("Calculando a média final de <grif>" + name + "</grif>.")
        $("#grades7").html("As notas obtidas foram <grif>" + grade1 + "</grif> e <grif>" + grade2 + "</grif>.")
        $("#average7").html("A média final será <grif>" + result + "</grif>.")
    })

    // Exercicio 8

    $("#exer8").click(function() {
        var number = Number(window.prompt("Digite um número:"))
        var absolut = Math.abs(number)
        var numberFull = Math.trunc(number)
        var nearestInteger = Math.round(number)
        var squareRoot = Math.sqrt(number)
        var cubicRoot = Math.cbrt(number)
        var squared = Math.pow(number, 2)
        var cubed = Math.pow(number, 3)

        $("#result8").html("<p>O número a ser analisado aqui será o <b>" + number + "</b><hr></p>")
        $("#result8").append("<p>O seu valor absoluto é " + absolut + "</p>")
        $("#result8").append("<p>A sua parte inteira é " + numberFull + "</p>")
        $("#result8").append("<p>O valor inteiro mais próximo é " + nearestInteger + "</p>")
        $("#result8").append("<p>A sua raiz quadrada é " + squareRoot + "</p>")
        $("#result8").append("<p>A sua raiz cúbica é " + cubicRoot + "</p>")
        $("#result8").append("<p>O valor de " + number + "<sup>2</sup> é " + squared + "</p>")
        $("#result8").append("<p>O valor de " + number + "<sup>3</sup> é " + cubed + "</p>")
    })

    // Exercicio 9

    let click = 0
    $("#exer9").click(function() {
        click ++    
        $("#clicks").html("O contador está com <grif>" + click + "</grif> cliques.")
    })

    $("#exer9zero").click(function() {
        click = 0
        $("#clicks").html("")
    })

    // Exercicio 10

    $("#action1").click(function() {
        $("#result10").append("<p>Clicou no primeiro botão</p>")
    })

    $("#action2").click(function() {
        $("#result10").append("<p>Clicou no segundo botão</p>")
    })

    $("#action3").click(function() {
        $("#result10").append("<p>Clicou no terceiro botão</p>")
    })

    $("#action4").click(function() {
        $("#result10").append("<p>Clicou no quarto botão</p>")
    })

    // Exercicio 11

    $("#exer11").click(function() {
        var name = window.prompt("Qual o nome do aluno?")
        var grade1 = Number(window.prompt("Qual foi a primeira nota de " + name))
        var grade2 = Number(window.prompt("Além de " + grade1 + ", qual foi a outra nota de " + name))
        var result = (grade1 + grade2) / 2

        $("#result11").html("Calculando a média final de <grif>" + name + "</grif>.")
        $("#result11").append("<p>As notas obtidas foram <grif>" + grade1 + "</grif> e <grif>" + grade2 + "</grif>.</p>")
        $("#result11").append("<p>A média final será <grif>" + result + "</grif>.</p>")
       
        if (result <= 5) {
            $("#result11").append("<p>A mensagem que temos é: <b>Estude um pouco mais!</b></p>")
        } else {
            $("#result11").append("<p>A mensagem que temos é: <b>Meus parabéns!</b></p>")
        }
        
    })

    // Exercicio 12

    $("#exer12").click(function() {
        var number = Number(window.prompt("Digite um número:"))

        if (number % 2 === 0) {
            $("#result12").html("O número " + number + " que foi digitado é <b>PAR!</b>")
        } else {
            $("#result12").html("O número " + number + " que foi digitado é <b>IMPAR!</b>")
        }
    })

    // Exercicio 13

    $("#exer13").click(function() {
        var number1 = Number(window.prompt("Digite um número:"))
        var number2 = Number(window.prompt("Digite outro número:"))

        if (number1 > number2) {
            $("#result13").html("Analisando os valores <grif>" + number1 + "</grif> e <grif>" + number2 + "</grif>, o maior valor é <b>" + number1 + "</b>")
        } else if (number1 < number2) {
            $("#result13").html("Analisando os valores <grif>" + number1 + "</grif> e <grif>" + number2 + "</grif>, o maior valor é <b>" + number2 + "</b>")
        } else {
            $("#result13").html("Analisando os valores <grif>" + number1 + "</grif> e <grif>" + number2 + "</grif>, ambos são <b>IGUAIS</b>")
        }
        
    })

    // Exercicio 14

    $("#exer14").click(function() {
        var date = new Date()

        $("#result14").html("O que eu recebi do sistema foi <grif>" + date + "</grif>")
    })

    // Exercicio 15

    $("#exer15").click(function() {
        var date = new Date()

        var months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
        var week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
        
        $("#result15").html("Dia: <grif>" + date.getDate() + "</grif>")
        $("#result15").append("<p>Mês: <grif>" + months[date.getMonth()] + "</grif></p>")
        $("#result15").append("<p>Ano: <grif>" + date.getFullYear() + "</grif></p>")
        $("#result15").append("<p>Dia da semana: <grif>" + week[date.getDay()] + "</grif></p>")
        $("#result15").append("<p>hora: <grif>" + date.getHours() + "</grif></p>")
        $("#result15").append("<p>Minutos: <grif>" + date.getMinutes() + "</grif></p>")
        $("#result15").append("<p>Segundos: <grif>" + date.getSeconds() + "</grif></p>")
    })

    // Exercicio 16

    $("#exer16").click(function() {
        var yearBirth = Number(window.prompt("Em que ano você nasceu?"))
        var yearNow = new Date().getFullYear()
        var result = yearNow - yearBirth

        $("#result16").html("Quem nasceu em " + yearBirth + " vai completar <b>" + result + "</b> anos em " + yearNow + ".")
    })

    // Exercicio 17

    $("#exer17click").click(function() {
        var random = Math.random()
        var number = random * (100 - 1) + 1
        number = Math.round(number)
        $("#result17").append("<p>Acabei de pensar no número <grif>" + number + "</grif>!</p>")
    })

    $("#exer17clear").click(function() {
        $("#result17").html("Cada vez que você apertar o botão acima, eu penso em um número entre 1 e 100.")
    })

    // Exercicio 18

    $("#numberRandom").ready(function() { 
        var number = Math.floor(Math.random() * 100) + 1; 
    
        $("#exer18").click(function() {
            var player = Number(window.prompt("Qual é o seu palpite?"))
            
            if (player < number) {
                $("#result18").append("<p>Você falou " + player + ". Meu número é <b>MAIOR!</b></p>")
            } else if (player > number) {
                $("#result18").append("<p>Você falou " + player + ". Meu número é <b>MENOR!</b></p>")
            } else if (player == number) {
                $("#result18").append("<p><b>PARABÉNS!</b> você acertou! Eu tinha sorteado o valor " + number + "!</p>")
                $("#exer18").hide()
            }   
        })
    })
   
    // Exercicio 19

    $("#exer19").click(function() {
        var num1 = Number(window.prompt("Primeiro valor:"))
        var num2 = Number(window.prompt("Segundo valor"))

        var options = Number(window.prompt(
            "Valores informados: " + num1 + " e " + num2 + ". \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir"
        ))
        
        $("#result19").html("<h1>Calculando</h1>")

        if (options == 1) {
            $("#result19").append(num1 + " + " + num2 + " = " + "<b>" + (num1+num2) + "</b>")
        } else if (options == 2) {
            $("#result19").append(num1 + " - " + num2 + " = " + "<b>" + (num1-num2) + "</b>")
        } else if (options == 3) {
            $("#result19").append(num1 + " * " + num2 + " = " + "<b>" + (num1*num2) + "</b>")
        } else if (options == 4) {
            $("#result19").append(num1 + " / " + num2 + " = " + "<b>" + (num1/num2) + "</b>")
        } else {
            $("#result19").append("OPÇÃO INVÁLIDA! Você digitou " + num1 + " e " + num2 + ", mas não sei o que fazer com eles.")
        }

    })

    // Exercicio 20

    $("#exer20").click(function() {
        var month = window.prompt("Digite o mês em extenso (ex: Setembro)")

        var station

        switch (month.toUpperCase()) {
            case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
                station = "INVERNO"
                break
                
            case 'ABRIL': case 'MAIO': case 'JUNHO':
                station = "PRIMAVERA"
                break

            case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
                station = "VERÃO"
                break

            case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
                station = "OUTONO"
                break

            default: 
                station = "INDEFINIDA"
                break
        }

        $("#result20").html("No mês de <grif>" + month + "</grif>, estamos na estação <grif><b>" + station + "</b></grif>")

    })

    // Exercicio 21

    $("#exer21").click(function() {

        $("#result21").append("<h1>Contando de 1 até 10</h1>")

        let numb = 1
        while (numb <= 10) {
            $("#result21").append(numb + " 👉 ")
            numb++ 
        }

        $("#result21").append("🏁")

    })

    // Exercicio 22

    $("#exer22").click(function() {

        $("#result22").append("<h1>Contando de 1 até 10, marcando os pares</h1>")

        let numb = 1
        while (numb <= 10) {
            if (numb % 2 == 0) {
                $("#result22").append("<grif><b>" + numb + "<b></grif>" + " 👉 ")
            } else {
                $("#result22").append(numb + " 👉 ")
            }
            numb++ 
        }

        $("#result22").append("🏁")

    })

    // Exercicio 23

    $("#exer23").click(function() {

        $("#result23").append("<h1>Contando de 1 até 10, marcando os pares</h1>")

        let numb = 1
        while (numb <= 10) {
            if (numb % 2 == 0) {
                $("#result23").append(numb + " 👉 ")
            }
            numb++ 
        }

        $("#result23").append("🏁")

    })

    // Exercicio 24

    $("#exer24").click(function() {

        $("#result24").append("<h1>Contando de 1 até 10, marcando os pares</h1>")

        let numb = 10
        while (numb >= 1) {
            $("#result24").append(numb + " 👉 ")
            numb--
        }

        $("#result24").append("🏁")

    })

    // Exercicio 25

    $("#button25").click(function() {

        let numb = 0
        let player = Number($("#fnum").val())

        $("#result25").append("<h1>Contando de 0 até " + player + "</h1>")

        while (numb <= player) {
            $("#result25").append(numb + " 👉 ")
            numb++
        }

        $("#result25").append("🏁")

    })

    // Exercicio 26

    $("#button26").click(function() {

        let initial = Number($("#valueInitial").val())
        let final = Number($("#valueFinal").val())

        $("#result26").append("<h1>Contando de " + initial + " até " + final + "</h1>")

        if (initial <= final) {
            while (initial <= final) {
                $("#result26").append(initial + " 👉 ")
                initial++
            }
        } else {
            while (initial >= final) {
                $("#result26").append(initial + " 👉 ")
                initial--
            }
        }

        $("#result26").append("🏁")

    })

    // Exercicio 27

    $("#button27").click(function() {

        let number = Number($("#number27").val())

        $("#result27").html("<h1>Tabuada de " + number + "</h1>")

        let i = 1
        while (i <= 10) {
            $("#result27").append("<p>" + number + " X " + i + " = <b>" + (number*i) + "</b></p>")
            i++
        }
    })

    // Exercicio 28

    $("#button28").click(function() {

        let number = Number($("#number28").val())

        $("#result28").append("<h1>Calculando " + number + "!</h1>")

        let fat = 1

        if (number > 0 && number <= 21) {
            while (number > 1) {
                $("#result28").append(number + " X ")
                fat *= number
                number--
            }
        }

        $("#result28").append("1 = <b>" + fat + "</b>")
    })
    
});