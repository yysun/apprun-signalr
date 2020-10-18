using Microsoft.AspNetCore.SignalR;

namespace AppRun.SignalR
{
    public class AppRunHub : Hub
    {
        public void Add(int number, int delta)
        {
            var results = Counter.Add(number, delta);
            Clients.All.SendAsync("apprun:", "add", results);
            //Clients.Client(Context.ConnectionId).SendAsync("apprun:", name, results);
        }
    }
}
