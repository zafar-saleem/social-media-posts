const CALORIES_PER_DAY = [
  {
    id: 1,
    consumed: 10,
    total: 179,
  },
  {
    id: 2,
    consumed: 130,
    total: 179,
  },
  {
    id: 3,
    consumed: 160,
    total: 179,
  },
  {
    id: 4,
    consumed: 170,
    total: 179,
  },
  {
    id: 5,
    consumed: 150,
    total: 179,
  },
  {
    id: 6,
    consumed: 120,
    total: 179,
  },
  {
    id: 7,
    consumed: 120,
    total: 179,
  },
]
const STEPS_PER_DAY = [
  {
    id: 1,
    total: 1429,
    consumed: 120,
  },
  {
    id: 2,
    total: 1429,
    consumed: 1290,
  },
  {
    id: 3,
    total: 1429,
    consumed: 900,
  },
  {
    id: 4,
    total: 1429,
    consumed: 800,
  },
  {
    id: 5,
    total: 1429,
    consumed: 1420,
  },
  {
    id: 6,
    total: 1429,
    consumed: 1400,
  },
  {
    id: 7,
    total: 1429,
    consumed: 1432,
  },
]
const TOTAL_STEPS = Math.round(STEPS_PER_DAY.reduce((acc, item) => acc + item.total, 0));
const STEPS_TAKEN = Math.round(STEPS_PER_DAY.reduce((acc, item) => acc + item.consumed, 0));
const TOTAL_CALORIES = CALORIES_PER_DAY.reduce((acc, item) => acc + item.total, 0);
const CALORIES_CONSUMED = CALORIES_PER_DAY.reduce((acc, item) => acc + item.consumed, 0);
const PROGRESS_AVG = (STEPS_TAKEN + CALORIES_CONSUMED) / 2;

export const GROWTH_DATA = {
  title: "Measure your growth",
  supporting_text: "Create routines with powerful tools that help your stay accountable.",
  total_progress: {
    label: "Progress",
    supporting_text: "Score based on steps, calories, and hydration",
    completed: {
      label: "completed",
      value: Math.round((STEPS_TAKEN + CALORIES_CONSUMED) / (TOTAL_STEPS + TOTAL_CALORIES) * 100),
    },
    average: {
      label: "average",
      value: Math.round(PROGRESS_AVG / (TOTAL_CALORIES + TOTAL_STEPS) * 100),
    },
  },
  steps: {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(253, 99, 26)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sport-shoe-icon lucide-sport-shoe"><path d="m15 10.42 4.8-5.07"/><path d="M19 18h3"/><path d="M9.5 22 21.414 9.415A2 2 0 0 0 21.2 6.4l-5.61-4.208A1 1 0 0 0 14 3v2a2 2 0 0 1-1.394 1.906L8.677 8.053A1 1 0 0 0 8 9c-.155 6.393-2.082 9-4 9a2 2 0 0 0 0 4h14"/></svg>,
    label: "Steps",
    completed: `${Math.round(STEPS_TAKEN / TOTAL_STEPS * 100)}%`,
    total: TOTAL_STEPS,
    streak: STEPS_TAKEN,
    average: Math.round(STEPS_PER_DAY.reduce((acc, item) => acc + item.consumed, 0) / STEPS_PER_DAY.length),
    children: STEPS_PER_DAY,
  },
  calories: {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(253, 99, 26)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame-icon lucide-flame"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>,
    label: "Calories",
    completed: `${Math.round(CALORIES_CONSUMED / TOTAL_CALORIES * 100)}%`,
    total: TOTAL_CALORIES,
    streak: CALORIES_CONSUMED,
    average: Math.round(CALORIES_PER_DAY.reduce((acc, item) => acc + item.consumed, 0) / CALORIES_PER_DAY.length),
    children: CALORIES_PER_DAY,
  }
}
