$(function () {
  timeSlot();
});

// Show current date on page.
function currentDate() {
  const currentDay = dayjs();
  $("#currentDay").text(currentDay.format("dddd, MMMM D YYYY"));
}
