using Microsoft.AspNetCore.SignalR;

namespace AppRun.SignalR
{
    public class AppRunHub : Hub
    {
        public void Run(string name, int number, int delta)
        {
            if(name=="add")
            {
                var results = Counter.Add(number, delta);
                Clients.All.SendAsync("apprun:", name, results);
                //Clients.Client(Context.ConnectionId).SendAsync("run", name, results);
            }
        }
    }
}
