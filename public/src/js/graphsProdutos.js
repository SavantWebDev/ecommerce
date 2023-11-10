const ctx = document.getElementById("myChart");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3, 20],
        backgroundColor: [
          "rgba(255, 0, 0, 0.5)", // Vermelho
          "rgba(0, 0, 255, 0.5)", // Azul
          "rgba(255, 255, 0, 0.5)", // Amarelo
          "rgba(0, 255, 0, 0.5)", // Verde
          "rgba(128, 0, 128, 0.5)", // Roxo
          "rgba(255, 165, 0, 0.5)", // Laranja
        ],
        borderColor: [
          "rgba(255, 0, 0, 1)", // Vermelho
          "rgba(0, 0, 255, 1)", // Azul
          "rgba(255, 255, 0, 1)", // Amarelo
          "rgba(0, 255, 0, 1)", // Verde
          "rgba(128, 0, 128, 1)", // Roxo
          "rgba(255, 165, 0, 1)", // Laranja
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    indexAxis: "x", // Define o eixo x como o eixo das categorias
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false, // Remove as linhas de grade do eixo x
        },
        ticks: {
          display: true, // Remove os rótulos do eixo x
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Remove as linhas de grade do eixo y
        },
        ticks: {
          display: true, // Remove os rótulos do eixo y
        },
      },
    },
    plugins: {
      legend: {
        display: true, // Remove a legenda
      },
    },
  },
});

