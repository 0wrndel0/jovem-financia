function calcular(){

    let ganhos =
      Number(document.getElementById("ganhos").value);
  
    let gastos =
      Number(document.getElementById("gastos").value);
  
    let saldo = ganhos - gastos;
  
    let resultado =
      document.getElementById("resultado");
  
    if(saldo > 0){
  
      resultado.innerHTML = `
        <h2>Saldo: R$ ${saldo}</h2>
        <p style="color:green">
        ✅ Você economizou!
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
  }

  if(saldo < 0){

    resultado.innerHTML += `
      <p style="color:red">
        💡 Dica: tente diminuir gastos com lazer.
      </p>
    `;
  }