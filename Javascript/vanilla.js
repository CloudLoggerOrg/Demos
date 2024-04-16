
<script src="https://cdn.statically.io/gh/VIOVNL/CloudLogger-NPM/main/dist/index.global.min.js"></script>

const cloudLogger = CloudLogger.Create("your_project_secret");

document.querySelector('button').addEventListener('click', () => {
    try {
        cloudLogger.Log(
            [
                { Name: "Date", Value: "22-10-1994" },
                { Name: "Country", Value: "Netherlands" },
            ]
        );
    } catch (e) {
        console.log('error', e);
    }
})
