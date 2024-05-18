import { MetricCallback } from '../types/common';

export const FCP: MetricCallback = (entries) => {
  entries.forEach((entry) => {
    console.log(`${entry.name}:`, entry.startTime);
  });
};