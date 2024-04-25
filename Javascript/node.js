const { CloudLogger } = require('@viovnl/cloudlogger');

const cloudLogger = CloudLogger.Create("your_project_secret");
const cloudLoggerItems = [
  { Name: "Date", Value: "22-10-1994" },
  { Name: "Country", Value: "Netherlands" }
];

cloudLogger.Log(cloudLoggerItems)
  .then(() => {
    console.log('Logging successful!');
  })
  .catch((err) => {
    console.error('An error occurred while logging:', err);
  });
