import React from 'react'

const Course_student = () => {
  return (
    <div>
        <h1 class="text-3xl font-bold text-left m-10 mb-3">Introduction to HDL</h1>
        <hr class="m-10 mr-10 h-0.5 bg-neutral-500"></hr>
        <div class="grid grid-cols-3 grid-flow-row gap-40 bg-slate-200">
            <div class="row-span-1 m-10">
                <h1>Your Prgress</h1>
                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 45%</div>
                </div>
            </div>
            <div class="row-span-2 m-10">
                <p>Introduction</p>
            </div>
        </div>
    </div>
  )
}

export default Course_student;