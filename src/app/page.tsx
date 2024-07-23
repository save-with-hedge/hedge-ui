'use client';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import {createAccountLink, getBooks, getRegionsForBook} from "@/app/api";
import Form from "@/app/components/Form";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [states, setStates] = useState([]);
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [phone, setPhone] = useState('');
    const [stateAbbr, setStateAbbr] = useState('');
    const [book, setBook] = useState('');
    const [activeLink, setActiveLink] = useState('');
    const [showSelectionError, setShowSelectionError] = useState(false);

    useEffect(() => {
        getBooks().then((response) => {
            if (response) {
                setBooks(response['books']);
            }
        });
    }, []);

    useEffect(() => {
        if (book) {
            getRegionsForBook(book).then((response) => {
                if (response) {
                    setStates(response['regions']);
                }
            })
        }
    }, [book])

    const allFieldsFilled = () => {
        if (!first || !last || !phone || !book || !stateAbbr) {
            setShowSelectionError(true);
            return false;
        } else {
            setShowSelectionError(false);
            return true;
        }
    }

    const onSubmit = () => {
        if (!allFieldsFilled()) {
            return;
        }
        createAccountLink(first, last, phone, stateAbbr, book).then((response) => {
            if (response) {
                setActiveLink(response['url']);
            }
        });
    }

    const onGoBack = () => {
        setActiveLink('');
    }

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-12'>
            {activeLink && (
                <div className='relative top-28 right-96 px-8 py-8'>
                    <button
                        className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
                        onClick={onGoBack}
                    >
                        Go back to form
                    </button>
                </div>
            )}
            <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-1 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <Image
                        className='relative my-0 mx-auto'
                        src='/logo-cropped.svg'
                        alt='Next.js Logo'
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{width: '75%', height: 'auto'}}
                        priority
                    />
                    {activeLink ? (
                        <h2 className='mt-20 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                            Please login to your sportsbook by clicking
                            <a href={activeLink}
                               className='ml-1 text-blue-600 dark:text-blue-500 hover:underline'>here</a>
                        </h2>

                    ) : (
                        <h2 className='mt-20 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                            Please fill out all fields and submit
                            {showSelectionError &&
                                <p className='mt-2 text-center text-xl leading-9 tracking-tight text-red-500'>
                                    Invalid: please fill out all fields
                                </p>}
                        </h2>)}
                </div>
                {!activeLink && (
                    <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <Form
                            onSubmit={onSubmit}
                            setFirst={setFirst}
                            setLast={setLast}
                            setPhone={setPhone}
                            setStateAbbr={setStateAbbr}
                            book={book}
                            setBook={setBook}
                            bookOptions={books}
                            stateOptions={states}
                        />
                    </div>
                )}
            </div>
        </main>
    );
}

export default Home;
