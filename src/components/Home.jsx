import React from 'react'

function Home() {
  return (
    <div className="container mx-auto mt-14 w-[80vw] bg-gray-100 rounded-2xl p-8 h-[80vh] flex flex-col justify-center items-center text-center">
    <h1 className="text-4xl font-bold text-green-900 mb-4">Welcome to Your To-Do List</h1>
    <p className="text-lg text-gray-700 mb-8">
      Stay organized and boost your productivity! Manage your daily tasks, mark them as complete, and keep track of your progress. 
    </p>
    <p className="text-xl text-gray-600 italic">
      "The secret to getting ahead is getting started." – Mark Twain
    </p>
    <p className="text-lg mt-8 text-green-900 font-medium">
      Ready to get started? Head over to your <a href="/todolist" className="underline text-green-700">To-Do List</a> now!
    </p>
  </div>
  )
}

export default Home