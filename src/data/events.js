//////////////////
// SETUP
//////////////////
const EVENTS_INFO = [
  {
    id: "0",
    title: "Busy",
    dayIndex: 0,
    startHour: 17,
    startMinutes: 30,
    durationMinutes: 90,
  },
  {
    id: "1",
    title: "Weekly All-Hands",
    dayIndex: 1,
    startHour: 9,
    startMinutes: 30,
    durationMinutes: 30,
  },
  {
    id: "2",
    title: "Quick Sync",
    dayIndex: 1,
    startHour: 10,
    startMinutes: 15,
    durationMinutes: 15,
  },
  {
    id: "3",
    title: "Recruiting Update",
    dayIndex: 1,
    startHour: 13,
    startMinutes: 30,
    durationMinutes: 60,
  },
  {
    id: "4",
    title: "Coffee Meeting",
    dayIndex: 2,
    startHour: 10,
    startMinutes: 30,
    durationMinutes: 30,
  },
  {
    id: "5",
    title: "Weekly one-on-one",
    dayIndex: 2,
    startHour: 15,
    startMinutes: 0,
    durationMinutes: 30,
  },
  {
    id: "6",
    title: "Code Review",
    dayIndex: 3,
    startHour: 10,
    startMinutes: 0,
    durationMinutes: 45,
  },
  {
    id: "7",
    title: "P0 Retro",
    dayIndex: 3,
    startHour: 14,
    startMinutes: 30,
    durationMinutes: 60,
  },
  {
    id: "8",
    title: "Design Review",
    dayIndex: 4,
    startHour: 10,
    startMinutes: 0,
    durationMinutes: 90,
  },
  {
    id: "9",
    title: "Project Update",
    dayIndex: 4,
    startHour: 13,
    startMinutes: 30,
    durationMinutes: 30,
  },
  {
    id: "10",
    title: "Customer Feedback Review",
    dayIndex: 4,
    startHour: 15,
    startMinutes: 0,
    durationMinutes: 60,
  },
  {
    id: "11",
    title: "Sprint Huddle",
    dayIndex: 5,
    startHour: 9,
    startMinutes: 30,
    durationMinutes: 30,
  },
  {
    id: "12",
    title: "Planning time 🤷‍♂️",
    dayIndex: 5,
    startHour: 13,
    startMinutes: 30,
    durationMinutes: 60,
  },
  {
    id: "13",
    title: "Demos",
    dayIndex: 5,
    startHour: 16,
    startMinutes: 0,
    durationMinutes: 60,
  },
];

const EVENTS_OPTIMIZED_INFO = [
  { id: "5", dayIndex: 2, startHour: 11, startMinutes: 0 },
  { id: "3", dayIndex: 2, startHour: 10, startMinutes: 0 },
  { id: "2", dayIndex: 2, startHour: 11, startMinutes: 30 },
  { id: "4", dayIndex: 3, startHour: 14, startMinutes: 30 },
  { id: "6", dayIndex: 3, startHour: 13, startMinutes: 45 },
  { id: "7", dayIndex: 3, startHour: 12, startMinutes: 30 },
  { id: "8", dayIndex: 4, startHour: 10, startMinutes: 0 },
  { id: "9", dayIndex: 4, startHour: 9, startMinutes: 30 },
  { id: "10", dayIndex: 3, startHour: 15, startMinutes: 0 },
  { id: "11", dayIndex: 5, startHour: 9, startMinutes: 30 },
  { id: "12", dayIndex: 5, startHour: 10, startMinutes: 0 },
  { id: "13", dayIndex: 5, startHour: 16, startMinutes: 0 },
];

//////////////////////
// HELPER FUNCTIONS
/////////////////////
// creates millis for a given day in the week (Sunday is 0 index)
function createMillisForDay(dayIndex) {
  const now = new Date();
  const nowDay = now.getDay();
  const newDate = now.getDate() - nowDay + (nowDay < dayIndex ? dayIndex - 7 : dayIndex);
  return new Date().setDate(newDate);
}

// creates millis for a day and time
function createMillisForDayTime(dayIndex, startHour, startMinutes) {
  return new Date(new Date(createMillisForDay(dayIndex)).setHours(startHour)).setMinutes(
    startMinutes,
  );
}

// creates a set of millis defining the start and end of a specific time range
function createMillisStartEnd(eventInfo) {
  const { dayIndex, startHour, startMinutes, durationMinutes } = eventInfo;
  const startTimeMillis = createMillisForDayTime(dayIndex, startHour, startMinutes);
  const durationMillis = durationMinutes * 60 * 1000;
  const endTimeMillis = new Date(startTimeMillis).setTime(startTimeMillis + durationMillis);
  return { startTimeMillis, endTimeMillis };
}

//////////////////////
// CORE FUNCTIONS
/////////////////////
// otherwise, generate new ones and return
export function getEvents() {
  // Return event info as-is. No need to add timestamps.
  return EVENTS_INFO.map((eventInfo) => ({
    ...eventInfo,
  }));
}

export function getOptimizedStartTimes() {
  return EVENTS_OPTIMIZED_INFO.map((optimizedInfo) => ({
    ...optimizedInfo,
  }));
}
