
// import React from 'react'
// import Header from './Header'

// const tasks = [
//   {
//     id: 1,
//     tag: 'Urgent',
//     title: 'FinTech Website Update',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna.',
//   },
//   {
//     id: 2,
//     tag: 'Important',
//     title: 'Agro Website Update',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna.',
//   },
//   {
//     id: 3,
//     tag: 'Urgent',
//     title: 'FinTech Website Update',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna.',
//   },
// ]

// export default function InitialTask() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
//       <main className="max-w-2xl mx-auto px-6 py-8">

//         <ul>
//           {tasks.map((task) => (<li>{task}</li>))}
//         </ul>

//         {/* Page Header */}
//         <div className="flex items-center justify-between mb-7">
//           <h1 className="text-2xl font-bold text-gray-900">My Tasks</h1>
//           <button className="flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:bg-violet-50 px-3 py-2 rounded-lg transition">
//             + Add New Task
//           </button>
//         </div>

//         {/* Task Cards */}
//         <div className="flex flex-col gap-4">
//           {tasks.map((task) => (
//             <div key={task.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              
//               {/* Tag + Actions */}
//               <div className="flex items-start justify-between gap-3 mb-1">
//                 <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wide
//                   ${task.tag === 'Urgent'
//                     ? 'text-red-500 bg-red-50'
//                     : 'text-violet-600 bg-violet-50'
//                   }`}>
//                   {task.tag}
//                 </span>
//                 <div className="flex gap-2 shrink-0">
//                   <button className="flex items-center gap-1.5 text-xs font-semibold bg-violet-700 text-white px-3 py-1.5 rounded-md hover:bg-violet-800 transition">
//                     Edit
//                   </button>
//                   <button className="flex items-center gap-1.5 text-xs font-semibold bg-red-50 text-red-500 border border-red-100 px-3 py-1.5 rounded-md hover:bg-red-100 transition">
//                     Delete
//                   </button>
//                 </div>
//               </div>

//               <h2 className="text-base font-bold text-gray-900 mb-2">{task.title}</h2>
//               <p className="text-sm text-gray-500 leading-relaxed">{task.desc}</p>
//             </div>
//           ))}
//         </div>

//       </main>
//     </div>
//   )
// }