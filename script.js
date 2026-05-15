function analyzeCar() {
  const vin = document.getElementById("vin").value;
  const images = document.getElementById("images").files;

  if (!vin) {
    alert("Please enter VIN");
    return;
  }

  // Fake analysis logic (we will replace with AI later)
  let baseValue = 12000;

  let damageEstimate = Math.floor(Math.random() * 4000);

  let finalValue = baseValue - damageEstimate;

  document.getElementById("result").innerHTML = `
    <h3>Analysis Result</h3>
    <p><b>VIN:</b> ${vin}</p>
    <p><b>Estimated Base Value:</b> $${baseValue}</p>
    <p><b>Estimated Damage Cost:</b> -$${damageEstimate}</p>
    <h2>Final Estimated Value: $${finalValue}</h2>
    <p>Status: Simulation Mode (no AI yet)</p>
  `;
}
