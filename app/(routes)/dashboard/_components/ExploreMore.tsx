"use client"
import Image from "next/image";

const ExploreMoreOptions = [
    {
        id: 1,
        name: 'React Beginner',
        desc: 'Learn the fundamentals of React, including components, props, state, and building your first UI.',
        bannerImage: '/tree.png',
        level: 'Beginner',
    },
    {
        id: 2,
        name: 'HTML Beginner',
        desc: 'Understand the basics of web structure using HTML tags, elements, and semantic layouts.',
        bannerImage: '/book.png',
        level: 'Beginner',
    },
    {
        id: 3,
        name: 'CSS Beginner',
        desc: 'Master styling essentials like selectors, colors, layout, flexbox, and responsive design.',
        bannerImage: '/fire.png',
        level: 'Beginner',
    },
    {
        id: 4,
        name: 'Python Beginner',
        desc: 'Start coding with Python by learning variables, conditions, loops, functions, and basic projects.',
        bannerImage: '/game.png',
        level: 'Beginner',
    }
];



function ExploreMore() {
  return (
    <div>
        <h2 className="text-3xl mb-2 font-game">Explore More </h2>
        <div className="grid grid-cols-2 gap-5">
            {ExploreMoreOptions.map((option,index)=>(
                <div key={index} className="flex items-start gap-3 p-3 border rounded-xl bg-zinc-900" >
                    <Image src={option?.bannerImage} 
                    alt={option.name} width={80} height={80} className="shrink-0"  />
                    <div className="flex-1 min-w-0">
                        <h2 className="font-medium text-2xl font-game">{option?.name}</h2>
                        <p className="text-gray-400 font-game">{option.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ExploreMore