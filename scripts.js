document.addEventListener('DOMContentLoaded', () => {
  const companyList = document.getElementById('companyList');
  const valuationChart = document.getElementById('valuationChart');

  const companies = ['Albemarle', 'Israel Chemicals', 'Lanxess', 'Clariant'];
  companies.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    li.onclick = () => renderValuationChart(name);
    companyList.appendChild(li);
  });

  function renderValuationChart(company) {
    valuationChart.innerHTML = `<strong>${company}</strong> valuation chart will appear here. [Placeholder for Chart.js]`;
  }
});