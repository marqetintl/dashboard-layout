import * as React from 'react';

import { GiBlackball } from 'react-icons/gi';
import { BsArrowLeftShort, BsChevronDown } from 'react-icons/bs';

export default function App() {
  const [open, setOpen] = React.useState<boolean>(true);
  const [submenuOpen, setSubmenuOpen] = React.useState<boolean>(false);

  return (
    <div className="flex flex-row-reverse">
      <div className="p-5 bg-gray-50">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <p className="text-xs md:text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        </p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut
        modi vero fugit praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi
        vero fugit praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero
        fugit praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Eum nobis temporibus minima assumenda dolor unde ut modi vero fugit
        praesentium, quae obcaecati magnam numquam? Molestias nulla fugiat tempora natus eveniet.
      </div>

      <div
        className={`w-full overflow-visible ${
          open ? 'md:w-72' : 'md:w-20'
        } md:h-screen bg-dark-purple flex flex-row md:flex-col fixed bottom-0 md:top-0 md:relative p-5 md:pt-8 duration-300`}
      >
        <BsArrowLeftShort
          onClick={() => setOpen(!open)}
          className={`text-3xl rounded-full border absolute -right-3 top-9 cursor-pointer ${
            !open && 'rotate-180'
          } duration-300 bg-white text-dark-purple hidden md:block`}
        />

        <div className="inline-flex hidden md:block">
          <GiBlackball className="bg-amber-300 text-2xl rounded cursor-pointer block float-left mr-2" />
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>
            marqetintl
          </h1>
        </div>

        <div className="flex flex-row md:flex-col mt-8">
          {sidebarItems.map(({ icon: Icon, ...item }, index) => {
            const hasChildren = item.children && item.children.length > 0;
            return (
              <>
                <div
                  className={`text-gray-300 bg-blue-50 text-sm flex flex-col md:flex-row items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                    item.space ? 'mt-8' : 'mt-2'
                  } `}
                  key={index}
                >
                  {Icon && (
                    <div className="span text-2xl block float-left">
                      <Icon />
                    </div>
                  )}
                  <span className={`text-base font-medium flex-1 ${!open && 'hidden'} duration-300`}>{item.title}</span>

                  {open && hasChildren && (
                    <BsChevronDown
                      onClick={() => setSubmenuOpen(!submenuOpen)}
                      className={`${submenuOpen && 'rotate-180'} duration-300 hidden md:block`}
                    />
                  )}
                </div>

                {open && submenuOpen && hasChildren && (
                  <div className="">
                    {item.children?.map((child, index) => {
                      return (
                        <div
                          className={`text-gray-300 bg-blue-50 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 pl-5`}
                          key={index}
                        >
                          {child.title}
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

type SidebarItemProps = {
  title: string;
  icon?: React.ElementType;
  space?: boolean;
  children?: SidebarItemProps[];
};

const sidebarItems: SidebarItemProps[] = [
  { title: 'Dashboard' },
  { title: 'Pages' },
  { title: 'Media' },
  {
    title: 'Projects',
    icon: GiBlackball,
    space: true,
    children: [{ title: 'Project 1' }, { title: 'Project 3' }, { title: 'Project 2' }],
  },
  { title: 'Analytics' },
  { title: 'Inbox' },
  { title: 'Profile', space: true },
  { title: 'Settings' },
  { title: 'Logout' },
];
