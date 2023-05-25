import AnchorAtom from '../../atoms/anchor/anchor.atom';
import UlOrganism from '../../organisms/ul/ul.organism';

export default function SidebarTemplate() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-secondary sidebar">
      <AnchorAtom anchorName="Users" />
      <UlOrganism />
    </div>
  );
}
