import Logo from '@/app/components/logo';
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <nav className='flex flex-row justify-between items-center py-4 px-8 bg-gray-800'>
                    <Logo width={84} height={84}/>
                    <ul className='flex text-gray-200 text-3xl list-none gap-16'>
                        
                        <Link className='hover:text-blue-500 font-bold' href='/editor'><li>Editor</li></Link>
                        <Link className='hover:text-blue-500 font-bold' href='/editor'><li>Tips</li></Link>
                    </ul>
            </nav>
        </header>
    );
}