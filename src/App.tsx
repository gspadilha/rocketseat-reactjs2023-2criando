import { BsStopwatch } from 'react-icons/bs';
import { IoReceiptOutline } from 'react-icons/io5';

function App() {
  return (
    <div className='h-[calc(100vh-5rem)] w-[70rem] rounded-[8px] bg-zinc-800'>
      <div>
        <span>LOGO</span>
        <span>
          <BsStopwatch size={25} aria-label='button-cronometro' />
          <IoReceiptOutline size={25} aria-label='button-registro' />
        </span>
      </div>
      <div>app</div>
    </div>
  );
}

export default App;
