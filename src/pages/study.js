import React from 'react'

const Study = () => {
  return (

<div className='px-4 py-6'>
    <table border={2}>
        <tbody >
            <tr className='border-b-2 border-gray-600 bg-gray-100 '>
                <th className='px-4 font-bold text-base '>name </th>
                <th className='px-4 font-bold text-base '>roll number</th>
                <th className='px-4 font-bold text-base '>age </th>
                <th className='px-4 font-bold text-base '>school</th>
                <th className='px-4 font-bold text-sm '>status</th>
            </tr>
        </tbody>
        <tbody>
            <tr className='bg-zinc-300'>
                <td className='px-4 font-bold text-sm '>vaishnav</td>
                <td className='px-4 font-bold text-sm '>1</td>
                <td className='px-4 font-bold text-sm '>25</td>
                <td className='px-4 font-bold text-sm '>khss</td>
                <td className='px-4 font-bold text-sm '><span className=' px-2 rounded-md  text-white'>status</span></td>
            </tr>
            <tr className='bg-zinc-100'>
                <td className='px-4 font-bold text-sm '>vaishnav</td>
                <td className='px-4 font-bold text-sm '>1</td>
                <td className='px-4 font-bold text-sm '>25</td>
                <td className='px-4 font-bold text-sm '>khss</td>
                <td className='px-4 font-bold text-sm '>status</td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default Study





//     <div className='w-screen h-16 bg-green-400 py-2'>
//       <div className='h-12 w-full  px-4 flex items-center justify-end'>
        
// <ul className='flex gap-8 '>
//     <li className='font-semibold text-lg text-white cursor-pointer border-b-2 border-transparent hover:border-red-600'>vaishnav</li>
//     <li className='font-semibold text-lg text-white cursor-pointer border-b-2 border-transparent hover:border-red-600'>vaishnav</li>
//     <li className='font-semibold text-lg text-white cursor-pointer border-b-2 border-transparent hover:border-red-600'>vaishnav</li>
//     <li className='font-semibold text-lg text-white cursor-pointer border-b-2 border-transparent hover:border-red-600'>vaishnav</li>
//     <li className='font-semibold text-lg text-white cursor-pointer border-b-2 border-transparent hover:border-red-600'>vaishnav</li>
// </ul>
//       </div>
//     </div>
