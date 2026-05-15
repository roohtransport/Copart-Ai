async function analyzeCar() {

  const vin = document.getElementById("vin").value;

  if (!vin) {
    alert("Enter VIN first");
    return;
  }

  const response = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/" + vin + "?format=json"
  );

  const data = await response.json();
  const results = data.Results;

  let make="", model="", year="", body="";

  results.forEach(item => {
    if(item.Variable==="Make") make=item.Value;
    if(item.Variable==="Model") model=item.Value;
    if(item.Variable==="Model Year") year=item.Value;
    if(item.Variable==="Body Class") body=item.Value;
  });

  // Base market estimate
  let baseValue = Math.floor(15000 + Math.random()*8000);

  // simulated damage
  let damage = Math.floor(2000 + Math.random()*5000);

  // repair estimate
  let repairCost = Math.floor(damage * 0.8);

  // auction buy estimate
  let auctionPrice = Math.floor(baseValue * 0.45);

  // flip value
  let resale = baseValue - damage + 1500;

  let profit = resale - (auctionPrice + repairCost);

  let decision = "⚠️ Risky Buy";

  if(profit > 4000) decision="✅ GOOD FLIP";
  if(profit > 7000) decision="🔥 EXCELLENT DEAL";

  document.getElementById("result").innerHTML = `

  <h2>Vehicle Details</h2>

  <p><b>Make:</b> ${make}</p>
  <p><b>Model:</b> ${model}</p>
  <p><b>Year:</b> ${year}</p>
  <p><b>Body:</b> ${body}</p>

  <hr>

  <h3>Market Estimate</h3>

  <p>Retail Market Value: $${baseValue}</p>

  <p>Estimated Damage: -$${damage}</p>

  <p>Repair Cost Estimate: $${repairCost}</p>

  <p>Expected Auction Buy Price: $${auctionPrice}</p>

  <hr>

  <h2>Projected Resale Value: $${resale}</h2>

  <h2>Estimated Profit: $${profit}</h2>

  <h1>${decision}</h1>
  `;
}
   
  
