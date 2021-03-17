let todaysDate = new Date().toLocaleString("en-us", {
    month: "short",
    year: "numeric",
    day: "numeric",
});

let date = new Vue({
    el: "#date",
    data: {
        date: todaysDate
    }
})