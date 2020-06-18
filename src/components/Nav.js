import React from 'react'
import { AiFillHome } from "react-icons/ai"
import { AiFillCalendar } from "react-icons/ai"
import { AiOutlineOrderedList } from "react-icons/ai"
import { Link } from 'react-router-dom'
export const Nav = () => {

return (
<nav className='nav'>
<Link>
<AiFillHome />
</Link>
<Link>
<AiFillCalendar />
</Link>
<Link>
<AiOutlineOrderedList />
</Link>
</nav>

);

}