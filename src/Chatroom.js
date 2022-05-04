import React from 'react'

const Chatroom = () => {
  return (
    <div className='w-full flex justify-center items-center p-4 h-screen'>
      <div className=' w-[600px] h-full border rounded-sm'>
        <header className='flex w-full justify-between items-center p-4 sticky top-0'>
          <div>SuperChat</div>
          <button className='px-3 py-2 rounded-sm bg-blue-500 text-white'>Log out</button>
        </header>
        <hr/>
        <section className='chat'>

        </section>
        <hr/>
        <section></section>
      </div>
    </div>
  )
}

export default Chatroom