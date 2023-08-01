import Notification from './Notification/index';
import User from './User/index';
import Settings from './settings/index';

const components = [
  { component: Notification },
  { component: Settings },
  { component: User }
];

const App = () => (
  <ul className='flex flex-1 justify-end'>
    {components.map(({ component: Component }, index) => (
      <li key={index}><Component /></li>
    ))}
  </ul>
);

export default App;