import { useState } from 'react';
import './App.css';
import Listing from './components/task1-listing/Listing';
import MessageHistory from './components/task2-chat/MessageHistory';
import etsyData from './data/etsy.json';
import messages from './data/messages';
import type { EtsyListing } from './types/listing';

type Task = 'listing' | 'chat';

function App() {
  const [task, setTask] = useState<Task>('listing');

  const listings = etsyData as unknown as EtsyListing[];

  return (
    <div className="app">
      <div className="app__switch">
        <button
          type="button"
          className={task === 'listing' ? 'app__switch-btn app__switch-btn--active' : 'app__switch-btn'}
          onClick={() => setTask('listing')}
        >
          Список предложений
        </button>
        <button
          type="button"
          className={task === 'chat' ? 'app__switch-btn app__switch-btn--active' : 'app__switch-btn'}
          onClick={() => setTask('chat')}
        >
          История чата
        </button>
      </div>

      {task === 'listing' && <Listing items={listings} />}
      {task === 'chat' && (
        <div className="chat-container">
          <MessageHistory list={messages} />
        </div>
      )}
    </div>
  );
}

export default App;