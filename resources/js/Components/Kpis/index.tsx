import React, { Fragment } from 'react';
import { IconContext } from 'react-icons';
import { IoTime } from 'react-icons/io5';

interface KpiTesteProps {
  icon: any;
  title: string;
  value: string;
  valrep?: string;
  textcolor: string;
  bgcolor: string;
  iconcolor: string;
}

export const Kpi = (props: KpiTesteProps) => {

  return (

    <div className="flex flex-col bg-gray-50 rounded-md shadow-md border border-white">
      <div className="flex items-center justify-between p-6">
        <div className="flex flex-1 flex-col items-start justify-between">
          <div className="text-base text-gray-400 ">{props.title}</div>
          <div className="text-xl font-bold text-gray-800 ">{props.value}</div>
        </div>
        <div className={`flex items-center justify-center ${props.iconcolor}`}>
          {props.icon}
        </div>
      </div>
    </div>
  )

}
