//https://jovem-financia.netlify.app/

let grafico;

function calcular(){

  let ganhos =
    Number(document.getElementById("ganhos").value);

  let gastos =
    Number(document.getElementById("gastos").value);

  let meta =
    Number(document.getElementById("meta").value);

  let saldo = ganhos - gastos;

  let resultado =
    document.getElementById("resultado");

  if(saldo > 0){

    resultado.innerHTML = `
      <h2>Saldo: R$ ${saldo}</h2>
      <p style="color:green">
      ✅ Você está economizando!
      </p>
    `;

  }else if(saldo == 0){

    resultado.innerHTML = `
      <h2>Saldo: R$ 0</h2>
      <p style="color:orange">
      ⚠️ Sem economia.
      </p>
    `;

  }else{

    resultado.innerHTML = `
      <h2>Saldo: R$ ${saldo}</h2>
      <p style="color:red">
      ❌ Gastos muito altos.
      </p>
    `;
  }

  let porcentagem = 0;

  if(meta > 0){

    porcentagem = (saldo / meta) * 100;

    if(porcentagem > 100){
      porcentagem = 100;
    }

    if(porcentagem < 0){
      porcentagem = 0;
    }
  }

  document.getElementById("progresso")
  .style.width = porcentagem + "%";

  document.getElementById("progresso")
  .innerHTML =
  Math.floor(porcentagem) + "%";

  localStorage.setItem("ganhos", ganhos);

  localStorage.setItem("gastos", gastos);

  localStorage.setItem("saldo", saldo);

  criarGrafico(ganhos, gastos, saldo);
}

function criarGrafico(ganhos, gastos, saldo){

  let ctx =
    document.getElementById("grafico");

  if(grafico){
    grafico.destroy();
  }

  grafico = new Chart(ctx, {

    type:'bar',

    data:{

      labels:[
        'Ganhos',
        'Gastos',
        'Saldo'
      ],

      datasets:[{

        label:'Financeiro',

        data:[
          ganhos,
          gastos,
          saldo
        ],

        borderWidth:1
      }]
    }
  });
}