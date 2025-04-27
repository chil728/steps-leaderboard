document.addEventListener("DOMContentLoaded", () => {
    const data = [
        { rank: 1, participant: "Amelia", average: 11354, avatarId: 47 },
        { rank: 2, participant: "Tom", average: 10812, avatarId: 12 },
        { rank: 3, participant: "Sam", average: 10266, avatarId: 5 },
        { rank: 4, participant: "Jayden", average: 10133, avatarId: 17 },
        { rank: 5, participant: "Antonio", average: 9927, avatarId: 24 },
        { rank: 6, participant: "Mario", average: 9330, avatarId: 31 },
        { rank: 7, participant: "Andrew", average: 9230, avatarId: 8 },
        { rank: 8, participant: "Jacky", average: 9119, avatarId: 29 },
        { rank: 9, participant: "Moses", average: 8963, avatarId: 52 },
        { rank: 10, participant: "Thomas", average: 8096, avatarId: 16 },
    ];

    const tbody = document.querySelector("tbody");
    data.forEach((item) => {
        const tr = document.createElement("tr");
        if (item.rank <= 3) tr.classList.add("top" + item.rank);
        const medal =
            {
                1: '<i class="fas fa-medal text-warning"></i>',
                2: '<i class="fas fa-medal text-info"></i>',
                3: '<i class="fas fa-medal text-danger"></i>',
            }[item.rank] || item.rank;

        tr.innerHTML = `
        <td class="text-center">${medal}</td>
        <td class="d-flex align-items-center">${item.participant}</td>
        <td class="text-center">${item.average.toLocaleString()}</td>
      `;
        tbody.appendChild(tr);
    });
});
