import * as React from 'react';

interface AdminDashboardMainStatusCardUIProps {
  status: string;
  amount: number;
  svgPath: React.ReactNode;
  color: Color;
}

export type Color = 'orange' | 'green' | 'blue' | 'pink' | 'yellow';

const AdminDashboardMainStatusCardUI = (props: AdminDashboardMainStatusCardUIProps) => {
  return (
    <div className='p-4 border-2 border-gray-200 bg-white flex w-60 justify-between items-center'>
      <div>
        <h6 className='font-bold'>{props.amount}</h6>
        <h6 className={`text-white bg-${props.color}-500 p-2 mt-4`}>
          {props.status}
        </h6>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        className='w-9 h-9'
      >
        {props.svgPath}
      </svg>
    </div>
  );
};

export default AdminDashboardMainStatusCardUI;