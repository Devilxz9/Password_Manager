import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react';


const Manager = () => {

  const [show, setShow] = useState(false);
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])
  const [visiblestate, setvisiblestate] = useState(null)

  useEffect(() => {
    let passwords = localStorage.getItem("passwords")
    if (passwords) {
      setpasswordArray(JSON.parse(passwords))
    }

  }, [])

  const DeletePassword = (index) => {
    const newArray = passwordArray.filter((item, i) => i !== index);
    setpasswordArray(newArray);
    localStorage.setItem("passwords", JSON.stringify(newArray))
  }
  console.log(form);

  const EditPassword = (index) => {
    const item = passwordArray[index];
    if (!item) return
    setform({ site: item.site, username: item.username, password: item.password })

    const newArray = passwordArray.filter((item, i) => i !== index);
    setpasswordArray(newArray);
    localStorage.setItem("passwords", JSON.stringify(newArray))
  }






  const eyechange = () => {
    setShow(!show);
  }
  const SavePassword = () => {
    setpasswordArray([...passwordArray, form])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    setform({ site: "", username: "", password: "" })

  }

  const HandleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }




  return (<>
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#f9a8d4_100%)]"></div>








    <div className="container mx-auto my-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
      <h1 className='text-4xl font-bold text-center'>
        <span className='text-pink-400'>&lt;</span>
        Pass
        <span className='text-pink-400'>OP/&gt;</span>
      </h1>
      <p className='text-black text-lg text-center'>Your Own Password Manager</p>

      <div className='flex flex-col p-4 gap-3 '>
        <input value={form.site} onChange={HandleChange} className='rounded-full pl-3 w-full border border-pink-300 mt-5
         focus:border-pink-500 focus:shadow-[0_0_6px_rgba(236,72,153,0.6)]
         focus:outline-none transition-all duration-300 ease-in-out' type="text" name="site" id="" placeholder='Enter Website URL ' />
        <div className="flex gap-5 justify-between w-full flex-col sm:flex-row">
          <input value={form.username} onChange={HandleChange} className='rounded-full pl-3 w-full border border-pink-300 mt-5
         focus:border-pink-500 focus:shadow-[0_0_6px_rgba(236,72,153,0.6)]
         focus:outline-none transition-all duration-300 ease-in-out' type="text" name='username' placeholder='Enter Username' />
          <div className='relative w-full '>

            <input value={form.password} onChange={HandleChange} name='password' className='rounded-full pl-3 w-full border border-pink-300 mt-5
         focus:border-pink-500 focus:shadow-[0_0_6px_rgba(236,72,153,0.6)]
         focus:outline-none transition-all duration-300 ease-in-out'  type={show ? "text" : "password"} placeholder='Enter Password' />
            <span onClick={eyechange} className='absolute top-5 right-5 cursor-pointer'>{show ? (<svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f9a8d4"
              strokeWidth="2"
              className="w-6 h-6">
              <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
              <circle cx="12" cy="12" r="3" />
            </svg>) : (<svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f9a8d4"
              strokeWidth="2"
              className="w-6 h-6">

              <path d="M3 3l18 18" />


              <path d="M1 12c1.5-3.5 5.5-7 11-7s9.5 3.5 11 7c-1.5 3.5-5.5 7-11 7S2.5 15.5 1 12z" />


              <circle cx="12" cy="12" r="3" />
            </svg>
            )}
            </span>
          </div>
        </div>
        <div className='flex justify-center'>

          <button onClick={SavePassword} disabled={form.site.length === 0 || form.username.length === 0 || form.password.length === 0} className=' gap-2 password text-[17px] flex justify-center items-center bg-pink-400 rounded-full px-9 py-2  hover:text-[20px] mt-5  transition-all ease-in-out duration-300 border-2 border-pink-600 '>
            <lord-icon

              src="https://cdn.lordicon.com/gzqofmcx.json"
              trigger="hover"
              colors="primary:#000000,secondary:#000000,tertiary:#000000"
            >
            </lord-icon>Add Paswword</button>
        </div>
      </div>

      <div className="passwords">
        <h2>Your Passwords</h2>
        {passwordArray.length === 0 && <div>No Passwords Saved Yet</div>}
        {passwordArray.length != 0 && <div className="overflow-x-auto overflow-y-scroll h-51 md:h-[22vw]">
          <table className="min-w-full border border-pink-300 rounded-xl overflow-hidden">
            <thead className="bg-pink-200 text-pink-700">
              <tr>
                <th className="px-4 py-3 text-left font-semibold sm:px-4 text-xs sm:text-base">Website</th>
                <th className="px-4 py-3 text-left font-semibold sm:px-4 text-xs sm:text-base">Username</th>
                <th className="px-4 py-3 text-left font-semibold sm:px-4 text-xs sm:text-base">Password</th>
                <th className="px-4 py-3 text-left font-semibold sm:px-4 text-xs sm:text-base">Actions</th>
                <th className="px-4 py-3 text-left font-semibold sm:px-4 text-xs sm:text-base">Edit/Delete</th>
              </tr>
            </thead>



              <tbody className="divide-y divide-pink-200  ">
                {passwordArray.map((item, index) => {

                  return <tr key={index} className="hover:bg-pink-50 transition ">
                    <td className="px-4 py-3 text-gray-700 sm:px-4 text-xs sm:text-base break-all"><a href={`https://${item.site}.com`} target='_blank'>{item.site}</a></td>
                    <td className="px-4 py-3 text-gray-700 sm:px-4 text-xs sm:text-base break-all">{item.username}</td>
                    <td className="px-4 py-3 text-gray-700 sm:px-4 text-xs sm:text-base">{visiblestate === index ? item.password : "••••••••"}</td>
                    <td className="px-4 py-3 sm:px-4">
                      <button onClick={() => setvisiblestate(visiblestate === index ? null : index)} className="text-pink-500 hover:text-pink-700 font-medium"><lord-icon
                        src="https://cdn.lordicon.com/dicvhxpz.json"
                        trigger="hover"
                        colors="primary:#e8308c,secondary:#e8308c">
                      </lord-icon></button>
                    </td>
                    <td className="px-4 py-3 flex gap-3 sm:px-4">
                      <button onClick={() => EditPassword(index)} className="editbtn text-pink-500 hover:text-pink-700 font-medium"><lord-icon
                        src="https://cdn.lordicon.com/exymduqj.json"
                        trigger="hover"
                        colors="primary:#e8308c,secondary:#ee66aa">
                      </lord-icon></button>
                      <button onClick={() => { DeletePassword(index) }} className="dltBtn text-pink-500 hover:text-pink-700 font-medium"><lord-icon
                        src="https://cdn.lordicon.com/jzinekkv.json"
                        trigger="hover"
                        colors="primary:#ee66aa,secondary:#e8308c">
                      </lord-icon></button>
                    </td>
                  </tr>
                })}
              </tbody>


          </table>
        </div>}
      </div>


    </div>
  </>
  )
}

export default Manager