'use client';
import {useState} from 'react';
import Image from 'next/image';
import {createAccountLink} from "@/app/api";

const Home = () => {
    const stateOptions = ['NY', 'NJ', 'CA', 'FL']
    const bookOptions = ['Fanduel', 'DraftKings', 'BetMGM', 'Underdog', 'Caesar\'s']

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [phone, setPhone] = useState('');
    const [stateAbbr, setStateAbbr] = useState('');
    const [book, setBook] = useState('');

    const onSubmit = () => {
        // console.log(`first ${first} last ${last} phone ${phone} stateAbbr ${stateAbbr} book ${book}`);
        const apiResponse = createAccountLink(first, last, phone, stateAbbr, book);
        console.log(apiResponse);
    }

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <Image
                        className='relative my-0 mx-auto'
                        src='/logo.svg'
                        alt='Next.js Logo'
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '75%', height: 'auto' }}
                        priority
                    />
                    <h2 className='mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                        Please fill out all fields and submit
                    </h2>
                </div>
                <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form action={onSubmit} className='space-y-6'>
                        <div>
                            <label htmlFor='first' className='block text-sm font-medium leading-6 text-gray-900'>
                                First Name
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='first'
                                    name='first'
                                    type='text'
                                    required
                                    className='block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    onChange={e => setFirst(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center justify-between'>
                                <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                                    Last Name
                                </label>
                            </div>
                            <div className='mt-2'>
                                <input
                                    id='last'
                                    name='last'
                                    type='text'
                                    required
                                    className='block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    onChange={e => setLast(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center justify-between'>
                                <label htmlFor='phone' className='block text-sm font-medium leading-6 text-gray-900'>
                                    Phone
                                </label>
                            </div>
                            <div className='mt-2'>
                                <input
                                    id='phone'
                                    name='phone'
                                    type='tel'
                                    required
                                    autoComplete='tel'
                                    className='block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    placeholder='(XXX) XXX-XXXX'
                                    onChange={e => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center justify-between'>
                                <label htmlFor='state' className='block text-sm font-medium leading-6 text-gray-900'>
                                    State
                                </label>
                            </div>
                            <div className='mt-2'>
                                <select
                                    id='stateAbbr'
                                    name='stateAbbr'
                                    className='block px-2 w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    onChange={e => setStateAbbr(e.target.value)}
                                >
                                    <option value=''>Select</option>
                                    {stateOptions.map(stateAbbr => {
                                        return (<option key={stateAbbr}
                                                        value={stateAbbr}>{stateAbbr}</option>);
                                    })}
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center justify-between'>
                                <label htmlFor='book' className='block text-sm font-medium leading-6 text-gray-900'>
                                    Sportsbook
                                </label>
                            </div>
                            <div className='mt-2'>
                                <select
                                    id='book'
                                    name='book'
                                    className='block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    onChange={e => setBook(e.target.value)}
                                >
                                    <option value=''>Select</option>
                                    {bookOptions.map(book => {
                                        return (<option key={book} value={book}>{book}</option>);
                                    })}
                                </select>
                            </div>
                        </div>
                        <div>
                            <button
                                type='submit'
                                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Home;
