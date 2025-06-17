import React from 'react'

const FailedTask = ({data}) => {
  return (
     <div className="font-bold flex items-center justify-between my-2 px-4 py-10 rounded-lg text-2xl text-white bg-yellow-500 w-[40%]">
        <h3>Failed Task</h3>
        <h1 className="">{data.task_count.failed}</h1>
      </div>
  )
}

export default FailedTask       