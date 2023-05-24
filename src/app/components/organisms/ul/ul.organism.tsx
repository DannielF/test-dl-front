import ListMolecule from '../../molecules/list/list.molecule';

export default function UlOrganism() {
  return (
    <ul className="nav nav-pills flex-column mb-auto mt-4 list-group list-group-flush">
      <ListMolecule anchorName="List user" />
      <ListMolecule anchorName="Get by id" />
      <ListMolecule anchorName="Get by document" />
      <ListMolecule anchorName="Get by email" />
      <ListMolecule anchorName="Create user" />
      <ListMolecule anchorName="Add user rol" />
      <ListMolecule anchorName="Update user" />
      <ListMolecule anchorName="Delete user" />
    </ul>
  );
}
