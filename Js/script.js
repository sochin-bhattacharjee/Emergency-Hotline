let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heart = document.getElementById("heartCount");
const coin = document.getElementById("coinCount");
const copy = document.getElementById("copyCount");

const cardsContainer = document.getElementById("cards");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

// card data
const services = [
    {
    name: "National Emergency Number",
    helped: "National Emergency",
    number: "102",
    category: "All",
    icon: "emergency.png",
  },
  {
    name: "Police Helpline Number",
    helped: "Police",
    number: "100",
    category: "Police",
    icon: "police.png",
  },
  {
    name: "Fire Service Number",
    helped: "Fire Service",
    number: "101",
    category: "Fire",
    icon: "fire-service.png",
  },
  {
    name: "Women & Child Helpline",
    helped: "Women & Child Helpline",
    number: "102",
    category: "Help",
    icon: "womenAndChild.png",
  },
  {
    name: "Anti-Corruption Helpline",
    helped: "Anti-Corruption",
    number: "102",
    category: "Government",
    icon: "Anti-Corruption.png",
  },
  {
    name: "Electricity Helpline",
    helped: "Electricity Outage",
    number: "102",
    category: "Electricity",
    icon: "Electricity.png",
  },
  {
    name: "Brac Helpline",
    helped: "Brac",
    number: "102",
    category: "NGO",
    icon: "brac.png",
  },
  {
    name: "Bangladesh Railway Helpline",
    helped: "Bangladesh Railway",
    number: "102",
    category: "Travel",
    icon: "Bangladesh-Railway.png",
  },
  {
    name: "Ambulance Helpline Number",
    helped: "Ambulance",
    number: "102",
    category: "Health",
    icon: "ambulance.png",
  },
];

// Generate Cards dynamically
services.forEach((service) => {
  const card = document.createElement("div");
  card.classList.add(
    "bg-white",
    "p-4",
    "rounded",
    "shadow",
    "flex",
    "flex-col",
    "justify-between"
  );

  card.innerHTML = `
        <div class="flex justify-between items-center mb-2">
            <div>
    <img src="../assets/${service.icon}" alt="${service.name}" class="h-10 w-10">
</div>
            <button class="heart-btn text-red-500 text-xl"><img class="h-6 md:h-10 w-6 md:w-10" src="../assets/heartborder.png" alt="Heart"></button>
        </div>
        <h4 class="font-bold text-lg font-mono">${service.name}</h4>
        <p class="font-light">${service.helped}</p>
        <p class="font-bold text-xl mt-4">${service.number}</p>
        <span class="badge badge-primary my-2 bg-slate-200 p-3 rounded-3xl opacity-80 w-fit mb-4">${service.category}</span>
        <div class="flex gap-3 justify-between mt-2">
            <button class="copy-btn btn btn-sm btn-outline flex items-center border-2 w-full justify-center p-2 rounded-lg"><img class="h-6 w-6" src="../assets/copyicon.png" alt="Copy"> Copy</button>
            <button class="call-btn btn btn-sm btn-outline w-full flex items-center justify-center p-2 rounded-lg bg-green-500 text-white"><img class="h-6 w-6" src="../assets/call-icon.png" alt="Call">Call</button>
        </div>
    `;
  cardsContainer.appendChild(card);

  // Heart functionality
  const heartBtn = card.querySelector(".heart-btn");
  heartBtn.addEventListener("click", () => {
    heartCount++;
    heart.textContent = heartCount;
  });

  // Copy functionality
  const copyBtn = card.querySelector(".copy-btn");
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(service.number);
    alert(`${service.number} copied to clipboard`);
    copyCount++;
    copy.textContent = copyCount + " Copy";
  });

  // Call functionality
  const callBtn = card.querySelector(".call-btn");
  callBtn.addEventListener("click", () => {
    if (coinCount < 20) {
      alert("Not enough coins to make a call!");
      return;
    }
    coinCount -= 20;
    coin.textContent = coinCount;

    const time = new Date().toLocaleTimeString();
    alert(`Calling ${service.name} (${service.number})`);

    const li = document.createElement("li");
    li.innerHTML = `<div class="flex justify-between items-center bg-slate-100/70 p-3 rounded-2xl">
        <p class="font-"><span class="font-bold">${service.name}</span> <br> <span class="text-gray-500">${service.number}</span></p>
        <p>${time}</p>
    </div>`;
    historyList.appendChild(li);
  });
});

// Clear history functionality
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
