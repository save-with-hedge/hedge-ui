interface FormProps {
    onSubmit: () => void;
    setFirst: (val: string) => void;
    setLast: (val: string) => void;
    setPhone: (val: string) => void;
    setStateAbbr: (val: string) => void;
    book: string;
    setBook: (val: string) => void;
    bookOptions: string[];
    stateOptions: string[];
}

const Form = ({onSubmit, setFirst, setLast, setPhone, setStateAbbr, book, setBook, bookOptions, stateOptions}: FormProps) => {

    return (
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
                        autoComplete='tel'
                        className='block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        placeholder='(XXX) XXX-XXXX'
                        onChange={e => setPhone(e.target.value)}
                    />
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
            { book && (
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
                            {stateOptions.sort().map(stateAbbr => {
                                return (<option key={stateAbbr}
                                                value={stateAbbr}>{stateAbbr}</option>);
                            })}
                        </select>
                    </div>
                </div>
            )}
            <div>
                <button
                    type='submit'
                    className='flex w-full mt-14 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default Form;
