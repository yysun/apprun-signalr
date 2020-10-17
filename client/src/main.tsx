import app from 'apprun';
import './signalr';

const add = (state, delta) => state + delta;
const add2 = (state, delta) => { app.run('signalr:', 'add', state, delta) };

const state = 0;

const view = (state) => <div>
  <h1>{state}</h1>
  <div>
    <button $onclick={[add, -1]}>-1</button>
    <button $onclick={[add, +1]}>+1</button>
    <div>Run the counter locally</div>
  </div>
  <hr />
  <div>
    <button $onclick={[add2, -1]}>-1</button>
    <button $onclick={[add2, +1]}>+1</button>
    <div>Run the counter on server through SignalR</div>
  </div>
</div>;

const update = {
  'add': (_, num) => num
}

app.start(document.body, state, view, update);
