import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import type { Company } from '../data/companies';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface FinancialChartProps {
  financialData: Company['financials'];
}

function FinancialChart({ financialData }: FinancialChartProps) {
  const data = {
    labels: financialData.map((d) => d.year),
    datasets: [
      {
        label: 'P/E Ratio',
        data: financialData.map((d) => (typeof d.peRatio === 'string' ? 0 : d.peRatio)),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'EV/EBITDA',
        data: financialData.map((d) => (typeof d.evEbitda === 'string' ? 0 : d.evEbitda)),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'P/B Ratio',
        data: financialData.map((d) => (typeof d.pbRatio === 'string' ? 0 : d.pbRatio)),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Financial Ratios',
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              const originalValue = financialData[context.dataIndex];
              if (originalValue) {
                const key = context.dataset.label?.startsWith('P/E') ? 'peRatio' : context.dataset.label?.startsWith('EV') ? 'evEbitda' : 'pbRatio';
                // @ts-ignore
                const value = originalValue[key];
                if (typeof value === 'string') {
                  label += value;
                } else {
                  label += context.parsed.y;
                }
              }
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <Bar options={options} data={data} />;
}

export default FinancialChart;
