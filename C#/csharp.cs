using VIOVNL.CloudLogger;

var cloudLogger = CloudLogger.Create("your_project_secret");
List<CloudLoggerItem> cloudLoggerItems =
        [
            new CloudLoggerItem("Date", "22-10-1994"),
            new CloudLoggerItem("Country", "Netherlands")
        ];
try
{
    await cloudLogger.LogAsync(cloudLoggerItems, true);
}
catch (Exception e)
{
    Console.WriteLine(e);
}