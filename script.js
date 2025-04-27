document.addEventListener("DOMContentLoaded", () => {
    const data = [
        { rank: 1, participant: "Amelia", average: 11354, avatarId: 47 },
        { rank: 2, participant: "Tom", average: 10812, avatarId: 146 },
        { rank: 3, participant: "Sam", average: 10266, avatarId: 108 },
        { rank: 4, participant: "Jayden", average: 10133, avatarId: 17 },
        { rank: 5, participant: "Antonio", average: 9927, avatarId: 24 },
        { rank: 6, participant: "Mario", average: 9330, avatarId: 31 },
        { rank: 7, participant: "Andrew", average: 9230, avatarId: 8 },
        { rank: 8, participant: "Jacky", average: 9119, avatarId: 29 },
        { rank: 9, participant: "Moses", average: 8963, avatarId: 52 },
        { rank: 10, participant: "Thomas", average: 8096, avatarId: 16 },
    ];

    const podiumEls = document.querySelectorAll(".podium-place");
    data.slice(0, 3).forEach((item) => {
        const box = podiumEls[item.rank - 1];
        const img = box.querySelector(".avatar");
        const name = box.querySelector(".name");
        const step = box.querySelector(".steps");

        img.src = `https://api.dicebear.com/8.x/pixel-art/svg?seed=${item.avatarId}`;
        img.alt = `${item.participant}'s avatar`;
        name.textContent = item.participant;
        step.textContent = item.average.toLocaleString() + " steps";
    });

    /* ---------- rest of leaderboard ---------- */
    const tbody = document.querySelector("tbody");
    data.forEach((item) => {
        if (item.rank <= 3) return;
        const tr = document.createElement("tr");
        const medal = { 1: "🥇", 2: "🥈", 3: "🥉" }[item.rank] || item.rank;
        tr.innerHTML = `
          <td class="text-center">${medal}</td>
          <td>${item.participant}</td>
          <td>${item.average.toLocaleString()}</td>`;
        tbody.appendChild(tr);
    });
});
