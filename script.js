fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    var labels = data.map((obj) => obj.day);
    var amounts = data.map((obj) => obj.amount);

    var ctx = document.getElementById("expenseChart").getContext("2d");

    var newChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            data: amounts,
            backgroundColor: [
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
              "hsl(186, 34%, 60%)",
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
            ],
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0,
            borderRadius: 5,

            hoverBackgroundColor: [
              "hsla(10, 79%, 65%, 0.8)",
              "hsla(10, 79%, 65%, 0.8)",
              "hsla(186, 34%, 60%,0.8)",
              "hsla(10, 79%, 65%, 0.8)",
              "hsla(10, 79%, 65%, 0.8)",
              "hsla(10, 79%, 65%, 0.8)",
              "hsla(10, 79%, 65%, 0.8)",
            ],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            display: false,

            grid: {
              display: false,
            },
          },

          x: {
            display: true,

            grid: {
              display: false,
            },
          },
        },
      },
    });
  });
