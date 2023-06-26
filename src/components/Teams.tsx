import React from 'react';

import config from '../config/index.json';

const Teams = () => {
  const { company, teams } = config;
  const { name: companyName } = company;
  const { title, sections } = teams;

  return (
    <div
      id="teams"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="mt-8">
          <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
            <h1
              className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
            >
              {title}
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {sections.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mb-2"
                />
                <p className="text-lg font-medium">{member.name}</p>
                {/* <p className="text-gray-500">{member.role}</p> */}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} Property of {companyName}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Teams;
