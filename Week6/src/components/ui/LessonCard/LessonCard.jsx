import { Link } from "react-router-dom";

export const LessonCardList = ({
  idx,
  item: { thumbnail, title, description, duration },
}) => {
  return (
    <div className='gap-x-6 sm:flex'>
      <Link
        to={"/"}
        className='sm:max-w-[17rem]'>
        <img
          src={thumbnail}
          className='rounded-lg w-full'
          alt={title}
          loading='lazy'
        />
      </Link>
      <div className='space-y-2 pt-4 sm:pt-0'>
        <div className='text-sm flex items-center justify-between'>
          <h1>Lesson {idx + 1}</h1>
          <p className='sm:hidden'>{duration}</p>
        </div>
        <h1>
          <Link to={"/"}>{title}</Link>
        </h1>
        <p className='max-w-xl text-gray-600 dark:text-gray-300 sm:line-clamp-2'>
          {description}
        </p>
        <p className='hidden sm:block'>{duration}</p>
      </div>
    </div>
  );
};
