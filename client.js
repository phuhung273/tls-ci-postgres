
(async function () {
    let response = await fetch("https://localhost:2443");
    let fetchHtml = await response.text();
    console.log(fetchHtml)
})()