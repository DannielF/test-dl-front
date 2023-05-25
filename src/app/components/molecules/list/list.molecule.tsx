import Link from 'next/link';
import styles from './list.module.css';

export type ListMoleculeProps = {
  anchorName: string;
  routerPath: string;
};

const classCss = `"nav-item list-group-item" ${styles.list_bg_color}`;

export default function ListMolecule({
  anchorName,
  routerPath
}: ListMoleculeProps) {
  return (
    <li className={classCss}>
      <Link
        href={routerPath}
        className="d-flex align-items-center mt-4 mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        {anchorName}
      </Link>
    </li>
  );
}
