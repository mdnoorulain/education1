import React from "react";

function Admission() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center w-full text-gray-900 px-6">
      <div className="max-w-xl mx-auto py-12  divide-y md:max-w-4xl">
        <div className="py-8">
          <h1 className="text-4xl font-bold">Welcome To My A.F Academy</h1>
          <p className="mt-2 text-lg text-gray-600">
            Entrusting your child's future to A.F. Academy ensures a holistic
            education, fostering excellence in academics, character development,
            and leadership skills, shaping tomorrow's leaders with a foundation
            built on integrity and knowledge.
          </p>
        </div>

        <div className="p-8 text-left w-full flex items-center justify-center rounded-xl shadow shadow-gray-300 bg-secondary">
          <form
            action="https://getform.io/f/d054a5ba-4cdf-4004-8f3a-823e5abd1095"
            method="POST"
          >
            <div className="mt-4 max-w-md">
              <h1 className="text-2xl text-center font-bold">Admission Form</h1>
              <div className="mt-4 grid grid-cols-1 gap-6">
                <label className="block">
                  <span className="text-gray-700">Full name</span>
                  <input
                    type="text"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Frank Adomson "
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Email address</span>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="example@example.com"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Date of Birth</span>
                  <input
                    type="date"
                    name="DOB"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">
                    What type of event is it?
                  </span>
                  <select
                    name="query"
                    className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    <option>Admission</option>
                    <option>Query</option>
                    <option>Suggestion</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-gray-700">Additional details</span>
                  <textarea
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    rows={3}
                    defaultValue={""}
                    placeholder="Enter message here........"
                  />
                </label>
                <div className="block">
                  <div className="mt-2">
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          name="message"
                          type="checkbox"
                          className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                          defaultChecked=""
                        />
                        <span className="ml-2">
                          Email me news and special offers
                        </span>
                      </label>
                    </div>
                    <div className=" flex items-center justify-center">
                      <button
                        className="my-8  bg-teal-500 text-white px-6 py-3
                        font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200"
                      >
                        send message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admission;
