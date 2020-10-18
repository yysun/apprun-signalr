import app from 'apprun';
import * as signalR from "@microsoft/signalr";

// const apiBaseUrl = 'https://apprun-signalr-demo.azurewebsites.net';
const apiBaseUrl = '';

const connection = new signalR.HubConnectionBuilder()
  .withUrl(`${apiBaseUrl}/api`)
  .build();

connection.onclose(() => console.log('disconnected'));
connection.start().catch(console.error);

connection.on("apprun:", (event: string, results) => app.run(event, results));

app.on('signalr:', (event, ...args) => connection.send(event, ...args));
