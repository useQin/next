import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function AcmeLogo({ login = false }) {
  return (
    <div className='flex justify-between items-end flex-1' >
      <div
        className={`   flex flex-row items-center leading-none text-white`}
      >
        <GlobeAltIcon className="h-8 w-8 rotate-[15deg]" />
        <p className={`ml-3 text-[28px] flex-1`}>Chai Chat</p>
      </div>
      <div>
        {login ? <Link href={"/"} className="text-[14ax]">bleak Home </Link> :
          <></>
        }

      </div>
    </div>
  );
}
