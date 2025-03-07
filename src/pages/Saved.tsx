import React from 'react'
import Header from '../components/layout/Header';
import SavedJobsCard from '../components/common/SavedJobsCard';
import { useSavedJobs } from '../components/context/SavedJobsContext';

import Footer from '../components/layout/Footer';
const SavedJobs:React.FC=() => {
 const{savedJobs}=useSavedJobs()
   
  return (
    <>
    <Header/>
    <section className="mx-auto py-9 bg-[#253C56] w-full h-auto">
 <h1 className='text-center mb-5 text-2xl'>Your Saved Jobs</h1>
 {savedJobs.length ===0 ? (
<p  className="mx-auto max-w-4xl text-center p-6 border border-red-300 bg-red-100 text-red-700 rounded-xl shadow-md [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box]">No Saved Jobs</p>
 ) :
 (
    <div>
        <p className='text-center text-white text-xl mb-2'>You have <span className='text-green-600 font-bold text-2xl'> {savedJobs.length }</span> saved jobs</p>
        {savedJobs.map((job)=>(
            <div key={job.id}>
<SavedJobsCard job={job}/>
            </div>
          

        ))}
    </div>
 )
}
   </section>
      <section>
        <Footer/>
      </section>
   </>
  )
}

export default SavedJobs