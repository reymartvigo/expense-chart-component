fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        const labels = data.map((obj) => obj.day);
        const amounts = data.map((obj) => obj.amount);

        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const today = new Date();
        const currentDayOfWeek = daysOfWeek[today.getDay()];

        const backgroundColors = daysOfWeek.map((day) =>
            day === currentDayOfWeek ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"
        );

        const hoverBackgroundColors = daysOfWeek.map((day) =>
            day === currentDayOfWeek ? "hsla(186, 34%, 60%, 0.8)" : "hsla(10, 79%, 65%, 0.8)"
        );

        const ctx = document.getElementById("expenseChart").getContext("2d");

        const newChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: daysOfWeek,
                datasets: [
                    {
                        data: amounts,
                        backgroundColor: backgroundColors,
                        hoverBackgroundColor: hoverBackgroundColors,
                        borderColor: "rgba(255, 99, 132, 1)",
                        borderWidth: 0,
                        borderRadius: 5,
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
