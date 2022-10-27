import React from 'react';
import CustomerReviews from '../../../others/CustomerReviews';

const Home = () => {
    return (
        <>
            {/*-------- banner section start------ */}
            <div className='flex p-10 lg:px-40 lg:mb-60'>
                <div className=' w-full lg:w-3/5  lg:pt-32'>
                    <h1 className='text-4xl lg:text-6xl font-semibold '>Learn without limits</h1>
                    <p className='lg:text-xl mt-7 mb-6'>Start, switch, or advance your career with more than 5,200 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
                    <button className='w-full lg:w-40 btn btn-primary lg:mr-3 mb-5'>Join for Free</button> <button className='w-full lg:w-60 btn btn-outline btn-primary'>Try Akadimia for Business</button>
                </div>
                <div className='w-2/5 hidden lg:flex mt-20'>
                    <div className='bg-primary rounded-2xl absolute ml-28 shadow-2xl'>
                        <img src="https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" className='h-96 rounded-2xl  relative -top-3 -left-3' />
                    </div>
                </div>
            </div >
            {/*-------- banner section end------ */}

            <div className='text-center'>
                <h1 className='text-3xl lg:text-5xl font-semibold mb-3 text-primary'>From the Akadimia community</h1>
                <p className='text-xl lg:text-2xl mb-10'>107+ million people are already learning on Akadimia</p>
            </div>
            <CustomerReviews></CustomerReviews>
        </>
    );
};

export default Home;