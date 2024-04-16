using Microsoft.AspNetCore.Mvc;
using VIOVNL.CloudLogger;

namespace cloudlogger_dotnet.Controllers;

public class LogController : Controller
{
    private readonly CloudLogger _cloudLogger;

    public LogController()
    {
        _cloudLogger = CloudLogger.Create("your_project_secret");
    }

    // POST: Home/Log
    [HttpPost]
    public async Task<IActionResult> Log()
    {
        List<CloudLoggerItem> cloudLoggerItems =
        [
            new CloudLoggerItem("Date", "22-10-1994"),
            new CloudLoggerItem("Country", "Netherlands")
        ];
        try {
            await _cloudLogger.LogAsync(cloudLoggerItems, true);
        } catch(Exception e) {
            Console.WriteLine(e);
        }

        return Ok();
    }
}
