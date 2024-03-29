import React from 'react'

export default function ContactSection() {
    return (
        <div className="h-dvh flex items-center" id='abtMove'>
            <div className="container mx-auto">
                <h2 className='text-6xl font-semibold'>Contact Us</h2>
                <div className="mt-5 w-[5rem] border-4 border-b-2 border-[#000] border-solid"></div>
                <p className='my-4'>Magnam dolores commodi suscipit. Necessitatibus eius
                    consequatur ex aliquid fuga eum quidem. Sit sint
                    consectetur velit. Quisquam quos quisquam cupiditate.
                    Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                    in iste officiis commodi quidem hic quas.</p>
                <div className="flex items-center">
                    <div className="w-1/5">
                        w-1/5
                    </div>
                    <div className="w-2/3">
                        <form>
                            <div className="flex flex-wrap">
                                <div className="w-1/2">
                                    <label class="block">
                                        <span class="block text-sm font-medium text-slate-700">Your Name</span>
                                        <input type="text" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter You name" />
                                    </label>
                                </div>
                                <div className="w-1/2">
                                    <label class="block">
                                        <span class="block text-sm font-medium text-slate-700">Email</span>
                                        <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter You Email" />
                                    </label>
                                </div>
                                <div className="w-full">
                                    <label class="block">
                                        <span class="block text-sm font-medium text-slate-700">Subject</span>
                                        <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Subject" />
                                    </label>
                                </div>
                                <div className="w-full">
                                    <label class="block">
                                        <span class="block text-sm font-medium text-slate-700">Message</span>
                                    </label>
                                    <textarea name="" className='resize-none h-40 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'>Message</textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-1/5">
                        w-1/5
                    </div>
                </div>
            </div>
        </div>
    )
}
