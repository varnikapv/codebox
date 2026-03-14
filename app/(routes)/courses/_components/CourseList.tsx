"use client"

import Image from 'next/image'
import React from 'react'
import { ChartNoAxesColumnIncreasing } from 'lucide-react'

type Course = {
    id: number
    courseId: number
    title: string
    desc: string
    level: string
    bannerImage: string
}

const courses: Course[] = [
    {
        id: 1,
        courseId: 1,
        title: 'React Beginner',
        desc: 'Discover the foundation of every webpage and learn how HTML shapes the digital world.',
        level: 'Beginner',
        bannerImage: '/images/react.gif',
    },
    {
        id: 2,
        courseId: 2,
        title: 'HTML Beginner',
        desc: 'Understand the basics of web structure using HTML tags, elements, and semantic layouts.',
        level: 'Beginner',
        bannerImage: '/images/react2.gif',
    },
    {
        id: 3,
        courseId: 3,
        title: 'CSS Beginner',
        desc: 'Master styling essentials like selectors, colors, layout, flexbox, and responsive design.',
        level: 'Beginner',
        bannerImage: '/images/react3.gif',
    },
    {
        id: 4,
        courseId: 4,
        title: 'Python Beginner',
        desc: 'Start coding with Python by learning variables, conditions, loops, functions, and basic projects.',
        level: 'Beginner',
        bannerImage: '/images/react4.gif',
    },
]

function CourseList() {
    return (
            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {courses.map((course) => (
                    <div key={course.id} className='overflow-hidden rounded-2xl border border-white/10 bg-white/5'>
                        <Image
                            src={course.bannerImage}
                            width={500}
                            height={220}
                            alt={course.title}
                            className='w-full h-[220px] object-cover'
                            unoptimized
                        />
                        <div className='p-5 space-y-3'>
                            <h3 className='text-white text-4xl font-game'>{course.title}</h3>
                            <p className='text-gray-400 text-2xl font-game leading-relaxed line-clamp-3'>
                                {course.desc}
                            </p>
                            <div className='inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2'>
                                <ChartNoAxesColumnIncreasing className='h-5 w-5 text-gray-300' />
                                <span className='text-xl text-gray-200 font-game'>{course.level}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default CourseList