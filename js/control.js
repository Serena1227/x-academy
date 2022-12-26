// Change backround
// const background = $(".section-background");

// const switchBackground = (current, length) => {
//   setTimeout(() => {
//     const nextActive = (current + 1) % length;
//     background[nextActive].classList.add("pre-active");
//     setTimeout(() => {
//       background[current].classList.remove("active");
//       background[nextActive].classList.remove("pre-active");
//       switchBackground(nextActive, length);
//     }, 1000);
//     setTimeout(() => {
//       background[nextActive].classList.add("active");
//     }, 200);
//   }, 4000);
// };

// switchBackground(0, background.length);

const now = moment();
const target = moment("2023-01-13 08:00");

const eventTime = moment("2023-01-13 08:00"); // Timestamp - Sun, 21 Apr 2013 13:00:00 GMT
const currentTime = moment(); // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT
const diffTime = eventTime - currentTime;
let duration = moment.duration(diffTime, "milliseconds");
const interval = 1000;

const days = $("#countdown-days");
const hours = $("#countdown-hours");
const minutes = $("#countdown-minutes");
const seconds = $("#countdown-seconds");

const formatTwoNumber = (value) => {
  return value >= 10 ? value : "0" + value;
};
const count = setInterval(() => {
  duration = moment.duration(duration - interval, "milliseconds");
  if (duration <= 0) {
    clearInterval(count);
    const countDown = $(".space_time_count_down")[0];
    countDown.parentElement.removeChild(countDown);
  } else {
    days.text(formatTwoNumber(duration.days()));
    hours.text(formatTwoNumber(duration.hours()));
    minutes.text(formatTwoNumber(duration.minutes()));
    seconds.text(formatTwoNumber(duration.seconds()));
  }
}, interval);

$(window)
  .on("load resize ", function () {
    var scrollWidth =
      $(".tbl-content").width() - $(".tbl-content table").width();
    $(".tbl-header").css({ "padding-right": scrollWidth });
  })
  .resize();

//Table
const dataCourse = [
  {
    id: "01",
    name: "Android App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "02",
    name: "IOS App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3848516/",
  },
  {
    id: "03",
    name: ".NET Technology",
    url: "https://fpt-software.udemy.com/learning-paths/3848702/",
  },
  {
    id: "04",
    name: "Java Platform",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "05",
    name: "React Native - Mobile Apps",
    url: "https://fpt-software.udemy.com/learning-paths/4206754/",
  },
  {
    id: "06",
    name: "Low-Code Platforms",
    url: "https://fpt-software.udemy.com/learning-paths/4141564/",
  },
  {
    id: "07",
    name: "Magento Platform",
    url: "https://fpt-software.udemy.com/learning-paths/3958538/",
  },
  {
    id: "08",
    name: "SharePoint Platform",
    url: "https://fpt-software.udemy.com/learning-paths/3958456/",
  },
  {
    id: "09",
    name: "Data Science: Data Analytics",
    url: "https://fpt-software.udemy.com/learning-paths/3958352/",
  },
  {
    id: "10",
    name: "Interview and Evaluation",
    url: "https://fpt-software.udemy.com/learning-paths/3950670/",
  },
  {
    id: "11",
    name: "Software Automation Testing",
    url: "https://fpt-software.udemy.com/learning-paths/3848772/",
  },
  {
    id: "12",
    name: "UI/UX Design and Tools",
    url: "https://fpt-software.udemy.com/learning-paths/3848520/",
  },
  {
    id: "13",
    name: "Interview Skills for Interviewer",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  // Tới đây
  {
    id: "14",
    name: "iOS App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "15",
    name: "iOS App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "16",
    name: "Android App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "17",
    name: "iOS App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "18",
    name: "iOS App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "19",
    name: "Android App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "20",
    name: "iOS App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "21",
    name: "iOS App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "21",
    name: "Android App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "23",
    name: "iOS App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "24",
    name: "iOS App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "25",
    name: "Android App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "26",
    name: "iOS App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "27",
    name: "iOS App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "28",
    name: "iOS App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "29",
    name: "iOS App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "30",
    name: "iOS App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "31",
    name: "iOS App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "32",
    name: "iOS App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "33",
    name: "iOS App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "34",
    name: "iOS App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "35",
    name: "iOS App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
  {
    id: "36",
    name: "iOS App Development",
    url: "https://fpt-software.udemy.com/learning-paths/3503128/",
  },
];
document.getElementById("table_render").innerHTML = dataCourse
  .map(
    (data) =>
      `<tr>
      <td>${data.id}</td>
      <td>${data.name}</td>
      <td>${data.url}</td>
    </tr>`
  )
  .join("");
