// api.js
export const login = async (email, senha) => {
    const response = await fetch('https://api-n56x.onrender.com/v1/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTcwMDMxMzc1MSwiZXhwIjoxNzAwNDAwMTUxfQ.DudgCvTiR7K2GkP9zu-5oIXAYH26mb8dAS-5Vh-q2EM'
      },
      body: JSON.stringify({email: email, senha: senha}),
      
    });
   
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Erro ao enviar a mensagem.');
    }
}

export const loginVerify = async (token) =>{
  console.log('=============')
  console.log(token)
  console.log('loginverify')
    const res = await fetch('https://api-n56x.onrender.com/v1/api/jwt-teste', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token} `
        },
        // Token estático
        //  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTcwMDMxMzc1MSwiZXhwIjoxNzAwNDAwMTUxfQ.DudgCvTiR7K2GkP9zu-5oIXAYH26mb8dAS-5Vh-q2EM
        
    })
    const data = await res.json()

    return data
    
}
   