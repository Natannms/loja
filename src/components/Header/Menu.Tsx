import {useState} from 'react'
export default function TopMenu(){
    const [nav, setNav] = useState([
        {
            name: 'Home',
            href: '#',
        },
        {
            name: 'About',
            href: '#',
        },
        {
            name: 'Contact',
            href: '#',
        },
    ])
    return(
        <nav className='bg-yellow-500 w-10/12 h-14'>
        <ul className='flex justify-end pr-10 items-center mt-2'>
            {nav.map(item => {
                return (
                    <li key={item.name} className='mr-10'>
                        <a href={item.href} className='text-white'>{item.name}</a>
                    </li>
                )
            })}
        </ul>
    </nav>
    )
}