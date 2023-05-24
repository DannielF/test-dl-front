import styles from './list.module.css';

export type ListMoleculeProps = {
  anchorName: string;
};

const classCss = `"nav-item list-group-item" ${styles.list_bg_color}`;

export default function ListMolecule({ anchorName }: ListMoleculeProps) {
  return (
    <li className={classCss}>
      <a
        href="#"
        className="nav-link link-body-emphasis"
        aria-current="page"
        data-bcup-haslogintext="no"
      >
        {anchorName}
      </a>
    </li>
  );
}
