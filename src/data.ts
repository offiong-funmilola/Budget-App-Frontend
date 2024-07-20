import { SavingData } from "./type";

export const savingData: SavingData[] = [
  {
    month: "January",
    amount: 300,
    status: "done",
  },
  {
    month: "February",
    amount: 500,
    status: "done",
  },
  {
    month: "March",
    amount: 500,
    status: "undone",
  },
  {
    month: "April",
    amount: 300,
    status: "done",
  },
  {
    month: "May",
    amount: 500,
    status: "undone",
  },
  {
    month: "June",
    amount: 500,
    status: "done",
  },
  {
    month: "July",
    amount: 500,
    status: "pending",
  },
  {
    month: "August",
    amount: 500,
    status: "pending",
  },
  {
    month: "September",
    amount: 550,
    status: "pending",
  },
  {
    month: "October",
    amount: 550,
    status: "pending",
  },
  {
    month: "November",
    amount: 600,
    status: "pending",
  },
  {
    month: "December",
    amount: 600,
    status: "pending",
  },
];

export const labels: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

export const datasets = [
  {
    id: 1,
    label: "Groceries",
    data: [5, 5, 7, 8, 6, 6, 6, 5, 5, 6, 7, 10],
    backgroundColor: "rgba(48, 112, 179)",
    borderColor: "rgb(48, 112, 179,)",
  },
  {
    id: 2,
    label: "Bills",
    data: [50, 60, 60, 60, 63, 65, 60, 57, 65, 65, 65, 60],
    backgroundColor: "rgba(255, 99, 132)",
    borderColor: "rgb(255, 99, 132)",
  },
  {
    id: 3,
    label: "Others",
    data: [15, 15, 17, 18, 16, 16, 16, 15, 15, 16, 17, 10],
    backgroundColor: "rgba(75, 192, 192)",
    borderColor: "rgb(75, 192, 192)",
  },
]
// const formatDate = () => {
//   let today = new Date()
//   let month = today.getMonth().toString()
//   month = month.length > 1 ? month : "0" + month
//   let day = today.getDate().toString()
//   day = day.length > 1 ? day : "0" + day
//   let year = today.getFullYear()
//   return `${month}/${day}/${year}`
// }
