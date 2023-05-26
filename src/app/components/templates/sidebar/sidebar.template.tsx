import styles from './sidebar.module.css';
import AnchorAtom from '../../atoms/anchor/anchor.atom';
import UlOrganism from '../../organisms/ul/ul.organism';

const classesCss = `d-flex flex-column flex-shrink-0 p-3 bg-body-secondary ${styles.sidebar}`;

export default function SidebarTemplate() {
  return (
    <div className={classesCss}>
      <AnchorAtom anchorName="Users" />
      <UlOrganism />
    </div>
  );
}
