'use client';
import Link from 'next/link';
import styles from './list.module.css';
import PathName from '../../../hooks/usePathName';

export type ListMoleculeProps = {
  anchorName: string;
  routerPath: string;
};

const classCss = `"nav-item list-group-item" ${styles.list_bg_color}`;

export default function ListMolecule({
  anchorName,
  routerPath
}: ListMoleculeProps) {
  const path = PathName();
  console.log(path);
  return (
    <li className={classCss}>
      {path != `/${routerPath}` && (
        <Link
          href={routerPath}
          className="d-flex align-items-center mt-4 mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          data-bcup-haslogintext="no"
        >
          {anchorName}
        </Link>
      )}
    </li>
  );
}
