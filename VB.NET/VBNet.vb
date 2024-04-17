Imports System
Imports System.Collections.Generic
Imports System.Threading.Tasks
Imports VIOVNL.CloudLogger

Module Program
    Sub Main(args As String())
        MainAsync().Wait() 
    End Sub

    Async Function MainAsync() As Task
        Console.WriteLine("Hello, World!")

        Dim cloudLogger As CloudLogger = CloudLogger.Create("your_project_secret")
        Dim cloudLoggerItems As List(Of CloudLoggerItem) = New List(Of CloudLoggerItem) From {
            New CloudLoggerItem("Date", "22-10-1994"),
            New CloudLoggerItem("Country", "Netherlands")
        }

        Try
            Await cloudLogger.LogAsync(cloudLoggerItems, True)
        Catch ex As Exception
            Console.WriteLine(ex.ToString())
        End Try
    End Function
End Module
