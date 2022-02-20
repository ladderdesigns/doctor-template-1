import Image from 'next/image';

import { attributes } from '../../content/about-us.md';

export default function OurTeam() {
  const { employees } = attributes;
  return (
    <div className="bg-white max-w-7xl mx-auto my-11 my-auto rounded-xl shadow-xl">
      <div className="mx-auto px-4 py-12 rounded-xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:gap-8 lg:grid lg:grid-cols-3 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="font-semibold text-3xl tracking-tight sm:text-4xl">
              Our team
            </h2>
            <p className="text-gray-500 text-xl">
              Nulla quam felis, enim faucibus proin velit, ornare id pretium.
              Augue ultrices sed arcu condimentum vestibulum suspendisse.
              Volutpat eu faucibus vivamus eget bibendum cras.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:gap-x-6 sm:gap-y-12 sm:grid sm:grid-cols-2 sm:space-y-0 lg:gap-x-8"
            >
              {employees.map((employee, key) => (
                <li key={key}>
                  <div className="space-y-4">
                    <div className="aspect-h-2 aspect-w-3">
                      <Image
                        src={employee.imageUrl}
                        layout="fill"
                        alt={employee.name}
                        objectFit="cover"
                      />
                    </div>
                    <div className="font-medium leading-6 space-y-1 text-lg">
                      <h3 className="text-2xl">{employee.name}</h3>
                      <p className="text-blue-800">{employee.role}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500">{employee.bio}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
