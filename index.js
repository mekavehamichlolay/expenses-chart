const days = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];
const largest = Math.max(...days.map((day) => day.amount));

const listItems = document.querySelectorAll(".spending__graph-item");
console.log(listItems);

listItems.forEach((item) => {
  const amount = days.filter((day) => day.day === item.dataset.day)[0].amount;

  const bar = item.querySelector(".spending__day-sum");
  bar.innerText = `$${amount}`;
  const graph = item.querySelector(".graph");
  graph.style.setProperty("--height", `${80 / (60 / amount)}%`);
  if (amount === largest) {
    graph.style.setProperty("--bg-color", "var(--cyan)");
  }
});
