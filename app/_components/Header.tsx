'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs';

const CoursesList = [
  {
    id: 1,
    name: 'React Beginner',
    desc: 'Learn the fundamentals of React, including components, props, state, and building your first UI.',
    bannerImage: 'https://ik.imagekit.io/tubeguruji/Codebox/588a44195922117.66168b374ece8.gif',
    level: 'Beginner',
  },
  {
    id: 2,
    name: 'HTML Beginner',
    desc: 'Understand the basics of web structure using HTML tags, elements, and semantic layouts.',
    bannerImage: 'https://ik.imagekit.io/tubeguruji/Codebox/original-ba977c3d86642765b44fd9d1579d78d4.gif?updatedAt=1763406224974',
    level: 'Beginner',
  },
  {
    id: 3,
    name: 'CSS Beginner',
    desc: 'Master styling essentials like selectors, colors, layout, flexbox, and responsive design.',
    bannerImage: 'https://ik.imagekit.io/tubeguruji/Codebox/fd40a4b8b151c4e432106576187d03c9.gif?updatedAt=1763406225765',
    level: 'Beginner',
  },
  {
    id: 4,
    name: 'Python Beginner',
    desc: 'Start coding with Python by Learning variables, conditions, Loops, functions, and basic projects.',
    bannerImage: 'https://ik.imagekit.io/tubeguruji/Codebox/tumblr_3ebef054c877d03c507aa8c40149908b_515b1f92.-1280.webp?updatedAt=1763406230994',
    level: 'Beginner',
  },
];

function Header() {

const {user} = useUser();


  return (
    <div className='p-4 max-w-7xl flex justify-between items-center w-full'>
        <div className='flex gap-2 items-center'>
             <Image src={'/logo.png'} alt = 'logo' width = {40} height={40} />
        <h2 className='font-bold text-3xl font-game'>CodeBox</h2>
        </div>
       {/* Navbar */}
            <NavigationMenu>
      <NavigationMenuList className='gap-10'>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid md:grid-col-2 gap-2 sm:w-[400px] 
            md:w-[500px] lg:w-[600px]]'>
              {CoursesList.map((course,index)=>(
                <div key={index} className='p-2 hover:bg-accent rounded-xl cursor-pointer'>
                  <h2 className='font-medium'>{course.name}</h2>
                  <p className='text-xs text-gray-500'>{course.desc}</p>
                </div>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuLink>
          <Link href={'/projects'}>Projects
          </Link>
        </NavigationMenuLink>
        </NavigationMenuItem>
         <NavigationMenuItem>
        <NavigationMenuLink>
          <Link href={'/pricing'}>Pricing
          </Link>
        </NavigationMenuLink>
        </NavigationMenuItem>
         <NavigationMenuItem>
        <NavigationMenuLink>
          <Link href={'/contact-us'}>Contact
          </Link>
        </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
          
       {/* Signup Button */}
    {!user?  
    <Link href = {'/sign-up'}>
      <Button className='font-game text-2xl ' variant='pixel'  >Sign-Up</Button>
    </Link>
    : <div className='flex gap-4 items-center '>
      <Button className='font-game text-2xl ' variant='pixel'  >Dashboard</Button>
      <UserButton />
    </div>}
    
    </div>
  )
}

export default Header