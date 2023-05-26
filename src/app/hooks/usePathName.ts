import { usePathname } from 'next/navigation';

const PathName = () => {
  let path = usePathname();
  path.split('#')[0].split('?')[0];
  return path;
};

export default PathName;
